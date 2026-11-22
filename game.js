const $=id=>document.getElementById(id);

const law='https://law.cec.gov.tw/LawContent.aspx?id=GL000292';

const questions=[

 ['住宅街','群組裡的拜票','投票日早上，在群組傳訊息：「請大家投給候選人小葉！」可以嗎？',false,'投票日不得從事競選、助選活動。','第56條','📱'],

 ['住宅街','PUMA 衣服算助選？','投票日，只知道某人穿著 PUMA 運動品牌衣服，沒有其他行為資訊。單憑品牌名稱，就能直接認定他違法助選嗎？',false,'不能只憑品牌名稱認定違法，也不是任何穿法都一定合法。須整體觀察行為、情境與助選意圖；投票日仍禁止競選、助選。','中選會回應報導','👕'],

 ['住宅街','出發前關機','進投票所前，把手機電源完全關閉，再隨身帶入，可以嗎？',true,'已關閉電源的行動裝置，屬法定例外。靜音與關機不同。','第65條','📴'],

 ['住宅街','靜音就好了？','手機只開靜音，沒有關閉電源，就帶入投票所。可以嗎？',false,'一般選民帶入手機應關閉電源；只開靜音不符合這個例外。','第65條','🔕'],

 ['公民公園','選票自拍','在投票所拍下自己已圈選的選票，傳給朋友證明投給誰。可以嗎？',false,'圈選內容不得出示他人；也不能以攝影器材刺探圈選內容。','第63、65條','📸'],

 ['公民公園','六歲以下的小旅伴','選民帶著自己照顧的五歲孩子，一起進投票所。可以嗎？',true,'選舉人所照顧的六歲以下兒童可以隨同進入。','第57條','🧒'],

 ['公民公園','十八歲朋友陪進去','沒有法定協助身分、也不是選民的十八歲朋友，想陪你進投票所看你投票。可以嗎？',false,'一般陪伴不是進入投票所的法定例外。','第57條','👥'],

 ['公民公園','兩個都喜歡','同一張地方公職人員選票，用官方工具圈選兩位候選人，沒有其他記號。這票有效嗎？',false,'同一張選票圈選二人以上，屬無效票。','第64條','🗳️'],

 ['投票所','蓋在候選人照片上','用投票所的圈選工具，只在一位候選人的照片欄內蓋一個清楚圈印，能辨認選誰，而且沒有其他無效情形。這票有效嗎？',true,'能辨別圈選何人，且沒有其他無效情形，仍屬有效票。實際投票請在圈選欄內圈選。','官方認定說明','🪪'],

 ['投票所','圈印缺一角','官方圈選工具的印痕沒有完整蓋出，但依弧度仍能辨認是官方工具，清楚圈選一人，且沒有其他無效情形。有效嗎？',true,'圈印不完整不代表一定無效。仍能辨識官方工具及圈選對象，且沒有其他無效情形，屬有效票。','認定注意事項（6）','🗳️'],

 ['投票所','指印也算支持？','在官方選票上，用手指按指印來代替圈選工具。這張票有效嗎？',false,'按指印、未使用官方圈選工具，都屬無效情形。','第64條','👆'],

 ['投票所','自己的印章','帶自己刻的印章，在選票上蓋給喜歡的候選人。這張票有效嗎？',false,'自己的印章不能代替選舉委員會製備的圈選工具。','第64條','🔴'],

 ['開票廣場','加油兩個字','正確圈選後，在選票空白處寫上「加油」。這張票有效嗎？',false,'在選票加入文字，即屬無效情形。','第64條','✏️'],

 ['開票廣場','一片空白','把完全沒有圈選、也沒有任何記號的選票投入票匭。這張票算有效票嗎？',false,'不加圈、完全空白的選票是無效票。','第64條','📄'],

 ['開票廣場','公開看開票','投票完畢、場所改為開票所後，遵守現場秩序，在開放區域安靜觀看開票。可以嗎？',true,'開票採公開方式；參觀時須遵守秩序，不能干擾。','第57、65條','👀'],

 ['開票廣場','換人支持','先圈一人，再把圈印塗掉，改圈另一人。這張票有效嗎？',false,'圈後加以塗改，屬無效票。','第64條','🖍️']

].map((q,i)=>({zone:q[0],title:q[1],text:q[2],yes:q[3],reason:q[4],ref:q[5],icon:q[6],artIndex:i,x:260+i*300,source:i===1?'https://news.tvbs.com.tw/politics/4027931':i===8?'https://advisory.yda.gov.tw/proposals-detail/294':i===9?'https://web.cec.gov.tw/api/file/e85e699f-de74-4182-97a2-db6b0c0956e7.pdf':law}));

