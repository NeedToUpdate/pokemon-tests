class Xoroshiro {
    constructor(seed) {
        // if(seed.toString()[1] !="x") seed = "0x"+ seed
        this.s0 = BigInt.asUintN(64, BigInt(seed))
        this.s1 = BigInt.asUintN(64, 0x82a2b175229d6a5bn)
        // console.log(this.s0,this.s1)
    }

    getRaw(index, mask) {
        mask = BigInt.asUintN(64, BigInt(mask))
        if (index === 0) {
            return this.s0 & mask
        }
        return this.s1 & mask
    }

    rotateLeft(val, amount) {
        // val = BigInt.asUintN(64,val)
        amount = BigInt.asUintN(64, BigInt(amount))
        let left = BigInt.asUintN(64, val << amount)
        let tmp = (BigInt(64) - amount)
        let right = BigInt.asUintN(64, val >> tmp)
        //  console.log(left,right)
        return left | right
    }

    next(mask) {
        //if(mask.toString()[1] != "x") mask = parseInt(mask,16)
        mask = BigInt.asUintN(32, BigInt(mask))
        let val = (this.s0 + this.s1) & mask
        this.s1 = BigInt.asUintN(64, this.s0 ^ this.s1)
        //console.log("s1" , this.s1)
        this.s0 = this.rotateLeft(this.s0, 24) ^ this.s1 ^ BigInt.asUintN(64, (this.s1 << BigInt(16)))
        //  console.log("s01", this.s0)
        this.s1 = BigInt.asUintN(64, this.rotateLeft(this.s1, 37))
        //   console.log("s0s1",this.s0,this.s1)
        return Number(val)
    }

}

class ListGen {
    constructor(denSeed, maxCount, vCount, isShinycheck, isNogender, isHA, isShowseed) {
        this.seed = typeof this.seed === 'bigint'? seed : BigInt(denSeed)
        this.maxCount = maxCount || 100
        this.vCount = vCount
        this.isShinycheck = isShinycheck || false
        this.isNogender = isNogender || false
        this.isHA = isHA || true
        this.isShowseed = isShowseed || false
    }

    generate() {

        let ec, otid, pid = 0
        let fixedIndex
        let ability
        let gender
        let nature
        let ivs = []
        let results = []
        for (let frame = 0; frame < this.maxCount; frame++) {
            let xs = new Xoroshiro(this.seed)
            ec = Number(xs.next(BigInt.asUintN(32,0xFFFFFFFFn)))
            otid = Number(xs.next(BigInt.asUintN(32,0xFFFFFFFFn)))
            pid = Number(xs.next(BigInt.asUintN(32,0xFFFFFFFFn)))
            //console.log(ec)

            let isShiny = ((((otid ^ (otid >> 16)) >> 4) & 0xFFF) == (((pid ^ (pid >> 16)) >> 4) & 0xFFF));
            let isSquare = (((otid ^ (otid >> 16)) & 0xFFFF) == ((pid ^ (pid >> 16)) & 0xFFFF));

            if (this.isShinycheck && !isShiny) {
                this.seed = this.seed + 0x82a2b175229d6a5bn
                continue;
            }

            for (let i = 0; i < 6; i++) {
                ivs[i] = -1;
            }
            // console.log(ivs)
            let fixedCount = 0;

            do {
                fixedIndex = 0;
                do {
                    fixedIndex = xs.next(0x7);
                    //console.log(fixedIndex)
                } while (fixedIndex >= 6);

                if (ivs[fixedIndex] === -1) {
                    ivs[fixedIndex] = 31;
                    fixedCount++;
                }
            } while (fixedCount < this.vCount);

            for (let i = 0; i < 6; i++) {
                if (ivs[i] === -1) {
                    ivs[i] = xs.next(0x1F);
                }
            }
            if (this.isHA) {
                do {
                    ability = xs.next(0x3);
                } while (ability >= 3);
            } else {
                ability = xs.next(1);
            }

            if (!this.isNogender) {
                do {
                    gender = xs.next(0xFF);
                } while (gender >= 253);
            }

            do {
                nature = xs.next(0x1F);
            } while (nature >= 25);

            let final = {
                frame: frame,
                ivs: Array.from(ivs),
                isShiny: isSquare ? "square" : isShiny ? "star" : "no",
                nature: nature,
                ability: ability === 2 ? "HA" : ability+1,
                gender: gender,
            }
            results.push(final)
            this.seed = BigInt.asUintN(64, this.seed + 0x82a2b175229d6a5bn);
        }
        return results
    }
}