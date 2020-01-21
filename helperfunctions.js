const c_XoroshiroConst = 0x82a2b175229d6a5bn;

const constants = [
    67108864n,
    67108864n,
    33554432n,
    33554432n,
    16777216n,
    16777216n,
    8388608n,
    8388608n,
    4194304n,
    4194304n,
    2097152n,
    2097152n,
    1048576n,
    1048576n,
    524288n,
    524288n,
    262144n,
    262144n,
    131072n,
    131072n,
    65536n,
    65536n,
    32768n,
    32768n,
    16384n,
    16384n,
    8192n,
    8192n,
    4096n,
    4096n,
    2048n,
    2048n,
    1024n,
    1024n,
    512n,
    512n,
    256n,
    256n,
    128n,
    128n,
    64n,
    64n,
    32n,
    32n,
    16n,
    16n,
    8n,
    8n,
    4n,
    4n,
    2n,
    2n,
    1n,
    1n,
    9223372036854775808n,
    9223372036854775808n,
    4611686018427387904n,
    4611686018427387904n,
    2305843009213693952n,
    2305843009213693952n,
    1152921504606846976n,
    1152921504606846976n,
    576460752303423488n,
    576460752303423488n,
    288230376151711744n,
    288230376151711744n,
    144115188075855872n,
    144115188075855872n,
    72057594037927936n,
    72057594037927936n,
    36028797018963968n,
    36028797018963968n,
    18014398509481984n,
    18014398509481984n,
    9007199254740992n,
    9007199254740992n,
    4503599627370496n,
    4503599627370496n,
    2251799813685248n,
    2251799813685248n,
    1125899906842624n,
    1125899906842624n,
    562949953421312n,
    562949953421312n,
    281474976710656n,
    281474976710656n,
    140737488355328n,
    140737488355328n,
    70368744177664n,
    70368744177664n,
    35184372088832n,
    35184372088832n,
    17592186044416n,
    17592186044416n,
    8796093022208n,
    8796093022208n,
    4398046511104n,
    4398046511104n,
    2199023255552n,
    2199023255552n,
    1099511627776n,
    1099511627776n,
    549755813888n,
    549755813888n,
    274877906944n,
    274877906944n,
    137438953472n,
    137438953472n,
    68719476736n,
    68719476736n,
    34359738368n,
    34359738368n,
    17179869184n,
    17179869184n,
    8589934592n,
    8589934592n,
    4294967296n,
    4294967296n,
    2147483648n,
    2147483648n,
    1073741824n,
    1073741824n,
    536870912n,
    536870912n,
    268435456n,
    268435456n,
    134217728n,
    134217728n,
    9223512774343131136n,
    9223513324098945024n,
    4611756387171565568n,
    4611756662049472512n,
    2305878193585782784n,
    2305878331024736256n,
    1152939096792891392n,
    1152939165512368128n,
    576469548396445696n,
    576469582756184064n,
    288234774198222848n,
    288234791378092032n,
    144117387099111424n,
    144117395689046016n,
    72058693549555712n,
    72058697844523008n,
    36029346774777856n,
    36029348922261504n,
    18014673387388928n,
    18014674461130752n,
    9007336693694464n,
    9007337230565376n,
    4503668346847232n,
    4503668615282688n,
    2251834173423616n,
    2251834307641344n,
    1125917086711808n,
    1125917153820672n,
    562958543355904n,
    562958576910336n,
    281479271677952n,
    281479288455168n,
    140739635838976n,
    140739644227584n,
    70369817919488n,
    70369822113792n,
    35184908959744n,
    35184911056896n,
    17592454479872n,
    17592455528448n,
    8796227239936n,
    8796227764224n,
    4398113619968n,
    4398113882112n,
    2199056809984n,
    2199056941056n,
    1099528404992n,
    1099528470528n,
    549764202496n,
    549764235264n,
    274882101248n,
    274882117632n,
    137441050624n,
    137441058816n,
    68720525312n,
    68720529408n,
    34360262656n,
    34360264704n,
    17180131328n,
    17180132352n,
    8590065664n,
    8590066176n,
    4295032832n,
    4295033088n,
    2147516416n,
    2147516544n,
    1073758208n,
    1073758272n,
    536879104n,
    536879136n,
    268439552n,
    268439568n,
    134219776n,
    134219784n,
    67109888n,
    67109892n,
    33554944n,
    33554946n,
    16777472n,
    16777473n,
    8388736n,
    9223372036863164544n,
    4194368n,
    4611686018431582272n,
    2097184n,
    2305843009215791136n,
    1048592n,
    1152921504607895568n,
    524296n,
    576460752303947784n,
    262148n,
    288230376151973892n,
    131074n,
    144115188075986946n,
    65537n,
    72057594037993473n,
    32768n,
    36028797018996736n,
    16384n,
    18014398509498368n,
    8192n,
    9007199254749184n,
    4096n,
    4503599627374592n,
    2048n,
    2251799813687296n,
    1024n,
    1125899906843648n,
    512n,
    562949953421824n,
    256n,
    281474976710912n,
    128n,
    140737488355456n,
    64n,
    70368744177728n,
    32n,
    35184372088864n,
    16n,
    17592186044432n,
    8n,
    8796093022216n,
    4n,
    4398046511108n,
    2n,
    2199023255554n,
    1n,
    1099511627777n,
];


/**
 * @return {number}
 */
function GetSignature(value) {
    let a = (value ^ (value >> 32n));
    a = a ^ (a >> 16n);
    a = a ^ (a >> 8n);
    a = a ^ (a >> 4n);
    a = a ^ (a >> 2n);
    return (a ^ (a >> 1n)) & 1n;
}

