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
                default:
                    return true;
            }
        }
    }
}


// �v�Z�p�f�[�^
let g_TempMatrix= Array(256);
let g_InputMatrix = Array(64); // CalculateInverseMatrix�̑O�ɃZ�b�g����
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
let GetMatrixMultiplier(let  index)
{
    // s0����
    return g_TempMatrix[index * 2 + 1];
}

short GetMatrixConst(let  index)
{
    // s1����
    return (short)GetSignature(g_TempMatrix[index * 2] & Const::c_XoroshiroConst);
}

function CalculateInverseMatrix(let  length)
{
    // ������Ԃ��Z�b�g
    for (let  i = 0; i < length; ++i)
    {
        g_AnswerFlag[i] = (1n << (length - 1 - i));
    }

    let  skip = 0;
    for (let  i = 0; i < 64; ++i)
    {
        g_FreeBit[i] = 0;
    }

    // �s��{�ό`�ŋ��߂�
    for (let  rank = 0; rank < length; )
    {
        let top = (1n << (63 - (rank + skip)));
        bool rankUpFlag = false;
        for (let  i = rank; i < length; ++i)
        {
            if ((g_InputMatrix[i] & top) !== 0) // ��ԍ���1
            {
                for (let  a = 0; a < length; ++a)
                {
                    if (a == i) continue;

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
        if (rankUpFlag == false)
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
        for (let  a = 0; a < (64 - length); ++a)
        {
            g_Coefficient[i] |= (g_InputMatrix[i] & (1n << (63 - g_FreeId[a]))) >> ((length + a) - g_FreeId[a]);
        }
    }
}

function CalculateCoefficientData(let  length)
{
    // �f�[�^�����
    unsigned short max = ((1 << (64 - length)) - 1);
    for (unsigned short search = 0; search <= max; ++search)
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
            g_CoefficientData[search] |= (GetSignature(g_Coefficient[i] & search) << (63 - (i + offset)));
        }
        for (let  a = 0; a < (64 - length); ++a)
        {
            g_SearchPattern[search] |= ((let)search & (1n << (64 - length - 1 - a))) << ((length + a) - g_FreeId[a]);
        }
    }
}