questions.splice(12,0,

 {zone:'投票所',title:'同一欄再蓋一次',text:'第一次用官方圈選工具沒蓋清楚，在同一位候選人的同一圈選欄內再蓋一次，仍能辨認只圈選這一人，沒有其他無效情形。這票有效嗎？',yes:true,reason:'同一候選人欄內補蓋，能辨別只圈選這一人，且沒有其他無效情形，仍屬有效票；和圈選兩位候選人不同。',ref:'官方講習：圈選有效票之判定',source:'https://www.banqiao.ntpc.gov.tw/userfiles/3010500/files/111年投開票所主任管理員及主任監察員講習簡報.pdf',icon:'🗳️',artIndex:16},

 {zone:'投票所',title:'選票要摺起來嗎？',text:'完成圈選、離開圈票處準備投入票匭時，應把選票摺好，避免別人看見圈選內容嗎？',yes:true,reason:'應將選票摺疊後投入對應票匭，保護秘密投票。不是把選票帶出投票所，也不能向他人展示圈選內容。',ref:'中選會投票流程',source:'https://info.cec.gov.tw/vote2026/static/file/ebook/index.html',icon:'🧾',artIndex:17}

);

questions.forEach((q,i)=>{q.x=260+i*300});

const TOTAL=questions.length;

const WORLD=5700;let player=120,camera=0,target=null,keys={},moving=false,active=-1,last=0;let answers=Array(TOTAL).fill(null),finished=false;

try{const saved=JSON.parse(localStorage.getItem('ballot-walk-v4'));if(saved&&Array.isArray(saved.answers)&&saved.answers.length===TOTAL&&saved.answers.every(v=>v===null||typeof v==='boolean')){answers=saved.answers;finished=saved.finished===true}}catch{}

// Update the first draft to the immediate-feedback, sixteen-stop game.







document.querySelector('.below').remove();

$('submit').textContent='查看總成績';$('submit').disabled=false;

document.querySelector('.check-choice').remove();$('save').remove();document.querySelector('#eventDialog .hint').remove();

$('eventDialog').insertAdjacentHTML('beforeend','<div class="choices"><button id="yes" class="answer-yes">○ <span>可以做／有效</span></button><button id="no" class="answer-no">× <span>不能做／無效</span></button></div><div id="feedback" aria-live="polite"></div><button id="continue" class="primary wide" hidden>繼續探索</button>');

$('helpDialog').querySelectorAll('p')[0].textContent='使用方向鍵或 A / D 左右走動；手機按住左右按鈕。點事件圈圈，角色就會自動走過去並打開事件；靠近時也能按 E 檢查。';

$('helpDialog').querySelectorAll('p')[1].innerHTML='每題選 <b>○ 可以做／有效</b> 或 <b>× 不能做／無效</b>，馬上看到答案與解說。首次作答計分，之後可回看。完成 18 題後，查看你答對了幾題。';



const canvas=$('scene'),ctx=canvas.getContext('2d');let width=1000,height=360;



const backgrounds=[0,1,2,3].map(i=>{let im=new Image();im.src=`assets/bg${i}.webp`;return im});

const avatarFrames=['shen','chiang'].map(name=>['idle','walk-a','walk-b'].map(pose=>{const im=new Image();im.src=`assets/avatars/${name}-${pose}.webp`;return im}));

const gait=[1,0,2,0];let walkTime=0,walkFrame=0;

let character=0,facing=1,artReady=false,phase='title';
function setPhase(next){phase=next;keys={};target=null;document.querySelector('.game').dataset.phase=next;$('introStage').hidden=next==='play';$('titleStage').hidden=next!=='title';$('characterStage').hidden=next!=='character';$('playStage').inert=next!=='play';if(next==='character')$('cast0').focus();if(next==='play')$('inspect').focus()}
$('beginGame').onclick=()=>setPhase('character');
$('enterGame').onclick=()=>{if(artReady)setPhase('play')};
setPhase('title');

let continuousMap;