class Xoroshiro {
    constructor(seed) {
        // if(seed.toString()[1] !="x") seed = "0x"+ seed
        this.s0 = BigInt.asUintN(64, BigInt(seed));
        this.s1 = BigInt.asUintN(64, 0x82a2b175229d6a5bn)
        // console.log(this.s0,this.s1)
    }

    getRaw(index, mask) {
        mask = BigInt.asUintN(64, BigInt(mask));
        if (index === 0) {
            return this.s0 & mask
        }
        return this.s1 & mask
    }

    rotateLeft(val, amount) {
        // val = BigInt.asUintN(64,val)
        amount = BigInt.asUintN(64, BigInt(amount));
        let left = BigInt.asUintN(64, val << amount);
        let tmp = (BigInt(64) - amount);
        let right = BigInt.asUintN(64, val >> tmp);
        //  console.log(left,right)
        return left | right
    }

    next(mask) {
        //if(mask.toString()[1] != "x") mask = parseInt(mask,16)
        mask = BigInt.asUintN(32, BigInt(mask));
        let val = (this.s0 + this.s1) & mask;
        this.s1 = BigInt.asUintN(64, this.s0 ^ this.s1);
        //console.log("s1" , this.s1)
        this.s0 = this.rotateLeft(this.s0, 24) ^ this.s1 ^ BigInt.asUintN(64, (this.s1 << BigInt(16)));
        //  console.log("s01", this.s0)
        this.s1 = BigInt.asUintN(64, this.rotateLeft(this.s1, 37));
        //   console.log("s0s1",this.s0,this.s1)
        return Number(val)
    }

}



function createPokemonData(ivs, ability, nature, characteristic, isNoGender, abilityFlag, flawlessIvs) {

    return {
        ivs: ivs,
        ability: ability,
        nature: nature,
        characteristic: characteristic,
        isNoGender: isNoGender,
        abilityFlag: abilityFlag,
        flawlessIvs: flawlessIvs,

        /**
         * @return {boolean}
         */
        IsCharacterized: function (index) // H A B "S" C D
        {
            switch (index) {
                case 0:
                    return (ivs[0] === 31);
                case 1:
                    return (ivs[1] === 31);
                case 2:
                    return (ivs[2] === 31);
                case 3:
                    return (ivs[5] === 31);
                case 4:
                    return (ivs[3] === 31);
                case 5:
                    return (ivs[4] === 31);
                defant:
                    return true;
            }
        }
    }
}


// �v�Z�p�f�[�^
let g_TempMatrix= Array(256);
let g_InputMatrix = Array(64); // CalcnateInverseMatrix�̑O�ɃZ�b�g����
let g_ConstantTermVector;
let g_Coefficient = Array(64);
let g_AnswerFlag = Array(64);
let  g_FreeBit = Array(64);
let  g_FreeId = Array(64);

let g_CoefficientData=[0x4000];
let g_SearchPattern=[0x4000];

let l_Temp= Array(256);

let l_isEnableECbit = false;

// �ϊ��s��v�Z
function InitializeTransformationMatrix(isEnableECbit)
{
    l_isEnableECbit = isEnableECbit;

    // r[0] �� (C1, seed)
    // r[1] �� c_N * (C1, seed)

    // c_N^1���Z�b�g
    for(let  i = 0; i < 256; ++i)
    {
        g_TempMatrix[i] = constants[i];
    }

}

function GetMatrix(){
    return g_TempMatrix;
}
function ProceedTransformationMatrix()
{
    for(let  i = 0; i < 256; ++i)
    {
        l_Temp[i] = g_TempMatrix[i];
    }

    for(let  y = 0; y < 128; ++y)
    {
        g_TempMatrix[y * 2] = 0;
        g_TempMatrix[y * 2 + 1] = 0;
        for(let  x = 0; x < 64; ++x)
        {
            let t0 = 0;
            let t1 = 0;
            for(let  i = 0; i < 64; ++i)
            {
                if((constants[y * 2] & (1n << (63 - i))) !== 0
            && (l_Temp[i * 2] & (1n << (63 - x))) !== 0)
                {
                    t0 = 1 - t0;
                }
                if((constants[y * 2 + 1] & (1n << (63 - i))) !== 0
            && (l_Temp[(i + 64) * 2] & (1n << (63 - x))) !== 0)
                {
                    t0 = 1 - t0;
                }

                if((constants[y * 2] & (1n << (63 - i))) !== 0
            && (l_Temp[i * 2 + 1] & (1n << (63 - x))) !== 0)
                {
                    t1 = 1 - t1;
                }
                if((constants[y * 2 + 1] & (1n << (63 - i))) !== 0
            && (l_Temp[(i + 64) * 2 + 1] & (1n << (63 - x))) !== 0)
                {
                    t1 = 1 - t1;
                }
            }
            g_TempMatrix[y * 2]     |= (t0 << (63 - x));
            g_TempMatrix[y * 2 + 1] |= (t1 << (63 - x));
        }
    }
}
function GetMatrixMntiplier(index)
{
    return g_TempMatrix[index * 2 + 1];
}

/**
 * @return {number}
 */
function GetMatrixConst(index)
{
    // s1����
    return GetSignature(g_TempMatrix[index * 2] & c_XoroshiroConst);
}

