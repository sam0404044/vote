const $=id=>document.getElementById(id);
const law='https://law.cec.gov.tw/LawContent.aspx?id=GL000292';
const questions=[
 ['住宅街','群組裡的拜票','投票日早上，在群組傳訊息：「請大家投給候選人小葉！」可以嗎？',false,'投票日不得從事競選、助選活動。','第56條','📱'],
 ['住宅街','不提名字就可以？','投票日，明確為某位候選人助選，散發他的政見與競選標語，只把姓名遮住。這樣就可以嗎？',false,'遮住姓名不會讓明確的助選行為變成合法。此題已明示是在為特定候選人助選。','第56條','📣'],
 ['住宅街','出發前關機','進投票所前，把手機電源完全關閉，再隨身帶入，可以嗎？',true,'已關閉電源的行動裝置，屬法定例外。靜音與關機不同。','第65條','📴'],
 ['住宅街','靜音就好了？','手機只開靜音，沒有關閉電源，就帶入投票所。可以嗎？',false,'一般選民帶入手機應關閉電源；只開靜音不符合這個例外。','第65條','🔕'],
 ['公民公園','選票自拍','在投票所拍下自己已圈選的選票，傳給朋友證明投給誰。可以嗎？',false,'圈選內容不得出示他人；也不能以攝影器材刺探圈選內容。','第63、65條','📸'],
 ['公民公園','六歲以下的小旅伴','選民帶著自己照顧的五歲孩子，一起進投票所。可以嗎？',true,'選舉人所照顧的六歲以下兒童可以隨同進入。','第57條','🧒'],
 ['公民公園','十八歲朋友陪進去','沒有法定協助身分、也不是選民的十八歲朋友，想陪你進投票所看你投票。可以嗎？',false,'一般陪伴不是進入投票所的法定例外。','第57條','👥'],
 ['公民公園','兩個都喜歡','同一張地方公職人員選票，用官方工具圈選兩位候選人，沒有其他記號。這票有效嗎？',false,'同一張選票圈選二人以上，屬無效票。','第64條','🗳️'],
 ['投票所','好好圈選','使用官方選票及投票所圈選工具，在一位候選人的圈選欄蓋一個清楚記號，無其他污損。有效嗎？',true,'使用官方工具，清楚圈選一人，是正確的圈選方式。','第63、64條','🗳️'],
 ['投票所','蓋在照片上','用官方圈選工具，只在一位候選人的相片欄內蓋一個清楚圈印，能辨認選誰，且無其他無效情形。有效嗎？',true,'官方認定說明容許在候選人各格內清楚圈選。實際投票仍請蓋在圈選欄內。','官方認定說明','🪪'],
 ['投票所','指印也算支持？','在官方選票上，用手指按指印來代替圈選工具。這張票有效嗎？',false,'按指印、未使用官方圈選工具，都屬無效情形。','第64條','👆'],
 ['投票所','自己的印章','帶自己刻的印章，在選票上蓋給喜歡的候選人。這張票有效嗎？',false,'自己的印章不能代替選舉委員會製備的圈選工具。','第64條','🔴'],
 ['開票廣場','加油兩個字','正確圈選後，在選票空白處寫上「加油」。這張票有效嗎？',false,'在選票加入文字，即屬無效情形。','第64條','✏️'],
 ['開票廣場','一片空白','把完全沒有圈選、也沒有任何記號的選票投入票匭。這張票算有效票嗎？',false,'不加圈、完全空白的選票是無效票。','第64條','📄'],
 ['開票廣場','公開看開票','投票完畢、場所改為開票所後，遵守現場秩序，在開放區域安靜觀看開票。可以嗎？',true,'開票採公開方式；參觀時須遵守秩序，不能干擾。','第57、65條','👀'],
 ['開票廣場','換人支持','先圈一人，再把圈印塗掉，改圈另一人。這張票有效嗎？',false,'圈後加以塗改，屬無效票。','第64條','🖍️']
].map((q,i)=>({zone:q[0],title:q[1],text:q[2],yes:q[3],reason:q[4],ref:q[5],icon:q[6],x:280+i*335,source:i===9?'https://advisory.yda.gov.tw/proposals-detail/294':law}));
const WORLD=5700;let player=120,camera=0,target=null,keys={},moving=false,active=-1,last=0;let answers=Array(16).fill(null);
try{const saved=JSON.parse(localStorage.getItem('ballot-walk-v2'));if(Array.isArray(saved)&&saved.length===16&&saved.every(v=>v===null||typeof v==='boolean'))answers=saved;}catch{}
// Update the first draft to the immediate-feedback, sixteen-stop game.
$('progress').innerHTML='0 <span>/ 16 題</span>';
document.querySelector('.heading p').textContent='走過四個街區，破解 16 個投票迷思。';
document.querySelector('.map-caption').textContent='點圈圈走近事件，按 ○ 或 ×，立刻揭曉。';
document.querySelector('.below').innerHTML='<div><span class="legend-circle">○</span> 未作答 <span class="legend-circle seen">●</span> 已作答 <span class="legend-check">✓</span> 答對的事件</div><p>4 個街區 · 16 個情境 · 即時解答</p>';
$('submit').textContent='查看總成績';$('submit').disabled=false;
document.querySelector('.check-choice').remove();$('save').remove();document.querySelector('#eventDialog .hint').remove();
$('eventDialog').insertAdjacentHTML('beforeend','<div class="choices"><button id="yes" class="answer-yes">○ <span>可以做／有效</span></button><button id="no" class="answer-no">× <span>不能做／無效</span></button></div><div id="feedback" aria-live="polite"></div><button id="continue" class="primary wide" hidden>繼續探索</button>');
$('helpDialog').querySelectorAll('p')[0].textContent='使用方向鍵或 A / D 左右走動；手機按住左右按鈕。點事件圈圈，角色就會自動走過去並打開事件；靠近時也能按 E 檢查。';
$('helpDialog').querySelectorAll('p')[1].innerHTML='每題選 <b>○ 可以做／有效</b> 或 <b>× 不能做／無效</b>，馬上看到答案與解說。首次作答計分，之後可回看。完成 16 題後，查看你答對了幾題。';
document.querySelector('footer span').textContent='一段 5 分鐘的公民小冒險';
const canvas=$('scene'),ctx=canvas.getContext('2d');let width=1000,height=360;
function box(x,y,w,h,c,r=0){ctx.fillStyle=c;ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fill()}
function text(t,x,y,size=16,c='#274f43',align='left'){ctx.fillStyle=c;ctx.font=`700 ${size}px "Noto Sans TC",sans-serif`;ctx.textAlign=align;ctx.fillText(t,x,y)}
function tree(x,y,s=1){box(x-5*s,y,10*s,65*s,'#907b56');for(const [dx,dy,r] of [[0,0,34],[-22,15,27],[24,12,28]]){ctx.fillStyle=dx<0?'#5d9876':'#73aa7d';ctx.beginPath();ctx.arc(x+dx*s,y+dy*s,r*s,0,7);ctx.fill()}}
function person(x,y,color='#dba969',walk=false){ctx.save();ctx.translate(x,y);ctx.fillStyle='#f0ca9f';ctx.beginPath();ctx.arc(0,-49,11,0,7);ctx.fill();box(-11,-65,22,8,'#234d45',5);box(-15,-36,30,32,color,6);box(-19,-30,6,25,'#f0ca9f',3);box(13,-30,6,25,'#f0ca9f',3);let step=walk?Math.sin(performance.now()/95)*7:0;box(-11,-4,8,21+step,'#294b47',2);box(3,-4,8,21-step,'#294b47',2);box(-13,15+step,12,5,'#193a35',2);box(2,15-step,12,5,'#193a35',2);ctx.restore()}
function building(x,y,w,h,color,label){box(x+7,y+8,w,h,'#9ebbaa44',8);box(x,y,w,h,color,5);box(x-8,y-10,w+16,14,'#426d60',3);for(let dx=24;dx<w-25;dx+=62){box(x+dx,y+25,35,39,'#eaf2e5',2);box(x+dx+16,y+25,3,39,'#b5ccc3')}box(x+w/2-22,y+h-66,44,66,'#466d63',3);box(x+15,y+h-103,w-30,29,'#fffbed',3);text(label,x+w/2,y+h-83,15,'#365e4b','center')}
function render(){ctx.clearRect(0,0,width,height);ctx.save();ctx.scale(1,height/360);box(0,0,width,360,'#d6eade');ctx.save();ctx.translate(-camera*.25,0);for(let i=0;i<18;i++){box(i*430+100,75,180,150,i%2?'#c0d9ca':'#c6ded0',8);box(i*430+260,105,140,120,'#c3dbce',5)}ctx.restore();ctx.save();ctx.translate(-camera,0);
 box(0,227,WORLD,39,'#94b994');box(0,267,WORLD,74,'#f0e8cf');box(0,268,WORLD,5,'#d5ceb6');box(0,341,WORLD,19,'#a7b9a6');for(let i=0;i<WORLD;i+=90)box(i,309,35,3,'#d9cfae',2);
 building(80,99,215,139,'#d7ba8b','民主便利店');building(435,69,260,169,'#e0cba5','街角公寓');building(810,111,210,127,'#d9c5aa','社區公告欄');building(1100,89,210,149,'#bad3ca','公民書店');
 for(let x=1450;x<2630;x+=235)tree(x,172,x%2?1:1.1);
 box(1550,227,880,11,'#7ba98b');box(1720,225,115,10,'#b48b59');box(1730,196,95,22,'#c29b67',3);box(1737,234,7,24,'#735c43');box(1805,234,7,24,'#735c43');
 box(2050,221,120,15,'#a5b5b2',30);ctx.fillStyle='#a7d7da';ctx.beginPath();ctx.ellipse(2110,215,48,10,0,0,7);ctx.fill();box(2105,183,10,30,'#a6bbb2');text('公民公園',1840,113,26,'#3e7658','center');
 building(2780,74,550,169,'#e8d9b4','第 1128 投開票所');box(2760,55,590,22,'#43725f',3);box(2845,148,420,34,'#fffbed');text('投 票 所',3055,172,24,'#38624c','center');for(let i=0;i<5;i++)person(3380+i*47,245,['#c79c6b','#789a9b','#b87966'][i%3]);box(3550,97,260,125,'#c9d8c5',3);text('圈選練習區',3680,127,16,'#40614e','center');for(let i=0;i<3;i++){box(3570+i*76,143,60,79,'#faf6e4');box(3577+i*76,153,47,6,'#aac0aa');box(3577+i*76,172,47,4,'#d6d9c5')}
 building(4170,95,280,145,'#d5c9af','公民活動中心');box(4590,120,310,115,'#5c7a69',5);box(4600,130,290,93,'#f8f6de');text('開票紀錄',4745,155,18,'#47604c','center');for(let i=0;i<3;i++){text(['候選人 小葉','候選人 小林','候選人 小海'][i],4620,177+i*18,12);text('正 正 正',4800,177+i*18,12)}tree(5030,165,1.2);building(5230,113,240,129,'#c7d5c5','巡查終點');
 for(let i=0;i<16;i++){let q=questions[i];person(q.x+48,260,i%2?'#9aaf87':'#ce9f72');box(q.x-6,231,12,35,'#8f9173',2);box(q.x-47,220,94,21,'#fffcdf',4);text(String(i+1).padStart(2,'0')+' · '+q.zone,q.x,235,10,'#59725c','center')}
 person(player,299,'#e2ba57',moving);box(player-27,326,54,6,'#8d8a6b22',20);ctx.restore();ctx.restore();
 questions.forEach((q,i)=>{let el=$('point'+i);el.style.left=(q.x-camera)+'px';el.hidden=q.x-camera< -100||q.x-camera>width+100});
 $('zone').textContent=questions.reduce((a,b)=>Math.abs(b.x-player)<Math.abs(a.x-player)?b:a).zone;
}
questions.forEach((q,i)=>{const b=document.createElement('button');b.id='point'+i;b.className='hotspot';b.setAttribute('aria-label',`${i+1} ${q.title}`);b.onclick=()=>{if(Math.abs(player-q.x)<45)openEvent(i);else{target={x:q.x,index:i};$('toast').textContent='正在走向：'+q.title}};$('hotspots').append(b);const m=document.createElement('button');m.title=`${i+1} ${q.zone}：${q.title}`;m.setAttribute('aria-label',m.title);m.onclick=()=>{target={x:q.x,index:i}};$('minimap').append(m)});
function persist(){try{localStorage.setItem('ballot-walk-v2',JSON.stringify(answers))}catch{}}
function update(){let count=answers.filter(v=>v!==null).length;$('progress').innerHTML=`${count} <span>/ 16 題</span>`;$('bar').style.width=count/16*100+'%';questions.forEach((q,i)=>{const done=answers[i]!==null,ok=answers[i]===q.yes;$('point'+i).className='hotspot'+(done?' visited':'')+(done&&!ok?' flagged':'');$('point'+i).innerHTML=`${done?(ok?'✓':'×'):'○'}<b>${q.title}</b>`;$('minimap').children[i].className=done?'done':''});$('toast').textContent=count===16?'巡查完成！點「查看總成績」領取報告。':'點圈圈探索 · ○ 可以／有效 · × 不行／無效'}
function openEvent(i){active=i;keys={};target=null;const q=questions[i];$('eventMeta').textContent=`${q.zone} · 事件 ${String(i+1).padStart(2,'0')} / 16`;$('eventArt').textContent=q.icon;$('eventTitle').textContent=q.title;$('eventText').textContent=q.text;const done=answers[i]!==null;$('yes').disabled=done;$('no').disabled=done;$('feedback').innerHTML='';$('continue').hidden=!done;if(done)feedback();$('eventDialog').showModal()}
function feedback(){const q=questions[active],ok=answers[active]===q.yes;$('feedback').innerHTML=`<div class="feedback ${ok?'correct':'incorrect'}"><strong>${ok?'✓ 答對了！':'再記住這個小提醒'} 答案是 ${q.yes?'○':'×'}</strong><p>${q.reason}</p><a href="${q.source}" target="_blank" rel="noopener">官方依據 · ${q.ref}</a></div>`;$('continue').hidden=false}
function answer(value){if(active<0||answers[active]!==null)return;answers[active]=value;persist();$('yes').disabled=$('no').disabled=true;feedback();update()}
$('yes').onclick=()=>answer(true);$('no').onclick=()=>answer(false);$('continue').onclick=()=>{$('eventDialog').close();if(answers.every(a=>a!==null))showResults()};
function inspect(){let i=questions.reduce((best,q,j)=>Math.abs(q.x-player)<Math.abs(questions[best].x-player)?j:best,0);if(Math.abs(questions[i].x-player)<150)openEvent(i);else{$('toast').textContent='再走近一點，或直接點選事件圈圈。'}}$('inspect').onclick=inspect;
function showResults(){let done=answers.filter(a=>a!==null).length,score=questions.filter((q,i)=>answers[i]!==null&&answers[i]===q.yes).length;$('score').textContent=`${score} / 16 題答對`;$('scoreText').textContent=done===16?`巡查完成！正確率 ${Math.round(score/16*100)}%。${score>=13?'你是細心的公民觀察家。':'把不熟悉的規則再看一次，投票更安心。'}`:`目前完成 ${done} / 16 題；尚有 ${16-done} 題未作答，可以關閉報告繼續探索。`;$('answers').innerHTML=questions.map((q,i)=>`<article><h3 class="${answers[i]===null?'':answers[i]===q.yes?'ok':'wrong'}">${answers[i]===null?'○ 未作答':answers[i]===q.yes?'✓ 答對':'× 答錯'} · ${i+1}. ${q.title}</h3>${answers[i]===null?'':`<p>你的答案：${answers[i]?'○':'×'}　正確答案：${q.yes?'○':'×'}</p><p>${q.reason}</p><a href="${q.source}" target="_blank" rel="noopener">官方依據 · ${q.ref}</a>`}</article>`).join('');$('resultDialog').showModal()}
$('submit').onclick=showResults;$('restart').onclick=()=>{answers=Array(16).fill(null);persist();player=120;target=null;update();$('resultDialog').close()};$('share').onclick=async()=>{let done=answers.filter(a=>a!==null).length,score=questions.filter((q,i)=>answers[i]!==null&&answers[i]===q.yes).length;const value=`這票算不算？我完成 ${done}/16 題，答對 ${score}/16 題！你能破解幾個投票迷思？ ${location.href}`;try{await navigator.clipboard.writeText(value);$('share').textContent='已複製挑戰結果'}catch{$('share').textContent='請複製網址分享：'+location.href}};
document.querySelectorAll('.close').forEach(b=>b.onclick=()=>b.closest('dialog').close());$('help').onclick=()=>$('helpDialog').showModal();$('start').onclick=()=>$('helpDialog').close();
function dialogOpen(){return !!document.querySelector('dialog[open]')}window.addEventListener('keydown',e=>{if(dialogOpen())return;if(['ArrowLeft','ArrowRight','a','d','A','D','e','E'].includes(e.key))e.preventDefault();keys[e.key.toLowerCase()]=true;if(e.key.toLowerCase()==='e'&&!e.repeat)inspect()});window.addEventListener('keyup',e=>keys[e.key.toLowerCase()]=false);window.addEventListener('blur',()=>{keys={}});
[['left','arrowleft'],['right','arrowright']].forEach(([id,k])=>{const el=$(id);el.onpointerdown=e=>{e.preventDefault();el.setPointerCapture(e.pointerId);target=null;keys[k]=true};el.onpointerup=el.onpointercancel=el.onlostpointercapture=()=>keys[k]=false});
function resize(){const dpr=window.devicePixelRatio||1;width=$('viewport').clientWidth;height=$('viewport').clientHeight;canvas.width=width*dpr;canvas.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}window.addEventListener('resize',resize);resize();
function tick(now){let dt=Math.min((now-last)/1000,.04);last=now;let dir=0;if(!dialogOpen()){dir=(keys.arrowright||keys.d?1:0)-(keys.arrowleft||keys.a?1:0);if(dir)target=null;if(target){let distance=target.x-player;if(Math.abs(distance)<6){player=target.x;let i=target.index;target=null;openEvent(i)}else dir=Math.sign(distance)}}moving=!!dir&&!dialogOpen();if(moving)player=Math.max(50,Math.min(WORLD-60,player+dir*340*dt));camera=Math.max(0,Math.min(WORLD-width,player-width*.38));render();requestAnimationFrame(tick)}update();requestAnimationFrame(tick);
