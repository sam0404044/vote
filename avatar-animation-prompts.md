

## Gather.town 比例角色更新

使用內建 image_gen 生成六張獨立透明 PNG，不再從舊人物拼圖取格。三幀為 idle、walk-a、walk-b，動畫循環 walk-a → idle → walk-b → idle，140ms/幀。網站以相同畫布與腳底基準呈現。

參考：https://support.help.gather.town/articles/1982412443-getting-started-guide

### shen-idle.png

Use case: stylized-concept. Create ONE isolated production pixel game sprite, not a sheet, no other objects. Reference atlas is ONLY to identify hair and clothing; completely redesign proportions and rendering. Style reference: Gather.town classic small avatars, humble tiny 2D social RPG characters, NOT anime, NOT chibi illustration. Logical character art is only about 24 pixels wide by 36 pixels high, enlarged with nearest-neighbor square pixels; extremely simple dot eyes, no detailed face, no large eyes, no complex shading, 12-16 colors, clean one-pixel dark outline, slightly rounded blocky silhouette, compact body with small arms and short legs, head roughly 35% of total character height, soft and charming. Show head-to-toe entire body in a slight right-facing three-quarter view. EXACT square transparent canvas, figure centered at x50%, feet baseline at y85%, top of hair at y15%, overall width about40%. No cast shadow, no ground, no typography, no frames, genuine alpha transparency. Pose: neutral standing idle with both feet on baseline and arms relaxed. Character: Shen Pao-yang, curly dark brown hair as a simple few pixel clumps, small round dark glasses, charcoal jacket over white shirt, dark gray trousers, white sneakers.

### chiang-idle.png

Use case: stylized-concept. Create ONE isolated production pixel game sprite, not a sheet, no other objects. Reference atlas is ONLY to identify hair and clothing; completely redesign proportions and rendering. Style reference: Gather.town classic small avatars, humble tiny 2D social RPG characters, NOT anime, NOT chibi illustration. Logical character art is only about 24 pixels wide by 36 pixels high, enlarged with nearest-neighbor square pixels; extremely simple dot eyes, no detailed face, no large eyes, no complex shading, 12-16 colors, clean one-pixel dark outline, slightly rounded blocky silhouette, compact body with small arms and short legs, head roughly 35% of total character height, soft and charming. Show head-to-toe entire body in a slight right-facing three-quarter view. EXACT square transparent canvas, figure centered at x50%, feet baseline at y85%, top of hair at y15%, overall width about40%. No cast shadow, no ground, no typography, no frames, genuine alpha transparency. Pose: neutral standing idle with both feet on baseline and arms relaxed. Character: Chiang Wan-an, tidy black side-parted hair, no glasses, light blue rolled-sleeve shirt with small dark blue tie, navy trousers, dark shoes.

### shen-walk-a.png

Use case: precise-object-edit. Reference is the exact idle sprite to animate. Produce ONE isolated full-body transparent PNG walking animation frame of the SAME pixel character. Change ONLY arms and legs to walking pose: left leg forward toward screen-right, right leg behind, right arm forward and left arm back. Preserve exact hair silhouette, face, glasses if present, clothes, colors, coarse pixel size, compact Gather.town inspired avatar proportions, three-quarter facing RIGHT, head position, torso position, and overall scale. Keep same square canvas, center x50%, hair top y15%, feet baseline y85%. Feet should be visibly separated in an unmistakable walking stride. Hands swing opposite legs. NO extra character, no sheet, no ground, no shadows, no text, no border. Genuine transparent background. Flat crisp pixel clusters, no anime eyes or fine illustration.

### shen-walk-b.png

Use case: precise-object-edit. Reference is the exact idle sprite to animate. Produce ONE isolated full-body transparent PNG walking animation frame of the SAME pixel character. Change ONLY arms and legs to walking pose: right leg forward toward screen-right, left leg behind, left arm forward and right arm back. Preserve exact hair silhouette, face, glasses if present, clothes, colors, coarse pixel size, compact Gather.town inspired avatar proportions, three-quarter facing RIGHT, head position, torso position, and overall scale. Keep same square canvas, center x50%, hair top y15%, feet baseline y85%. Feet should be visibly separated in an unmistakable walking stride. Hands swing opposite legs. NO extra character, no sheet, no ground, no shadows, no text, no border. Genuine transparent background. Flat crisp pixel clusters, no anime eyes or fine illustration.

### chiang-walk-a.png

Use case: precise-object-edit. Reference is the exact idle sprite to animate. Produce ONE isolated full-body transparent PNG walking animation frame of the SAME pixel character. Change ONLY arms and legs to walking pose: left leg forward toward screen-right, right leg behind, right arm forward and left arm back. Preserve exact hair silhouette, face, glasses if present, clothes, colors, coarse pixel size, compact Gather.town inspired avatar proportions, three-quarter facing RIGHT, head position, torso position, and overall scale. Keep same square canvas, center x50%, hair top y15%, feet baseline y85%. Feet should be visibly separated in an unmistakable walking stride. Hands swing opposite legs. NO extra character, no sheet, no ground, no shadows, no text, no border. Genuine transparent background. Flat crisp pixel clusters, no anime eyes or fine illustration.

### chiang-walk-b.png

Use case: precise-object-edit. Reference is the exact idle sprite to animate. Produce ONE isolated full-body transparent PNG walking animation frame of the SAME pixel character. Change ONLY arms and legs to walking pose: right leg forward toward screen-right, left leg behind, left arm forward and right arm back. Preserve exact hair silhouette, face, glasses if present, clothes, colors, coarse pixel size, compact Gather.town inspired avatar proportions, three-quarter facing RIGHT, head position, torso position, and overall scale. Keep same square canvas, center x50%, hair top y15%, feet baseline y85%. Feet should be visibly separated in an unmistakable walking stride. Hands swing opposite legs. NO extra character, no sheet, no ground, no shadows, no text, no border. Genuine transparent background. Flat crisp pixel clusters, no anime eyes or fine illustration.


## 最終 walk-b 修訂

walk-b 改成抬膝回步，避免兩張跨步太相似。

Use case: precise-object-edit. Change ONLY the limb pose of this exact pixel character. This is the PASSING / HIGH-KNEE frame of a walk cycle, deliberately VERY DIFFERENT from a wide-stride pose. Keep left foot planted exactly UNDER the hips, with the left leg vertical and straight. Raise the RIGHT knee forward high, right thigh almost horizontal, right calf downward, right shoe clearly off the ground at about left-shin height. The feet must be close horizontally rather than spread wide. Bend left arm forward at chest height, right arm back. Keep exact head silhouette, same face and hair, same clothes and pixel size, same position of head and torso. Same square canvas, character centered, same scale, top of hair y15%, planted foot baseline y85%. Full body facing right three-quarter view. Genuine transparent background, no background or shadow, no other characters or panels. Preserve simple Gather.town inspired coarse pixel avatar style. The raised knee and planted straight leg must be unmistakably visible.