function CalcnateInverseMatrix(length)
{
    for (let  i = 0; i < length; ++i)
    {
        g_AnswerFlag[i] = (1n << (length - 1n - i));
    }

    let  skip = 0;
    for (let  i = 0; i < 64; ++i)
    {
        g_FreeBit[i] = 0;
    }

    for (let  rank = 0; rank < length; )
    {
        let top = (1n << (63n - (rank + skip)));
        let rankUpFlag = false;
        for (let  i = rank; i < length; ++i)
        {
            if ((g_InputMatrix[i] & top) !== 0) // ��ԍ���1
            {
                for (let  a = 0; a < length; ++a)
                {
                    if (a === i) continue;

                    // �������1������
                    if ((g_InputMatrix[a] & top) !== 0)
                    {
                        g_InputMatrix[a] ^= g_InputMatrix[i];
                        g_AnswerFlag[a] ^= g_AnswerFlag[i];
                    }
                }
                // �Ō�Ɉ�ԏ�Ɏ����Ă���
                let swapM = g_InputMatrix[rank];
                let swapF = g_AnswerFlag[rank];
                g_InputMatrix[rank] = g_InputMatrix[i];
                g_AnswerFlag[rank] = g_AnswerFlag[i];
                g_InputMatrix[i] = swapM;
                g_AnswerFlag[i] = swapF;

                ++rank;
                rankUpFlag = true;
            }
        }
        if (rankUpFlag === false)
        {
            // �}�[�L���O���ăX�L�b�v
            g_FreeBit[rank + skip] = 1;
            g_FreeId[skip] = rank + skip;
            ++skip;
        }
    }
    // ���Rbit
    for (let  i = length + skip; i < 64; ++i)
    {
        g_FreeBit[i] = 1;
        g_FreeId[i - length] = i;
    }

    // �W���������������o��
    for (let  i = 0; i < length; ++i)
    {
        g_Coefficient[i] = 0;
        for (let  a = 0; a < (64n - length); ++a)
        {
            g_Coefficient[i] |= (g_InputMatrix[i] & (1n << (63n - g_FreeId[a]))) >> ((length + a) - g_FreeId[a]);
        }
    }
}

function CalcnateCoefficientData(length)
{
    // �f�[�^�����
    let max = ((1 << (64 - length)) - 1);
    for (let search = 0; search <= max; ++search)
    {
        g_CoefficientData[search] = 0;
        g_SearchPattern[search] = 0;
        let  offset = 0;
        for (let  i = 0; i < length; ++i)
        {
            while (g_FreeBit[i + offset] > 0)
            {
                ++offset;
            }
            g_CoefficientData[search] |= (GetSignature(g_Coefficient[i] & search) << (63n - (i + offset)));
        }
        for (let  a = 0; a < (64 - length); ++a)
        {
            g_SearchPattern[search] |= (search & (1n << (64n - length - 1n - a))) << ((length + a) - g_FreeId[a]);
        }
    }
}


// Search condition setting
let l_Pokemon = Array(3).fill(createPokemonData());

let g_Rerolls;
let g_FixedIndex;
let g_isEnableThird;

// Filter condition setting

// V reference
let g_IvsRef = [
    l_Pokemon[0].ivs[1], l_Pokemon[0].ivs[2], l_Pokemon[0].ivs[3], l_Pokemon[0].ivs[4], l_Pokemon[0].ivs[5],
l_Pokemon[0].ivs[0], l_Pokemon[0].ivs[2], l_Pokemon[0].ivs[3], l_Pokemon[0].ivs[4], l_Pokemon[0].ivs[5],
l_Pokemon[0].ivs[0], l_Pokemon[0].ivs[1], l_Pokemon[0].ivs[3], l_Pokemon[0].ivs[4], l_Pokemon[0].ivs[5],
l_Pokemon[0].ivs[0], l_Pokemon[0].ivs[1], l_Pokemon[0].ivs[2], l_Pokemon[0].ivs[4], l_Pokemon[0].ivs[5],
l_Pokemon[0].ivs[0], l_Pokemon[0].ivs[1], l_Pokemon[0].ivs[2], l_Pokemon[0].ivs[3], l_Pokemon[0].ivs[5],
l_Pokemon[0].ivs[0], l_Pokemon[0].ivs[1], l_Pokemon[0].ivs[2], l_Pokemon[0].ivs[3], l_Pokemon[0].ivs[4],
];

let LENGTH_BASE  = 56;

// AbilityBit is valid if there is no dream characteristic �� characteristic specification
// Ability Bit is valid only when the property is dream �� Property 2 (odd because it is 1 or 3)
/**
 * @return {boolean}
 */
function IsEnableAbilityBit()
{
    return (l_Pokemon[0].ability == 1) || (l_Pokemon[0].abilityFlag == 3 && l_Pokemon[0].ability >= 0);
}

function Set12Condition(index, iv0, iv1, iv2, iv3, iv4, iv5, ability, nature, characteristic,isNoGender, abilityFlag, flawlessIvs)
{
    if(index < 0 || index >= 3)
    {
        return;
    }
    g_isEnableThird = index === 2;

    l_Pokemon[index].ivs[0] = iv0;
    l_Pokemon[index].ivs[1] = iv1;
    l_Pokemon[index].ivs[2] = iv2;
    l_Pokemon[index].ivs[3] = iv3;
    l_Pokemon[index].ivs[4] = iv4;
    l_Pokemon[index].ivs[5] = iv5;
    l_Pokemon[index].ability = ability;
    l_Pokemon[index].nature = nature;
    l_Pokemon[index].characteristic = characteristic;
    l_Pokemon[index].isNoGender = isNoGender;
    l_Pokemon[index].abilityFlag = abilityFlag;
    l_Pokemon[index].flawlessIvs = flawlessIvs;

    // for calcnation
    if(index === 0)
    {
        for(let i = 0; i < 6; ++i)
        {
            if(l_Pokemon[index].ivs[i] === 31)
            {
                g_FixedIndex = i;
                break;
            }
        }
    }
}