function composeContinuousMap(){

 const map=document.createElement('canvas');map.width=WORLD;map.height=360;

 const paint=map.getContext('2d');paint.imageSmoothingEnabled=false;

 const span=WORLD/4,overlap=280;

 backgrounds.forEach((image,i)=>{

   const start=i*span-(i?overlap:0),drawWidth=span+(i?overlap:0);

   if(!i){paint.drawImage(image,start,0,drawWidth,360);return}

   const layer=document.createElement('canvas');layer.width=drawWidth;layer.height=360;

   const brush=layer.getContext('2d');brush.imageSmoothingEnabled=false;brush.drawImage(image,0,0,drawWidth,360);

   const fade=brush.createLinearGradient(0,0,overlap,0);fade.addColorStop(0,'transparent');fade.addColorStop(1,'#000');

   brush.globalCompositeOperation='destination-in';brush.fillStyle=fade;brush.fillRect(0,0,drawWidth,360);

   paint.drawImage(layer,start,0);

 });

 // A shared, mirrored pavement texture keeps the walking surface and curb

 // on one baseline across all districts. Mirroring joins identical edge pixels.

 const pavement=document.createElement('canvas');pavement.width=WORLD;pavement.height=360;

 const road=pavement.getContext('2d');road.imageSmoothingEnabled=false;

 const source=backgrounds[0],tileWidth=span,roadTop=278;

 for(let i=0;i<4;i++){

   road.save();road.translate(i*tileWidth,0);

   if(i%2){road.translate(tileWidth,0);road.scale(-1,1)}

   road.drawImage(source,0,source.naturalHeight*.77,source.naturalWidth,source.naturalHeight*.23,0,roadTop,tileWidth,360-roadTop);

   road.restore();

 }

 const groundFade=road.createLinearGradient(0,roadTop,0,roadTop+22);groundFade.addColorStop(0,'transparent');groundFade.addColorStop(1,'#000');

 road.globalCompositeOperation='destination-in';road.fillStyle=groundFade;road.fillRect(0,0,WORLD,360);

 paint.drawImage(pavement,0,0);continuousMap=map;

}

Promise.all([...backgrounds,...avatarFrames.flat()].map(im=>im.decode())).then(()=>{composeContinuousMap();artReady=true;$('gameLoading').hidden=true;$('enterGame').disabled=false;$('enterGame').textContent='進入街區'}).catch(()=>{$('gameLoading').textContent='圖片載入失敗，請重新整理重試。'});



for(let n=0;n<2;n++)$('cast'+n).onclick=()=>{character=n;for(let j=0;j<2;j++){$('cast'+j).classList.toggle('selected',j===n);$('cast'+j).setAttribute('aria-pressed',String(j===n))}};

function render(){ctx.clearRect(0,0,width,height);ctx.imageSmoothingEnabled=false;ctx.save();ctx.scale(1,height/360);

 if(artReady){

   ctx.drawImage(continuousMap,-camera,0);

   if(moving){if(keys.arrowleft||keys.a)facing=-1;else if(keys.arrowright||keys.d)facing=1;else if(target)facing=Math.sign(target.x-player)||facing}

   // The map stretches vertically with the viewport; keep the avatar square.
   ctx.save();ctx.translate(player-camera,336);ctx.scale(facing,360/height);ctx.drawImage(avatarFrames[character][walkFrame],-70,-140,140,140);ctx.restore();

 }else{ctx.fillStyle='#193e38';ctx.fillRect(0,0,width,360);ctx.fillStyle='#f1e8ba';ctx.font='16px sans-serif';ctx.textAlign='center';ctx.fillText('像素街區載入中…',width/2,180)}

 ctx.restore();

 questions.forEach((q,i)=>{let el=$('point'+i);el.style.left=(q.x-camera)+'px';el.hidden=q.x-camera< -100||q.x-camera>width+100});

 const nearest=questions.reduce((a,b)=>Math.abs(b.x-player)<Math.abs(a.x-player)?b:a);

 $('zone').textContent=nearest.zone;

 if($('nearTitle'))$('nearTitle').textContent=nearest.title;

}



questions.forEach((q,i)=>{

 const button=document.createElement('button');button.id='point'+i;button.className='hotspot';button.setAttribute('aria-label',`${i+1} ${q.title}`);

 button.onclick=()=>{if(Math.abs(player-q.x)<110)openEvent(i);else target={x:q.x,index:i}};$('hotspots').append(button);

 const stop=document.createElement('button');stop.title=`${i+1} ${q.zone}：${q.title}`;stop.setAttribute('aria-label',stop.title);stop.textContent=String(i+1);stop.onclick=()=>{target={x:q.x,index:i}};$('minimap').append(stop);

});

