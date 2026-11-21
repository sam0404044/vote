# 事件動作素材

使用內建 image_gen，透明背景生成。素材保留四幀差分；依使用者最新要求，正式版事件插圖恢復靜態，地圖事件物件只呈現第一幀。角色行走仍使用獨立走路動畫。

共用提示：Production transparent pixel-art sprite atlas for Taiwan voting education game. Exact equal-cell grid. Each event uses four animation frames, maintain identity, proportions and baseline across frames. Simple compact Gather.town inspired fictional citizens, coarse square pixel clusters, dot eyes, limited colors. Genuine alpha, no scenery, shadows or panel backgrounds. All props and limbs contained in each cell. No real politician likeness.

- motion0.png：4x4 格。四列依序是講電話、擴音器與傳單、手機關機、手機靜音；四欄是不同動作幀。
- motion1.png：4x4 格。自拍、親子同行、兩位成人交談、圈選兩人。再以 background-extraction 模式移除背景，保留人物、格位與動作。
- motion2.png：4x4 格。蓋票、查看選票、指印、私章。
- motion3.png：4x4 格。寫字、空白選票、觀看開票、擦改選票。
- motionPuma.png：2x2 格。同一位虛構公民穿 PUMA 運動衣，依序站立、指向胸前、拉開衣服展示、放下手。未描繪候選人或助選口號。
- motionExtra.png：4x2 格。第一列是在同一欄補蓋；第二列是摺票並投入票匭。保持完整物件與四個動作差分。

所有原始生成圖均保存於 dist/assets，畫面以 Canvas 的分格繪製顯示動畫。