function Prepare(rerolls)
{
    const length = (IsEnableAbilityBit() ? LENGTH_BASE + 1 : LENGTH_BASE);

    g_Rerolls = rerolls;

    // Set the matrix values ??to use
    // Set the constant vector to use

    g_ConstantTermVector = 0;

    // Use r [3 + rerolls] as V values ??and r [4 + rerolls] to r [8 + rerolls] as individual values



    // Calcnate transformation matrix
    InitializeTransformationMatrix(false); // r[1]Is set, which gives
    for(let i = 0; i <= rerolls + 1; ++i)
    {
        ProceedTransformationMatrix(); // r[2 + i]Is obtained
    }

    let bit = 0;
    for (let i = 0; i < 6; ++i, ++bit)
    {
        let index = 61 + (i / 3) * 64 + (i % 3);
        g_InputMatrix[bit] = GetMatrixMntiplier(index);
        if(GetMatrixConst(index) !== 0)
        {
            g_ConstantTermVector |= (1n << (length - 1 - bit));
        }
    }
    for (let a = 0; a < 5; ++a)
    {
        ProceedTransformationMatrix();
        for(let i = 0; i < 10; ++i, ++bit)
        {
            let index = 59 + (i / 5) * 64 + (i % 5);
            g_InputMatrix[bit] = GetMatrixMntiplier(index);
            if(GetMatrixConst(index) !== 0)
            {
                g_ConstantTermVector |= (1n << (length - 1 - bit));
            }
        }
    }
    // Ability compresses two r[9+rerolls]
    if(IsEnableAbilityBit())
    {
        ProceedTransformationMatrix();

        g_InputMatrix[LENGTH_BASE] = GetMatrixMntiplier(63) ^ GetMatrixMntiplier(127);
        if((GetMatrixConst(63) ^ GetMatrixConst(127)) !== 0)
        {
            g_ConstantTermVector |= 1;
        }
    }

    // Calcnate by row basic transformation
    CalcnateInverseMatrix(length);

    // Calcnate advance data
    CalcnateCoefficientData(length);
}

/**
 * @return {number}
 */