document.body.insertAdjacentHTML('beforeend','<dialog id="submitDialog"><button class="close" aria-label="關閉交卷確認">×</button><div class="eyebrow">準備交卷</div><h2>還有區域沒有搜尋到</h2><p id="unseenText"></p><p class="note">未探索、未作答的題目將視為答錯。確認交卷後，這次成績就會固定。</p><div class="result-actions"><button id="keepExploring">繼續探索</button><button class="primary" id="confirmSubmit">確認查看總成績</button></div></dialog>');

function persist(){try{localStorage.setItem('ballot-walk-v4',JSON.stringify({answers,finished}))}catch{}}

function correctCount(){return questions.filter((q,i)=>answers[i]!==null&&answers[i]===q.yes).length}

function update(){

 const count=answers.filter(v=>v!==null).length;



 questions.forEach((q,i)=>{const done=answers[i]!==null,ok=done&&answers[i]===q.yes,closed=done||finished;

  $('point'+i).className='hotspot'+(closed?' visited':'')+(closed&&!ok?' flagged':'');

  $('point'+i).innerHTML=`<span>${closed?(ok?'✓':'×'):'○'}</span><b>${q.title}</b>`;

  $('minimap').children[i].className=closed?'done'+(!ok?' missed':''):'';

 });

 $('toast').textContent=finished?'本次已交卷，可查看成績或重新巡查。':count===TOTAL?'全部事件已完成！查看總成績。':'滑動地圖行走 · 點圈圈檢查';

}

function labels(q){if(q.artIndex===1)return ['能直接認定','不能只憑品牌認定'];if(q.artIndex===17)return ['應該摺好','不用摺'];if(q.artIndex>=8&&q.artIndex!==14)return ['有效票','無效票'];return ['可以做','不能做']}

function openEvent(i){

 active=i;keys={};target=null;const q=questions[i];$('eventMeta').textContent=`${q.zone} · 事件 ${String(i+1).padStart(2,'0')} / ${TOTAL}`;

 const illustration=new Image();illustration.src=`assets/events/${q.artIndex}.webp`;illustration.alt=q.title+'情境插圖';illustration.width=240;illustration.height=240;$('eventArt').replaceChildren(illustration);$('eventArt').className='event-illustration';$('eventArt').style.backgroundPosition='';

 $('eventTitle').textContent=q.title;$('eventText').textContent=q.text;

 const text=labels(q);$('yes').innerHTML=`○ <span>${text[0]}</span>`;$('no').innerHTML=`× <span>${text[1]}</span>`;

 const done=answers[i]!==null||finished;$('yes').disabled=done;$('no').disabled=done;$('feedback').innerHTML='';$('continue').hidden=!done;

 if(done)feedback();$('eventDialog').showModal();

}

function feedback(){

 const q=questions[active],missing=answers[active]===null,ok=!missing&&answers[active]===q.yes;

 $('feedback').innerHTML=`<div class="feedback ${ok?'correct':'incorrect'}"><strong>${missing?'未探索，計為答錯':ok?'✓ 答對了！':'再記住這個小提醒'} · 答案是 ${q.yes?'○':'×'} ${labels(q)[q.yes?0:1]}</strong><p>${q.reason}</p><a href="${q.source}" target="_blank" rel="noopener">${q.artIndex===1?'資料來源':'官方依據'} · ${q.ref}</a></div>`;

 $('continue').hidden=false;

}

document.body.insertAdjacentHTML('beforeend','<dialog id="answerOverlay" aria-label="作答回饋"><div id="answerMark"></div><strong id="answerVerdict"></strong></dialog>');

$('answerOverlay').addEventListener('cancel',event=>event.preventDefault());

let answerEffectTimer;

