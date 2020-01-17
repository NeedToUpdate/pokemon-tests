        function SetCheckResult(result){
			let text = ''
			let color = ''
			switch (result)
			{
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
					text =	"OK! Next -> 4IV",
					color = 'blue';
					break;

				case 7:
					text = "OK! Next -> 3IV or 4IV",
					color = 'blue';
					break;
			}
			return [text,color]
		}

		// 個体値チェックボタン
function checkIvs(object sender, EventArgs e)
		{
			let isCheckFailed = false;
			let errorText = "";

			// フォームから必要な情報を取得
			let ivs = Array(6);
			for (int i = 0; i < 6; i++)
			{
				try
				{
					ivs[i] = int.Parse(m_PokemonInfo[2].TextBoxIvs[i].Text);
				}
				catch (Exception)
				{
					// エラー
					errorText = Messages.Instance.ErrorMessage["IvsFormat"];
					isCheckFailed = true;
				}
				if (ivs[i] < 0 || ivs[i] > 31)
				{
					// エラー
					errorText = Messages.Instance.ErrorMessage["IvsFormat"];
					isCheckFailed = true;
				}
			}
			if (isCheckFailed)
			{
				CreateErrorDialog(errorText);
				return;
			}

			// 1匹目はVが2or3箇所じゃないとエラー
			int strict = (Get35Mode() == Star35PanelMode.From3V ? 3 : 2);
			int c = 0;
			for (int i = 0; i < 6; ++i)
			{
				if (ivs[i] == 31)
				{
					++c;
				}
			}
			if (c != strict)
			{
				// エラー
				if (strict == 3)
				{
					CreateErrorDialog(Messages.Instance.ErrorMessage["IvsStrict351_3V"]);
					return;
				}
				else
				{
					CreateErrorDialog(Messages.Instance.ErrorMessage["IvsStrict351_2V"]);
					return;
				}
			}

			// 遺伝箇所チェック
			bool[] possible = { false, false, false, false, false };
			bool[] vFlag = { false, false, false, false, false, false };
			int fixedCount = 0;
			for (int i = 0; i < 6; ++i)
			{
				if (ivs[i] == 31)
				{
					vFlag[i] = true;
					++fixedCount;
				}
			}

			// 2V+3Vor4Vで6個確定
			// 3V+4Vで5個確定
			int needNumber = (Get35Mode() == Star35PanelMode.From2V ? 6 : 5);

			for (int vCount = fixedCount + 1; vCount <= 4; ++vCount)
			{
				c = fixedCount;
				int used = fixedCount;
				for (int i = 0; i < 6; ++i)
				{
					vFlag[i] = (ivs[i] == 31);
				}
				// 普通に個体値生成をやってみる
				for (int i = 0; i < 6; ++i)
				{
					if (ivs[i] != 31)
					{
						++used;
						int vPos = ivs[i] % 8;
						if (vPos < 6 && vFlag[vPos] == false)
						{
							vFlag[vPos] = true;
							++c;
							if (c == vCount) // 遺伝終わり
							{
								// 未知の部分が連続してneedNumber以上
								if ((6 - vCount) - (6 - used) + (6 - fixedCount) >= needNumber)
								{
									possible[vCount] = true;
								}
								break;
							}
						}
					}
				}
			}

			if (possible[3] && possible[4])
			{
				SetCheckResult(7);
			}
			else if (possible[3])
			{
				SetCheckResult(3);
			}
			else if (possible[4])
			{
				SetCheckResult(4);
			}
			else
			{
				SetCheckResult(1);
			}
		}