function Search(ivs)
{
    const length = (IsEnableAbilityBit() ? LENGTH_BASE + 1 : LENGTH_BASE);

    let xoroshiro;
    let oshiroTemp;
    let oshiroTemp2;

    let target = (IsEnableAbilityBit() ? (l_Pokemon[0].ability & 1) : 0);
    let bitOffset = (IsEnableAbilityBit() ? 1 : 0);

    // higher 3bit = V location decision
    target |= (ivs & 0xE000000n) << (28n + bitOffset); // fixedIndex0

    // lower 25bit = Individual value
    target |= (ivs & 0x1F00000n) << (25n + bitOffset); // iv0_0
    target |= (ivs &   0xF8000n) << (20n + bitOffset); // iv1_0
    target |= (ivs &    0x7C00n) << (15n + bitOffset); // iv2_0
    target |= (ivs &     0x3E0n) << (10n + bitOffset); // iv3_0
    target |= (ivs &      0x1Fn) << ( 5n + bitOffset); // iv4_0

    // Estimate hidden values
    target |= ((8n + g_FixedIndex - ((ivs & 0xE000000n) >> 25)) & 7) << (50 + bitOffset);

    target |= ((32n + g_IvsRef[g_FixedIndex * 5    ] - ((ivs & 0x1F00000n) >> 20)) & 0x1Fn) << (40 + bitOffset);
    target |= ((32n + g_IvsRef[g_FixedIndex * 5 + 1] - ((ivs &   0xF8000n) >> 15)) & 0x1Fn) << (30 + bitOffset);
    target |= ((32n + g_IvsRef[g_FixedIndex * 5 + 2] - ((ivs &    0x7C00n) >> 10)) & 0x1Fn) << (20 + bitOffset);
    target |= ((32n + g_IvsRef[g_FixedIndex * 5 + 3] - ((ivs &     0x3E0n) >> 5)) & 0x1Fn) << (10 + bitOffset);
    target |= ((32n + g_IvsRef[g_FixedIndex * 5 + 4] -  (ivs &      0x1Fn)) & 0x1Fn) << bitOffset;

    // Target vector input completed

    target ^= g_ConstantTermVector;

    // 56~57-bit calcnation resnt cache
    let processedTarget = 0;
    let offset = 0;
    for (let i = 0; i < length; ++i)
    {
        while (g_FreeBit[i + offset] > 0)
        {
            ++offset;
        }
        processedTarget |= (GetSignature(g_AnswerFlag[i] & target) << (63 - (i + offset)));
    }

    // Decide the lower 7 bits
    let max = ((1 << (64 - length)) - 1);
    for (let search = 0; search <= max; ++search)
    {
        let seed = (processedTarget ^ g_CoefficientData[search]) | g_SearchPattern[search];

        // Refine from here
        {
            xoroshiro = new Xoroshiro(seed);
            xoroshiro.next(); // EC
            xoroshiro.next(); // OTID
            xoroshiro.next(); // PID

            // Vlocation
            let offset = -1;
            let fixedIndex = 0;
            do {
                fixedIndex = xoroshiro.Next(7); // Vlocation
                ++offset;
            } while (fixedIndex >= 6);

            // rerollNumber
            if (offset !== g_Rerolls)
            {
                continue;
            }

            xoroshiro.next(); // Individual value 1
            xoroshiro.next(); // �̒l2
            xoroshiro.next(); // �̒l3
            xoroshiro.next(); // �̒l4
            xoroshiro.next(); // �̒l5

            // Event Raid Dream Force Enforcement Mode
            let isPassed = false;
            if(l_Pokemon[0].abilityFlag === 2 && l_Pokemon[0].ability === 2)
            {
                let oshiroTemp2 = Object.assign({}, xoroshiro);


                // Characteristic skip

                // Gender
                if(!l_Pokemon[0].isNoGender)
                {
                    let gender = 0;
                    do {
                        gender = xoroshiro.next(0xFF); // ���ʒl
                    } while(gender >= 253);
                }

                let nature = 0;
                do {
                    nature = xoroshiro.next(0x1F); // ���i
                } while(nature >= 25);

                if(nature === l_Pokemon[0].nature)
                {
                    isPassed = true;
                }
                xoroshiro = Object.assign({}, oshiroTemp2);
            }
            if(isPassed === false)
            {
                // Characteristic
                {
                    let ability = 0;
                    if(l_Pokemon[0].abilityFlag === 3)
                    {
                        ability = xoroshiro.next(1);
                    }
                    else
                    {
                        do {
                            ability = xoroshiro.next(3);
                        } while(ability >= 3);
                    }
                    if((l_Pokemon[0].ability >= 0 && l_Pokemon[0].ability !== ability) || (l_Pokemon[0].ability === -1 && ability >= 2))
                    {
                        continue;
                    }
                }

                // ���ʒl
                if(!l_Pokemon[0].isNoGender)
                {
                    let gender = 0;
                    do {
                        gender = xoroshiro.next(0xFF); // ���ʒl
                    } while(gender >= 253);
                }

                let nature = 0;
                do {
                    nature = xoroshiro.next(0x1F); // ���i
                } while(nature >= 25);

                if(nature !== l_Pokemon[0].nature)
                {
                    continue;
                }
            }
        }

        // 2�C��
        let nextSeed = seed + 0x82a2b175229d6a5bn;
        {
            xoroshiro = new Xoroshiro(nextSeed);
            xoroshiro.next(); // EC
            xoroshiro.next(); // OTID
            xoroshiro.next(); // PID

            let vCount = l_Pokemon[1].flawlessIvs;

            // �̒l�v�Z
            let ivs = [ -1, -1, -1, -1, -1, -1 ];
            let fixedCount = 0;
            do {
                let fixedIndex = 0;
                do {
                    fixedIndex = xoroshiro.next(7n); // V�ӏ�
                } while(fixedIndex >= 6);

                if(ivs[fixedIndex] === -1)
                {
                    ivs[fixedIndex] = 31;
                    ++fixedCount;
                }
            } while(fixedCount < vCount);

            // �̒l�`�F�b�N
            let isPassed = true;
            for(let i = 0; i < 6; ++i)
            {
                if(ivs[i] === 31)
                {
                    if(l_Pokemon[1].ivs[i] !== 31)
                    {
                        isPassed = false;
                        break;
                    }
                }
                else if(l_Pokemon[1].ivs[i] !== xoroshiro.Next(0x1F))
                {
                    isPassed = false;
                    break;
                }
            }
            if(!isPassed)
            {
                continue;
            }

            // �C�x���g���C�h�̖������������[�h
            isPassed = false;
            if(l_Pokemon[1].abilityFlag === 2 && l_Pokemon[1].ability === 2)
            {
                let oshiroTemp2 = Object.assign({},xoroshiro);

                // �����X�L�b�v

                // ���ʒl
                if(!l_Pokemon[1].isNoGender)
                {
                    let gender = 0;
                    do {
                        gender = xoroshiro.next(0xFFn); // ���ʒl
                    } while(gender >= 253);
                }

                let nature = 0;
                do {
                    nature = xoroshiro.next(0x1Fn); // ���i
                } while(nature >= 25);

                if(nature === l_Pokemon[1].nature)
                {
                    isPassed = true;
                }

                oshiroTemp2 = Object.assign({}, xoroshiro);
            }
            if(isPassed === false)
            {
                // ����
                let ability = 0;
                if(l_Pokemon[1].abilityFlag === 3)
                {
                    ability = xoroshiro.next(1n);
                }
                else
                {
                    do {
                        ability = xoroshiro.next(3n);
                    } while(ability >= 3);
                }
                if((l_Pokemon[1].ability >= 0 && l_Pokemon[1].ability !== ability) || (l_Pokemon[1].ability === -1 && ability >= 2))
                {
                    continue;
                }

                // ���ʒl
                if(!l_Pokemon[1].isNoGender)
                {
                    let gender = 0;
                    do {
                        gender = xoroshiro.next(0xFFn);
                    } while(gender >= 253);
                }

                // ���i
                let nature = 0;
                do {
                    nature = xoroshiro.next(0x1Fn);
                } while(nature >= 25);

                if(nature !== l_Pokemon[1].nature)
                {
                    continue;
                }
            }
        }
        // 3�C�ڃ`�F�b�N
        if(g_isEnableThird)
        {
            nextSeed = nextSeed + 0x82a2b175229d6a5bn;
            {
                xoroshiro = new Xoroshiro(nextSeed);
                xoroshiro.next(); // EC
                xoroshiro.next(); // OTID
                xoroshiro.next(); // PID

                let vCount = l_Pokemon[2].flawlessIvs;

                // �̒l�v�Z
                let ivs = [ -1, -1, -1, -1, -1, -1 ];
                let fixedCount = 0;
                do {
                    let fixedIndex = 0;
                    do {
                        fixedIndex = xoroshiro.next(7n); // V�ӏ�
                    } while(fixedIndex >= 6);

                    if(ivs[fixedIndex] === -1)
                    {
                        ivs[fixedIndex] = 31;
                        ++fixedCount;
                    }
                } while(fixedCount < vCount);

                // �̒l�`�F�b�N
                let isPassed = true;
                for(let i = 0; i < 6; ++i)
                {
                    if(ivs[i] === 31)
                    {
                        if(l_Pokemon[2].ivs[i] !== 31)
                        {
                            isPassed = false;
                            break;
                        }
                    }
                    else if(l_Pokemon[2].ivs[i] !== xoroshiro.next(0x1Fn))
                    {
                        isPassed = false;
                        break;
                    }
                }
                if(!isPassed)
                {
                    continue;
                }

                // �C�x���g���C�h�̖������������[�h
                isPassed = false;
                if(l_Pokemon[2].abilityFlag === 2 && l_Pokemon[2].ability === 2)
                {
                    oshiroTemp2= Object.assign({},xoroshiro);

                    // �����X�L�b�v

                    // ���ʒl
                    if(!l_Pokemon[2].isNoGender)
                    {
                        let gender = 0;
                        do {
                            gender = xoroshiro.next(0xFFn); // ���ʒl
                        } while(gender >= 253);
                    }

                    let nature = 0;
                    do {
                        nature = xoroshiro.next(0x1Fn); // ���i
                    } while(nature >= 25);

                    if(nature === l_Pokemon[2].nature)
                    {
                        isPassed = true;
                    }

                    xoroshiro= Object.assign({},oshiroTemp2);
                }
                if(isPassed === false)
                {
                    // ����
                    let ability = 0;
                    if(l_Pokemon[2].abilityFlag === 3)
                    {
                        ability = xoroshiro.next(1n);
                    }
                    else
                    {
                        do {
                            ability = xoroshiro.next(3n);
                        } while(ability >= 3);
                    }
                    if((l_Pokemon[2].ability >= 0 && l_Pokemon[2].ability !== ability) || (l_Pokemon[2].ability === -1 && ability >= 2))
                    {
                        continue;
                    }

                    // ���ʒl
                    if(!l_Pokemon[2].isNoGender)
                    {
                        let gender = 0;
                        do {
                            gender = xoroshiro.next(0xFFn);
                        } while(gender >= 253);
                    }

                    // ���i
                    let nature = 0;
                    do {
                        nature = xoroshiro.next(0x1Fn);
                    } while(nature >= 25);

                    if(nature !== l_Pokemon[2].nature)
                    {
                        continue;
                    }
                }
            }
        }
        return seed;
    }
    return 0;
}