function showAnswerEffect(correct,index){

 const overlay=$('answerOverlay');overlay.dataset.correct=String(correct);overlay.setAttribute('aria-label',correct?'答對了':'答錯了');

 const mark=correct?'<path class="brush-stroke" pathLength="1" d="M 304 82 C 421 75 518 166 521 284 C 531 405 432 517 309 521 C 188 528 81 441 78 312 C 70 190 172 84 296 81"/>':'<path class="brush-stroke" pathLength="1" d="M 135 132 Q 282 290 465 467"/><path class="brush-stroke second" pathLength="1" d="M 464 137 Q 298 302 135 465"/>';

 $('answerMark').innerHTML=`<svg viewBox="0 0 600 600" aria-hidden="true"><defs><filter id="brushTexture"><feTurbulence type="fractalNoise" baseFrequency=".045" numOctaves="2" seed="7" result="grain"/><feDisplacementMap in="SourceGraphic" in2="grain" scale="6" xChannelSelector="R" yChannelSelector="G"/></filter></defs><g filter="url(#brushTexture)">${mark}</g></svg>`;

 $('answerVerdict').textContent=correct?'答對了！':'答錯了';

 overlay.showModal();clearTimeout(answerEffectTimer);

 answerEffectTimer=setTimeout(()=>{overlay.close();if(active===index&&$('eventDialog').open)feedback()},1150);

}

function answer(value){if(active<0||answers[active]!==null||finished)return;answers[active]=value;persist();$('yes').disabled=$('no').disabled=true;update();showAnswerEffect(value===questions[active].yes,active)}

$('yes').onclick=()=>answer(true);$('no').onclick=()=>answer(false);

$('continue').onclick=()=>{$('eventDialog').close();if(!finished&&answers.every(a=>a!==null))showResults()};

function nearestIndex(){return questions.reduce((best,q,i)=>Math.abs(q.x-player)<Math.abs(questions[best].x-player)?i:best,0)}

function inspect(){const i=nearestIndex();if(Math.abs(questions[i].x-player)<170)openEvent(i);else target={x:questions[i].x,index:i}}

$('inspect').textContent='檢查事件';$('inspect').onclick=inspect;

function requestResults(){

 keys={};target=null;

 const unseen=answers.filter(a=>a===null).length;

 if(!finished&&unseen){$('unseenText').textContent=`還有 ${unseen} 個區域尚未搜尋、尚未作答。是否仍要查看總成績？`;$('submitDialog').showModal()}else showResults();

}

$('keepExploring').onclick=()=>$('submitDialog').close();

$('confirmSubmit').onclick=()=>{$('submitDialog').close();showResults()};

function showResults(){

 finished=true;persist();update();const done=answers.filter(a=>a!==null).length,score=correctCount(),unseen=TOTAL-done;

 $('score').setAttribute('aria-label',`答對 ${score} 題，共 ${TOTAL} 題`);

 $('score').dataset.level=score/TOTAL>=.8?'high':score/TOTAL>=.6?'medium':'low';

 $('score').innerHTML=`<span class="score-value"><small>答對題數</small>${score}</span><span class="score-total">/ ${TOTAL}<small>總題數</small></span>`;

 $('scoreText').textContent=`正確率 ${Math.round(score/TOTAL*100)}%。答對 ${score} 題、作答錯誤 ${done-score} 題、未探索 ${unseen} 題。未探索題目已計為答錯。`;

 $('answers').innerHTML=questions.map((q,i)=>{const missing=answers[i]===null,ok=!missing&&answers[i]===q.yes;return `<article><h3 class="${ok?'ok':'wrong'}">${missing?'× 未探索（算錯）':ok?'✓ 答對':'× 答錯'} · ${i+1}. ${q.title}</h3><p>${missing?'未作答':`你的答案：${answers[i]?'○':'×'}`}　正確答案：${q.yes?'○':'×'} ${labels(q)[q.yes?0:1]}</p><p>${q.reason}</p><a href="${q.source}" target="_blank" rel="noopener">${q.artIndex===1?'資料來源':'官方依據'} · ${q.ref}</a></article>`}).join('');

 $('resultDialog').showModal();

}

$('submit').onclick=requestResults;

$('restart').onclick=()=>{answers=Array(TOTAL).fill(null);finished=false;persist();player=120;target=null;active=-1;update();$('resultDialog').close();setPhase('title')};

$('share').onclick=async()=>{const value=`這票算不算？我答對 ${correctCount()}/${TOTAL} 題！你能破解幾個投票迷思？ https://vote.playferment.com/`;try{await navigator.clipboard.writeText(value);$('share').textContent='已複製分享結果'}catch{$('share').textContent='請複製網址分享：https://vote.playferment.com/'}};

