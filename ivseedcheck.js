function SetCheckResult(result) {
    let text = '';
    let color = '';
    switch (result) {
        case -1:
            text = "-";
            color = "black";
            break;

        case 1:
            text = "No Good!";
            color = 'red';
            break;

        case 3:
            text = "OK! Next -> 3IV";
            color = 'blue';
            break;

        case 4:
            text = "OK! Next -> 4IV";
                color = 'blue';
            break;

        case 7:
            text = "OK! Next -> 3IV or 4IV";
                color = 'blue';
            break;
    }
    return [text, color]
}

// 個体値チェックボタン

let testivs = [31,16,31,24,23,3];

function checkIvs(inputivs) {
    let isCheckFailed = false;
    let errorText = "";
    let is3iv = false;
    // フォームから必要な情報を取得
    let ivs = Array(6);
    for (let i = 0; i < 6; i++) {
        try {
            ivs[i] = parseInt(inputivs[i]);
        }
        catch (Exception) {
            // エラー
            errorText = 'Ivs not a number';
            isCheckFailed = true;
        }
        if (ivs[i] < 0 || ivs[i] > 31) {
            // エラー
            errorText = 'Ivs outside range of 0-31';
            isCheckFailed = true;
        }
    }
    if (isCheckFailed) {
        alert(errorText);
        return;
    }

    // 1匹目はVが2or3箇所じゃないとエラー
    let ivtype = inputivs.reduce((a,b)=>{return a+((b===31)?1:0)},0);
    if(ivtype>3 || ivtype<2){
        alert('must be 2 or 3 iv');
        return SetCheckResult(1);
    }
    if(ivtype===3){
        is3iv = true;
    }
    let strict = ivtype;
    let c = 0;
    for (let i = 0; i < 6; i++) {
        if (ivs[i] === 31) {
            c++;
        }
    }
    if (c !== strict) {
        // エラー
        if (strict === 3) {
            alert('must be 3iv');
            return;
        }
        else {
            alert('must be 2iv');
            return;
        }
    }

    // 遺伝箇所チェック
    let possible = [false, false, false, false, false];
    let vFlag = [false, false, false, false, false, false];
    let fixedCount = 0;
    for (let i = 0; i < 6; i++) {
        if (ivs[i] === 31) {
            vFlag[i] = true;
            fixedCount++;
        }
    }

    // 2V+3Vor4Vで6個確定
    // 3V+4Vで5個確定
    let needNumber = (!is3iv/* im assuming this means 2iv panel Get35Mode() === Star35PanelMode.From2V*/ ? 6 : 5);

    for (let vCount = fixedCount + 1; vCount <= 4; vCount++) {
        c = fixedCount;
        let used = fixedCount;
        for (let i = 0; i < 6; i++) {
            vFlag[i] = (ivs[i] === 31);
        }
        // 普通に個体値生成をやってみる
        for (let i = 0; i < 6; i++) {
            if (ivs[i] !== 31) {
                used++;
                let vPos = ivs[i] % 8;
                if (vPos < 6 && vFlag[vPos] === false) {
                    vFlag[vPos] = true;
                    c++;
                    if (c === vCount) // 遺伝終わり
                    {
                        // 未知の部分が連続してneedNumber以上
                        if ((6 - vCount) - (6 - used) + (6 - fixedCount) >= needNumber) {
                            possible[vCount] = true;
                        }
                        break;
                    }
                }
            }
        }
    }

    if (possible[3] && possible[4]) {
        return SetCheckResult(7);
    }
    else if (possible[3]) {
        return SetCheckResult(3);
    }
    else if (possible[4]) {
        return SetCheckResult(4);
    }
    else {
        return SetCheckResult(1);
    }
}