let g_FixedIvs;
let g_Ivs];

let g_IvOffset;

let g_ECbit; // -1�͗��p�s��

let l_EnableEcMod= [[]];

let LENGTH = (60)

/**
 * @return {boolean}
 */
function IsEnableECBit()
{
    return g_ECbit >= 0;
}

function Set35Condition(index,  iv0,  iv1,  iv2,  iv3, iv4, iv5, ability, nature, characteristic, isNoGender, abilityFlag, flawlessIvs)
{
    if(index < 0 || index >= 3)
    {
        return;
    }

    // ������
    if(index == 0)
    {
        g_ECbit = -1;
    }

    l_Pokemon[index].ivs[0] = iv0;
    l_Pokemon[index].ivs[1] = iv1;
    l_Pokemon[index].ivs[2] = iv2;
    l_Pokemon[index].ivs[3] = iv3;
    l_Pokemon[index].ivs[4] = iv4;
    l_Pokemon[index].ivs[5] = iv5;
    l_Pokemon[index].ability = ability;
    l_Pokemon[index].nature = nature;
    l_Pokemon[index].characteristic = characteristic;
    l_Pokemon[index].isNoGender = isNoGender;
    l_Pokemon[index].abilityFlag = abilityFlag;
    l_Pokemon[index].flawlessIvs = flawlessIvs;

    // ECbit�����p�ł��邩�H
    if(g_ECbit == -1)
    {
        let target = (characteristic == 0 ? 5 : characteristic - 1);
        if(l_Pokemon[index].IsCharacterized(target))
        {
            // EC mod6 ��characteristic�Ŋm��
            if(index != 2) // Seed��ECbit�Ȃ̂Ŕ��]������
            {
                g_ECbit = 1 - characteristic % 2;
            }
            else // Next�Ȃ̂ł���ɔ��]����Ă��̂܂�
            {
                g_ECbit = characteristic % 2;
            }
        }
    }

    // EC mod6�Ƃ��čl��������̂̃t���O�𗧂Ă�
    bool flag = true;
    l_EnableEcMod[index][characteristic] = true;
    for(let i = 1; i < 6; ++i)
    {
        let target = (characteristic + 6 - i) % 6;
        if(flag && l_Pokemon[index].IsCharacterized(target) == false)
        {
            l_EnableEcMod[index][target] = true;
        }
        else
        {
            l_EnableEcMod[index][target] = false;
            flag = false;
        }
    }
}

void SetTargetCondition6(let iv1, let iv2, let iv3, let iv4, let iv5, let iv6)
{
    g_FixedIvs = 6;
    g_Ivs[0] = iv1;
    g_Ivs[1] = iv2;
    g_Ivs[2] = iv3;
    g_Ivs[3] = iv4;
    g_Ivs[4] = iv5;
    g_Ivs[5] = iv6;
}

void SetTargetCondition5(let iv1, let iv2, let iv3, let iv4, let iv5)
{
    g_FixedIvs = 5;
    g_Ivs[0] = iv1;
    g_Ivs[1] = iv2;
    g_Ivs[2] = iv3;
    g_Ivs[3] = iv4;
    g_Ivs[4] = iv5;
}