document.querySelectorAll('.close').forEach(b=>b.onclick=()=>b.closest('dialog').close());
// Dismiss ordinary dialogs only when the press and release are on the backdrop.
document.querySelectorAll('dialog:not(#answerOverlay)').forEach(dialog=>{
 let backdropPress=false;
 const outside=event=>{const r=dialog.getBoundingClientRect();return event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom};
 dialog.addEventListener('pointerdown',event=>{backdropPress=event.target===dialog&&outside(event)});
 dialog.addEventListener('pointerup',event=>{if(backdropPress&&event.target===dialog&&outside(event))dialog.close();backdropPress=false});
 dialog.addEventListener('pointercancel',()=>{backdropPress=false});
});


if($('help'))$('help').onclick=()=>$('helpDialog').showModal();
if($('start'))$('start').onclick=()=>$('helpDialog').close();

$('helpDialog').querySelectorAll('p')[0].textContent='手機可左右滑動地圖、按住移動鍵，或點圈圈走近事件。也可點下方題號快速探索。電腦可使用方向鍵或 A / D，按 E 檢查。';

$('helpDialog').querySelectorAll('p')[1].textContent=`共有 ${TOTAL} 題，選 ○ 或 × 後立即揭曉。首次作答計分。可以提早交卷，但未探索的題目算錯，確認後成績固定。`;

function dialogOpen(){return phase!=='play'||!artReady||!!document.querySelector('dialog[open]')}

window.addEventListener('keydown',e=>{if(dialogOpen())return;if(['ArrowLeft','ArrowRight','a','d','A','D','e','E'].includes(e.key))e.preventDefault();keys[e.key.toLowerCase()]=true;if(e.key.toLowerCase()==='e'&&!e.repeat)inspect()});

window.addEventListener('keyup',e=>keys[e.key.toLowerCase()]=false);window.addEventListener('blur',()=>{keys={}});

[['left','arrowleft'],['right','arrowright']].forEach(([id,key])=>{const button=$(id);button.onpointerdown=e=>{e.preventDefault();button.setPointerCapture(e.pointerId);target=null;keys[key]=true};button.onpointerup=button.onpointercancel=button.onlostpointercapture=()=>keys[key]=false});

let gesture=null;
$('viewport').addEventListener('pointerdown',e=>{if(e.target.closest('button')||dialogOpen())return;gesture={x:e.clientX,player,dragged:false,touch:e.pointerType==='touch'};$('viewport').setPointerCapture(e.pointerId)});
$('viewport').addEventListener('pointermove',e=>{if(!gesture||!gesture.touch)return;const dx=e.clientX-gesture.x;if(Math.abs(dx)>8){gesture.dragged=true;target={x:Math.max(50,Math.min(WORLD-60,gesture.player-dx*2)),index:null}}});
$('viewport').addEventListener('pointerup',e=>{if(!gesture)return;if(!gesture.dragged){const rect=$('viewport').getBoundingClientRect();const worldX=camera+e.clientX-rect.left;const hit=questions.findIndex(q=>worldX>=q.x-25&&worldX<=q.x+160);target={x:hit<0?Math.max(50,Math.min(WORLD-60,worldX)):questions[hit].x,index:hit<0?null:hit}}gesture=null});
$('viewport').addEventListener('pointercancel',()=>gesture=null);

function resize(){const dpr=Math.min(window.devicePixelRatio||1,2);width=$('viewport').clientWidth;height=$('viewport').clientHeight;canvas.width=width*dpr;canvas.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}

window.addEventListener('resize',resize);new ResizeObserver(resize).observe($('viewport'));resize();

function tick(now){

 const dt=Math.min((now-last)/1000,.04);last=now;let dir=0;

 if(!dialogOpen()){

  dir=(keys.arrowright||keys.d?1:0)-(keys.arrowleft||keys.a?1:0);if(dir)target=null;

  if(target){const distance=target.x-player;if(Math.abs(distance)<12){player=target.x;const i=target.index;target=null;if(Number.isInteger(i))openEvent(i)}else dir=Math.sign(distance)}

 }

 moving=!!dir&&!dialogOpen();if(moving)player=Math.max(50,Math.min(WORLD-60,player+dir*340*dt));

 if(moving){walkTime+=dt;walkFrame=gait[Math.floor(walkTime/.14)%gait.length]}else{walkTime=0;walkFrame=0}

 canvas.dataset.animationFrame=String(walkFrame);canvas.dataset.moving=String(moving);

 camera=Math.max(0,Math.min(Math.max(0,WORLD-width),player-width*.38));render();

 if(player>WORLD-140&&!finished)$('toast').textContent='走到終點了！可查看總成績，未探索題目算錯。';

 requestAnimationFrame(tick);

}

update();requestAnimationFrame(tick);

