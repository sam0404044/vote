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


## 2026-11-23 統一靜態插圖與街區彩蛋
使用內建 image_gen。
- assets/events/16.webp、17.webp（同步 dist）：參照原選票插圖，暖棕與米白、像素邊緣與細緻紙張紋理；近拍手持紅色圈選工具補蓋選票，以及雙手摺起選票、旁有票匭。由生成的雙欄圖切分。
- assets/street-bin.webp（同步 dist）：透明背景、臺灣街區像素風格的灰綠金屬垃圾桶，桶口伸出一根分節甘蔗，無文字、標記或人物。


## 2026-11-23 A–G 街景彩蛋
使用內建 image_gen，各物件單獨生成透明背景素材，最終檔案為 assets/props/{milk,peas,pizza,phone,detective,scroll,carrot}.webp，同步 dist/assets/props。
共用提示：Production environmental object sprite for a detailed Taiwan pixel-art street exploration game. Warm earthy palette, forest green accents, precise stepped pixel edges and pixel clusters, subtle dithering, worn material texture, nostalgic 16-bit scene art. Three-quarter front view, complete object centered with transparent margin. No scenery, ground plane, humans, political faces, UI indicators or captions. Genuine transparent alpha. Display about 60–85 pixels.
- milk：鮮奶紙盒與便條，無可讀文字。
- peas：矮木凳上的便當盒，只剩玉米、豌豆、胡蘿蔔丁。
- pizza：矮木凳上的夏威夷披薩與紅蓋辣椒醬。
- phone：矮木凳上顯示等待好友邀請的手機，無可讀文字。
- detective：排水溝格柵上的放大鏡與小腳印。
- scroll：矮木凳上展開的忍者卷軸、橘色繫帶與抽象漩渦符號。
- carrot：陶盆中的橘色胡蘿蔔玩偶、綠色葉子與縫線眼睛。
彩蛋對話為遊戲創作，依使用者要求不顯示靈感來源連結。