void PrepareSix(let ivOffset)
{
    const let length = g_FixedIvs * 10;

    g_IvOffset = ivOffset;

    // �g�p����s��l���Z�b�g
    // �g�p����萔�x�N�g�����Z�b�g

    g_ConstantTermVector = 0;

    // r[(11 - FixedIvs) + offset]����r[(11 - FixedIvs) + FixedIvs - 1 + offset]�܂Ŏg��

    // �ϊ��s����v�Z
    InitializeTransformationMatrix(IsEnableECBit()); // r[1]��������ϊ��s�񂪃Z�b�g�����
    for(let i = 0; i <= 9 - g_FixedIvs + ivOffset; ++i)
    {
        ProceedTransformationMatrix(); // r[2 + i]��������
    }

    for(let a = 0; a < g_FixedIvs; ++a)
    {
        for(let i = 0; i < 10; ++i)
        {
            let index = 59 + (i / 5) * 64 + (i % 5);
            let bit = a * 10 + i;
            g_InputMatrix[bit] = GetMatrixMntiplier(index);
            if(GetMatrixConst(index) != 0)
            {
                g_ConstantTermVector |= (1n << (length - 1 - bit));
            }
        }
        ProceedTransformationMatrix();
    }

    // �s��{�ό`�ŋ��߂�
    CalcnateInverseMatrix(length);

    // ���O�f�[�^���v�Z
    CalcnateCoefficientData(length);
}

let SearchSix(let ivs)
{
    const let length = g_FixedIvs * 10;

    XoroshiroState xoroshiro;
    XoroshiroState nextoshiro;
    XoroshiroState oshiroTemp;

    let target = 0;

    if(g_FixedIvs == 6)
    {
        // ����30bit = �̒l
        target |= (ivs & 0x3E000000n) << 30; // iv0_0
        target |= (ivs & 0x1F00000n) << 25; // iv1_0
        target |= (ivs & 0xF8000n) << 20; // iv2_0
        target |= (ivs & 0x7C00n) << 15; // iv3_0
        target |= (ivs & 0x3E0n) << 10; // iv4_0
        target |= (ivs & 0x1Fn) << 5; // iv5_0

        // �B���ꂽ�l�𐄒�
        target |= ((32n + g_Ivs[0] - ((ivs & 0x3E000000n) >> 25)) & 0x1F) << 50;
        target |= ((32n + g_Ivs[1] - ((ivs & 0x1F00000n) >> 20)) & 0x1F) << 40;
        target |= ((32n + g_Ivs[2] - ((ivs & 0xF8000n) >> 15)) & 0x1F) << 30;
        target |= ((32n + g_Ivs[3] - ((ivs & 0x7C00n) >> 10)) & 0x1F) << 20;
        target |= ((32n + g_Ivs[4] - ((ivs & 0x3E0n) >> 5)) & 0x1F) << 10;
        target |= ((32n + g_Ivs[5] - (ivs & 0x1Fn)) & 0x1F);
    }
    else if(g_FixedIvs == 5)
    {
        // ����25bit = �̒l
        target |= (ivs & 0x1F00000n) << 25; // iv0_0
        target |= (ivs & 0xF8000n) << 20; // iv1_0
        target |= (ivs & 0x7C00n) << 15; // iv2_0
        target |= (ivs & 0x3E0n) << 10; // iv3_0
        target |= (ivs & 0x1Fn) << 5; // iv4_0

        // �B���ꂽ�l�𐄒�
        target |= ((32n + g_Ivs[0] - ((ivs & 0x1F00000n) >> 20)) & 0x1F) << 40;
        target |= ((32n + g_Ivs[1] - ((ivs & 0xF8000n) >> 15)) & 0x1F) << 30;
        target |= ((32n + g_Ivs[2] - ((ivs & 0x7C00n) >> 10)) & 0x1F) << 20;
        target |= ((32n + g_Ivs[3] - ((ivs & 0x3E0n) >> 5)) & 0x1F) << 10;
        target |= ((32n + g_Ivs[4] - (ivs & 0x1Fn)) & 0x1F);
    }
    else
    {
        return 0;
    }

    // target�x�N�g�����͊���

    target ^= g_ConstantTermVector;

    // 60bit���̌v�Z���ʃL���b�V��
    let processedTarget = 0;
    let offset = 0;
    for (let i = 0; i < length; ++i)
    {
        while (g_FreeBit[i + offset] > 0)
        {
            ++offset;
        }
        processedTarget |= (GetSignature(g_AnswerFlag[i] & target) << (63 - (i + offset)));
    }

    // ���ʂ����߂�
    let max = ((1 << (64 - length)) - 1);
    for (let search = 0; search <= max; ++search)
    {
        let seed = (processedTarget ^ g_CoefficientData[search]) | g_SearchPattern[search];

        if(g_ECbit >= 0 && ((seed & 1) != g_ECbit))
        {
            continue;
        }

        let nextSeed = seed + 0x82a2b175229d6a5bn;

        // ��������i�荞��

        // ���`�F�b�N
        {
            xoroshiro.SetSeed(seed);
            nextoshiro.SetSeed(nextSeed);

            // EC
            unsigned let ec = xoroshiro.next(0xFFFFFFFFn);
            // 1�C�ڌ�
            if(l_EnableEcMod[0][ec % 6] == false)
            {
                continue;
            }
            // 2�C�ڌ�
            if(l_EnableEcMod[1][ec % 6] == false)
            {
                continue;
            }

            // EC
            ec = nextoshiro.next(0xFFFFFFFFn);
            // 3�C�ڌ�
            if(l_EnableEcMod[2][ec % 6] == false)
            {
                continue;
            }
        }

        // 2�C�ڂ��Ƀ`�F�b�N
        nextoshiro.next(); // OTID
        nextoshiro.next(); // PID

        let vCount = l_Pokemon[2].flawlessIvs;

        let ivs[6] = { -1, -1, -1, -1, -1, -1 };
        let fixedCount = 0;
        do {
            let fixedIndex = 0;
            do {
                fixedIndex = nextoshiro.next(7n); // V�ӏ�
            } while(fixedIndex >= 6);

            if(ivs[fixedIndex] == -1)
            {
                ivs[fixedIndex] = 31;
                ++fixedCount;
            }
        } while(fixedCount < vCount);

        // �̒l
        bool isPassed = true;
        for(let i = 0; i < 6; ++i)
        {
            if(ivs[i] == 31)
            {
                if(l_Pokemon[2].ivs[i] != 31)
                {
                    isPassed = false;
                    break;
                }
            }
            else if(l_Pokemon[2].ivs[i] != nextoshiro.next(0x1Fn))
            {
                isPassed = false;
                break;
            }
        }
        if(!isPassed)
        {
            continue;
        }

        // ����
        let ability = 0;
        if(l_Pokemon[2].abilityFlag == 3)
        {
            ability = nextoshiro.next(1n);
        }
        else
        {
            do {
                ability = nextoshiro.next(3n);
            } while(ability >= 3);
        }
        if((l_Pokemon[2].ability >= 0 && l_Pokemon[2].ability != ability) || (l_Pokemon[2].ability == -1 && ability >= 2))
        {
            continue;
        }

        // ���ʒl
        if(!l_Pokemon[2].isNoGender)
        {
            let gender = 0;
            do {
                gender = nextoshiro.next(0xFFn);
            } while(gender >= 253);
        }

        // ���i
        let nature = 0;
        do {
            nature = nextoshiro.next(0x1Fn);
        } while(nature >= 25);

        if(nature != l_Pokemon[2].nature)
        {
            continue;
        }

        // 1�C��
        xoroshiro.next(); // OTID
        xoroshiro.next(); // PID

        {
            // ��Ԃ�ۑ�
            oshiroTemp= Object.assign({},xoroshiro);

            let ivs[6] = { -1, -1, -1, -1, -1, -1 };
            let fixedCount = 0;
            let offset = -(8 - g_FixedIvs);
            do {
                let fixedIndex = 0;
                do {
                    fixedIndex = xoroshiro.next(7); // V�ӏ�
                    ++offset;
                } while (fixedIndex >= 6);

                if (ivs[fixedIndex] == -1)
                {
                    ivs[fixedIndex] = 31;
                    ++fixedCount;
                }
            } while (fixedCount < (8 - g_FixedIvs));

            // reroll��
            if (offset != g_IvOffset)
            {
                continue;
            }

            // �̒l
            bool isPassed = true;
            for (let i = 0; i < 6; ++i)
            {
                if (ivs[i] == 31)
                {
                    if (l_Pokemon[0].ivs[i] != 31)
                    {
                        isPassed = false;
                        break;
                    }
                }
                else if (l_Pokemon[0].ivs[i] != xoroshiro.next(0x1Fn))
                {
                    isPassed = false;
                    break;
                }
            }
            if (!isPassed)
            {
                continue;
            }

            // ����
            let ability = 0;
            if (l_Pokemon[0].abilityFlag == 3)
            {
                ability = xoroshiro.next(1n);
            }
            else
            {
                do {
                    ability = xoroshiro.next(3n);
                } while(ability >= 3);
            }
            if ((l_Pokemon[0].ability >= 0 && l_Pokemon[0].ability != ability) || (l_Pokemon[0].ability == -1 && ability >= 2))
            {
                continue;
            }

            // ���ʒl
            if (!l_Pokemon[0].isNoGender)
            {
                let gender = 0;
                do {
                    gender = xoroshiro.next(0xFFn); // ���ʒl
                } while (gender >= 253);
            }

            let nature = 0;
            do {
                nature = xoroshiro.next(0x1Fn); // ���i
            } while (nature >= 25);

            if (nature != l_Pokemon[0].nature)
            {
                continue;
            }
        }

        {
            xoroshiro= Object.assign({},oshiroTemp); // �Â�����

            let vCount = l_Pokemon[1].flawlessIvs;

            let ivs[6] = { -1, -1, -1, -1, -1, -1 };
            let fixedCount = 0;
            do {
                let fixedIndex = 0;
                do {
                    fixedIndex = xoroshiro.next(7n); // V�ӏ�
                } while (fixedIndex >= 6);

                if (ivs[fixedIndex] == -1)
                {
                    ivs[fixedIndex] = 31;
                    ++fixedCount;
                }
            } while (fixedCount < vCount);

            // �̒l
            bool isPassed = true;
            for (let i = 0; i < 6; ++i)
            {
                if (ivs[i] == 31)
                {
                    if (l_Pokemon[1].ivs[i] != 31)
                    {
                        isPassed = false;
                        break;
                    }
                }
                else if (l_Pokemon[1].ivs[i] != xoroshiro.next(0x1Fn))
                {
                    isPassed = false;
                    break;
                }
            }
            if (!isPassed)
            {
                continue;
            }

            // ����
            let ability = 0;
            if (l_Pokemon[1].abilityFlag == 3)
            {
                ability = xoroshiro.next(1n);
            }
            else
            {
                do {
                    ability = xoroshiro.next(3n);
                } while(ability >= 3);
            }
            if ((l_Pokemon[1].ability >= 0 && l_Pokemon[1].ability != ability) || (l_Pokemon[1].ability == -1 && ability >= 2))
            {
                continue;
            }

            // ���ʒl
            if (!l_Pokemon[1].isNoGender)
            {
                let gender = 0;
                do {
                    gender = xoroshiro.next(0xFFn); // ���ʒl
                } while (gender >= 253);
            }

            // ���i
            let nature = 0;
            do {
                nature = xoroshiro.next(0x1Fn); // ���i
            } while (nature >= 25);

            if (nature != l_Pokemon[1].nature)
            {
                continue;
            }
        }

        return seed;
    }
    return 0;
}





