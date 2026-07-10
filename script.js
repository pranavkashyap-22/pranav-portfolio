const words=['CYBERSECURITY','ARTIFICIAL INTELLIGENCE','DATA ANALYTICS','WEB TECHNOLOGY','DIGITAL GROWTH'];let wi=0;setInterval(()=>{wi=(wi+1)%words.length;const el=document.getElementById('typeword');el.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:500});el.textContent=words[wi]},2200);
const credentials=[
['CISCO NETWORKING ACADEMY','Introduction to Cybersecurity','Security foundations and cybersecurity concepts.','assets/certificates/cisco-cybersecurity.pdf'],
['DELOITTE · FORAGE','Cyber Job Simulation','Practical cyber security tasks completed through a job simulation.','assets/certificates/deloitte-cyber.pdf'],
['TATA · FORAGE','Cybersecurity Analyst Job Simulation','IAM fundamentals, strategy assessment, custom solutions and platform integration.','assets/certificates/tata-cybersecurity.pdf'],
['DELOITTE · FORAGE','Data Analytics Job Simulation','Practical exposure to data analysis and forensic technology.','assets/certificates/deloitte-data.pdf'],
['MEITY · NASSCOM FUTURESKILLS','Yuva AI for All','Participation in a national digital skilling AI learning initiative.','assets/certificates/yuva-ai.pdf'],
['TDO TECH EDUCATION · DCSC','Web Application Penetration Testing','Drop Certified Security Course completed through examination in web application penetration testing.','assets/certificates/dcsc-web-pentesting.pdf'],
['IIDE · THE DIGITAL SCHOOL','AI in Digital Marketing','Masterclass exploring AI applications in digital marketing.','assets/certificates/ai-digital-marketing.pdf'],
['IIDE · THE DIGITAL SCHOOL','ChatGPT Masterclass','Focused learning around ChatGPT and AI-assisted workflows.','assets/certificates/chatgpt-masterclass.pdf'],
['IIDE · THE DIGITAL SCHOOL','Fundamentals of Meta Advertising','Foundational learning in Meta advertising.','assets/certificates/meta-ads.pdf'],
['IIDE · THE DIGITAL SCHOOL','Instagram Marketing','Masterclass focused on Instagram marketing.','assets/certificates/instagram-marketing.pdf']];
const grid=document.getElementById('credentialGrid');credentials.forEach((c,i)=>{const a=document.createElement('article');a.className='credential'+(i>5?' hidden':'');a.innerHTML=`<span class="issuer">${c[0]}</span><h3>${c[1]}</h3><p>${c[2]}</p><button data-pdf="${c[3]}">VIEW CREDENTIAL ↗</button>`;grid.appendChild(a)});
document.querySelectorAll('[data-pdf]').forEach(b=>b.onclick=()=>{document.getElementById('certFrame').src=b.dataset.pdf;document.getElementById('modal').classList.add('open')});document.getElementById('close').onclick=()=>{document.getElementById('modal').classList.remove('open');document.getElementById('certFrame').src=''};
const showBtn=document.getElementById('showmore');let certExpanded=false;
showBtn.textContent='SHOW MORE CREDENTIALS ↓';
showBtn.onclick=function(){certExpanded=!certExpanded;document.querySelectorAll('.credential').forEach((x,i)=>x.classList.toggle('hidden',!certExpanded&&i>5));this.textContent=certExpanded?'SHOW LESS CREDENTIALS ↑':'SHOW MORE CREDENTIALS ↓';if(!certExpanded)document.getElementById('credentials').scrollIntoView({behavior:'smooth',block:'start'});};
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});document.querySelectorAll('.reveal,.domain,.build,.credential,.edu-card').forEach(x=>{x.classList.add('reveal');obs.observe(x)});document.getElementById('menu').onclick=()=>document.getElementById('nav').classList.toggle('open');document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>document.getElementById('nav').classList.remove('open'));document.getElementById('year').textContent=new Date().getFullYear();window.addEventListener('mousemove',e=>{const g=document.getElementById('glow');g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});

// V3 interactive skill universe
(()=>{const c=document.getElementById('skillSphere');if(!c)return;const x=c.getContext('2d'),skills=['CYBERSECURITY','AI','DATA','JAVA','HTML','CSS','PROMPTING','CHATGPT','IAM','WEB SECURITY','ETHICAL HACKING','ANALYTICS','AUTOMATION','META ADS','DIGITAL MARKETING','INSTAGRAM','CHESS','CUBE SOLVING','MIND GAMES','TEACHING','COMPUTER SYSTEMS'];let pts=[],ax=.22,ay=.15,vx=.0008,vy=.0017,drag=false,lx=0,ly=0;
function size(){let r=c.getBoundingClientRect(),d=Math.min(devicePixelRatio,2);c.width=r.width*d;c.height=r.height*d;x.setTransform(d,0,0,d,0,0);pts=skills.map((w,i)=>{let p=Math.acos(1-2*(i+.5)/skills.length),t=Math.PI*(1+Math.sqrt(5))*i;return{w,X:Math.sin(p)*Math.cos(t),Y:Math.cos(p),Z:Math.sin(p)*Math.sin(t)}})}
function rot(p){let X=p.X*Math.cos(ay)+p.Z*Math.sin(ay),Z=-p.X*Math.sin(ay)+p.Z*Math.cos(ay),Y=p.Y;return{X,Y:Y*Math.cos(ax)-Z*Math.sin(ax),Z:Y*Math.sin(ax)+Z*Math.cos(ax)}}
function frame(){let r=c.getBoundingClientRect(),cx=r.width/2,cy=r.height/2,R=Math.min(r.width,r.height)*.37;x.clearRect(0,0,r.width,r.height);if(!drag){ax+=vx;ay+=vy;vx*=.997;vy*=.997;if(Math.abs(vx)<.00035)vx=.00055;if(Math.abs(vy)<.0007)vy=.0011}pts.map(p=>({...p,q:rot(p)})).sort((a,b)=>a.q.Z-b.q.Z).forEach(p=>{let s=.65+(p.q.Z+1)*.27,a=.2+(p.q.Z+1)*.36;x.save();x.translate(cx+p.q.X*R,cy+p.q.Y*R);x.scale(s,s);x.font='600 15px Space Grotesk';x.textAlign='center';x.textBaseline='middle';x.fillStyle=`rgba(220,232,255,${a})`;x.fillText(p.w,0,0);x.restore()});requestAnimationFrame(frame)}
c.onpointerdown=e=>{drag=true;lx=e.clientX;ly=e.clientY;c.setPointerCapture(e.pointerId)};c.onpointermove=e=>{if(!drag)return;let dx=e.clientX-lx,dy=e.clientY-ly;ay+=dx*.008;ax+=dy*.008;vy=dx*.00014;vx=dy*.00014;lx=e.clientX;ly=e.clientY};c.onpointerup=c.onpointercancel=()=>drag=false;addEventListener('resize',size);size();frame()})();

// V4 skill detail and QR interactions
const skillDetails={'Cybersecurity': 'Foundation-level understanding of cyber threats, security concepts and defensive thinking, supported by Cisco and practical job-simulation learning.', 'Ethical Hacking': 'Exposure to ethical hacking and web application security concepts, including penetration-testing methodology in authorized learning environments.', 'IAM': 'Practical learning around Identity and Access Management fundamentals, strategy assessment, custom IAM solutions and platform integration.', 'Prompt Engineering': 'Designing structured prompts, refining instructions and iterating with generative AI tools to improve output quality.', 'ChatGPT': 'Hands-on use of ChatGPT for research, ideation, learning, content workflows and AI-assisted problem solving.', 'AI Tools': 'Exploring AI tools for creative work, productivity, digital workflows and practical experimentation.', 'Data Analytics': 'Practical exposure to data analysis and forensic technology through a Deloitte job simulation.', 'HTML': 'Working knowledge of semantic page structure and building static web experiences.', 'CSS': 'Working knowledge of responsive styling, layouts, visual design and animation for web interfaces.', 'Java': 'Foundational Java knowledge and experience learning programming logic and object-oriented concepts.', 'Digital Marketing': 'Foundation-level understanding of digital marketing, audience thinking and AI-assisted marketing workflows.', 'Meta Ads': 'Foundational exposure to Meta advertising concepts and campaign-oriented digital marketing.', 'Instagram Marketing': 'Understanding of Instagram-focused content and marketing concepts from structured learning.', 'Computer Systems': 'Advanced general computer knowledge built through long-term hands-on use, troubleshooting and experimentation.'};
const skillModal=document.getElementById('skillModal'),skillTitle=document.getElementById('skillTitle'),skillDetail=document.getElementById('skillDetail');
document.querySelectorAll('.skill-chip').forEach(chip=>chip.addEventListener('click',()=>{skillTitle.textContent=chip.dataset.skill;skillDetail.textContent=skillDetails[chip.dataset.skill]||'';skillModal.classList.add('open');skillModal.setAttribute('aria-hidden','false');}));
const qrModal=document.getElementById('qrModal');document.getElementById('qrTrigger').addEventListener('click',()=>{qrModal.classList.add('open');qrModal.setAttribute('aria-hidden','false')});
document.querySelectorAll('.info-modal').forEach(m=>{m.querySelector('.info-close').onclick=()=>{m.classList.remove('open');m.setAttribute('aria-hidden','true')};m.addEventListener('click',e=>{if(e.target===m){m.classList.remove('open');m.setAttribute('aria-hidden','true')}})});
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.info-modal.open').forEach(m=>m.classList.remove('open'))});

// V5 portfolio experience
window.addEventListener('load',()=>{
  const loader=document.getElementById('siteLoader');
  if(!loader)return;
  setTimeout(()=>loader.classList.add('loader-exit'),1450);
  setTimeout(()=>loader.classList.add('done'),2150);
});
const cursorLight=document.getElementById('cursorLight');
if(cursorLight) document.addEventListener('pointermove',e=>{cursorLight.style.left=e.clientX+'px';cursorLight.style.top=e.clientY+'px'});
const backTop=document.getElementById('backTop');
if(backTop){window.addEventListener('scroll',()=>backTop.classList.toggle('show',scrollY>700));backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));}
document.querySelectorAll('.download-ripple,.resume-download').forEach(btn=>btn.addEventListener('click',()=>{btn.classList.add('downloaded');setTimeout(()=>btn.classList.remove('downloaded'),900)}));

// V5.1 opportunity thought modal
const opportunityModal=document.getElementById('opportunityModal');
const opportunityTrigger=document.getElementById('opportunityTrigger');
if(opportunityModal&&opportunityTrigger){
  opportunityTrigger.addEventListener('click',()=>{
    opportunityModal.classList.add('open');
    opportunityModal.setAttribute('aria-hidden','false');
  });
}

// V7 — Recruiter's Desk
const recruiterDesk=document.getElementById('recruiterDesk');
if(recruiterDesk){
  recruiterDesk.addEventListener('pointermove',e=>{
    const r=recruiterDesk.getBoundingClientRect();
    recruiterDesk.style.setProperty('--mx',((e.clientX-r.left)/r.width-.5).toFixed(3));
    recruiterDesk.style.setProperty('--my',((e.clientY-r.top)/r.height-.5).toFixed(3));
  });
  recruiterDesk.addEventListener('pointerleave',()=>{recruiterDesk.style.setProperty('--mx',0);recruiterDesk.style.setProperty('--my',0)});
}
const deskResumeModal=document.getElementById('deskResumeModal');
const resumePaper=document.getElementById('resumePaper');
const closeDeskResume=deskResumeModal?.querySelector('.desk-resume-close');
const closeDesk=()=>{deskResumeModal?.classList.remove('open');deskResumeModal?.setAttribute('aria-hidden','true')};
resumePaper?.addEventListener('click',()=>{deskResumeModal?.classList.add('open');deskResumeModal?.setAttribute('aria-hidden','false')});
closeDeskResume?.addEventListener('click',closeDesk);
deskResumeModal?.addEventListener('click',e=>{if(e.target===deskResumeModal)closeDesk()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDesk()});

// ========================= V8 FLUID ENGINE =========================
(()=>{
const canvas=document.getElementById('v8Fluid'),ctx=canvas?.getContext('2d'),cursor=document.getElementById('v8Cursor'),avatar=document.getElementById('v8Companion');
if(!canvas||!ctx)return;
let dpr=Math.min(devicePixelRatio||1,1.5),w=0,h=0,mx=innerWidth*.5,my=innerHeight*.5,sx=mx,sy=my,cx=mx,cy=my,scrollY0=scrollY;
const blobs=Array.from({length:5},(_,i)=>({x:.12+i*.21,y:.18+(i%3)*.27,r:260+i*38,p:i*1.7,v:.00018+i*.000025}));
function resize(){w=innerWidth;h=innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0)}resize();addEventListener('resize',resize,{passive:true});
document.addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY},{passive:true});
const targets='a,button,.domain-card,.mind-card,.build-card,.credential-card,.skill-chip,.contact-card,.resume-paper';
document.querySelectorAll(targets).forEach(el=>{el.addEventListener('mouseenter',()=>cursor?.classList.add('hot'));el.addEventListener('mouseleave',()=>cursor?.classList.remove('hot'))});
function splitText(el){if(el.dataset.v8split)return;el.dataset.v8split='1';const walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);const nodes=[];while(walk.nextNode())nodes.push(walk.currentNode);nodes.forEach(n=>{if(!n.nodeValue.trim())return;const f=document.createDocumentFragment();[...n.nodeValue].forEach(ch=>{const s=document.createElement('span');s.className='v8-char';s.textContent=ch;f.appendChild(s)});n.replaceWith(f)})}
document.querySelectorAll('.about p,.desk-intro p,.v8-letter-react').forEach(splitText);
function frame(t){
 sx+=(mx-sx)*.075;sy+=(my-sy)*.075;cx+=(mx-cx)*.22;cy+=(my-cy)*.22;
 if(cursor)cursor.style.transform=`translate3d(${cx-parseFloat(getComputedStyle(cursor).width)/2}px,${cy-parseFloat(getComputedStyle(cursor).height)/2}px,0)`;
 ctx.clearRect(0,0,w,h);ctx.globalCompositeOperation='screen';
 blobs.forEach((b,i)=>{let bx=w*(b.x+Math.sin(t*b.v+b.p)*.08)+(sx-w/2)*(.012+i*.002),by=h*(b.y+Math.cos(t*b.v*.8+b.p)*.07)+(sy-h/2)*.01;let g=ctx.createRadialGradient(bx,by,0,bx,by,b.r);g.addColorStop(0,i%2?'rgba(112,62,185,.032)':'rgba(38,126,205,.045)');g.addColorStop(.48,i%2?'rgba(70,38,120,.018)':'rgba(25,80,140,.022)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(bx-b.r,by-b.r,b.r*2,b.r*2)});
 let mg=ctx.createRadialGradient(sx,sy,0,sx,sy,175);mg.addColorStop(0,'rgba(73,167,255,.035)');mg.addColorStop(.45,'rgba(73,167,255,.016)');mg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=mg;ctx.fillRect(sx-175,sy-175,350,350);
 document.querySelectorAll('.v8-char').forEach(s=>{const r=s.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;s.classList.toggle('lit',Math.hypot(x-cx,y-cy)<28)});
 if(avatar){let r=avatar.getBoundingClientRect(),dx=(sx-(r.left+r.width/2))/innerWidth,dy=(sy-(r.top+r.height/2))/innerHeight;avatar.style.setProperty('--avx',Math.max(-5,Math.min(5,dx*10))+'px');avatar.style.setProperty('--avy',Math.max(-4,Math.min(4,dy*8))+'px');avatar.style.setProperty('--avr',Math.max(-5,Math.min(5,dx*9))+'deg');avatar.style.setProperty('--alx',(50+dx*30)+'%');avatar.style.setProperty('--aly',(40+dy*25)+'%');avatar.classList.toggle('show',scrollY>innerHeight*.55&&scrollY<document.documentElement.scrollHeight-innerHeight*1.25)}
 document.querySelectorAll('.domain-card,.mind-card,.build-card,.credential-card,.contact-card').forEach(el=>{const r=el.getBoundingClientRect();if(r.bottom<0||r.top>h)return;const dx=(sx-(r.left+r.width/2))/r.width,dy=(sy-(r.top+r.height/2))/r.height;if(Math.abs(dx)<.8&&Math.abs(dy)<.8)el.style.transform=`perspective(800px) rotateX(${(-dy*2.2).toFixed(2)}deg) rotateY(${(dx*2.2).toFixed(2)}deg) translateY(-3px)`;else el.style.transform=''});
 requestAnimationFrame(frame)
}requestAnimationFrame(frame);
})();

// ========================= V10 CHESS — SIDE SELECT + FLUID AI =========================
(()=>{
const boardEl=document.getElementById('v8Board');if(!boardEl)return;
const turnEl=document.getElementById('v8Turn'),statusEl=document.getElementById('v8ChessStatus'),capturedEl=document.getElementById('v8Captured'),movesEl=document.getElementById('v8Moves');
const whiteBtn=document.getElementById('v10White'),blackBtn=document.getElementById('v10Black'),computerBtn=document.getElementById('v103Computer'),twoBtn=document.getElementById('v103TwoPlayer');
const glyph={wK:'♔',wQ:'♕',wR:'♖',wB:'♗',wN:'♘',wP:'♙',bK:'♚',bQ:'♛',bR:'♜',bB:'♝',bN:'♞',bP:'♟'};
const val={P:100,N:320,B:330,R:500,Q:900,K:20000};
let B,turn,sel,legal,history,captured,moves,castle,player='w',mode='computer',aiBusy=false;
const clone=o=>JSON.parse(JSON.stringify(o)),rc=i=>[Math.floor(i/8),i%8],idx=(r,c)=>r*8+c,inside=(r,c)=>r>=0&&r<8&&c>=0&&c<8,color=p=>p?.[0],type=p=>p?.[1];
function say(s){if(statusEl)statusEl.textContent=s}
function attacks(pos,from,forCheck=false){const p=pos[from];if(!p)return[];const [r,c]=rc(from),co=color(p),t=type(p),out=[];const add=(rr,cc)=>{if(inside(rr,cc))out.push(idx(rr,cc))};const slide=dirs=>dirs.forEach(([dr,dc])=>{let rr=r+dr,cc=c+dc;while(inside(rr,cc)){let j=idx(rr,cc);out.push(j);if(pos[j])break;rr+=dr;cc+=dc}});
if(t==='P'){let d=co==='w'?-1:1;if(forCheck){add(r+d,c-1);add(r+d,c+1)}else{if(inside(r+d,c)&&!pos[idx(r+d,c)]){add(r+d,c);let st=co==='w'?6:1;if(r===st&&!pos[idx(r+2*d,c)])add(r+2*d,c)};[-1,1].forEach(dc=>{if(inside(r+d,c+dc)&&pos[idx(r+d,c+dc)]&&color(pos[idx(r+d,c+dc)])!==co)add(r+d,c+dc)})}}
if(t==='N')[[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]].forEach(d=>add(r+d[0],c+d[1]));
if(t==='B'||t==='Q')slide([[1,1],[1,-1],[-1,1],[-1,-1]]);if(t==='R'||t==='Q')slide([[1,0],[-1,0],[0,1],[0,-1]]);
if(t==='K'){for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++)if(dr||dc)add(r+dr,c+dc);if(!forCheck){let base=co==='w'?60:4;if(from===base&&castle[co+'K']){if(castle[co+'R7']&&!pos[base+1]&&!pos[base+2])out.push(base+2);if(castle[co+'R0']&&!pos[base-1]&&!pos[base-2]&&!pos[base-3])out.push(base-2)}}}
return out.filter(j=>!pos[j]||color(pos[j])!==co)}
function checked(pos,co){let k=pos.findIndex(p=>p===co+'K');return k>=0&&pos.some((p,i)=>p&&color(p)!==co&&attacks(pos,i,true).includes(k))}
function legalMoves(from){return attacks(B,from).filter(to=>{let p=B[from],tmp=B.slice(),base=color(p)==='w'?60:4;if(type(p)==='K'&&Math.abs(to-from)===2){let step=to>from?1:-1;if(checked(tmp,color(p)))return false;let mid=from+step,t2=tmp.slice();t2[mid]=t2[from];t2[from]=null;if(checked(t2,color(p)))return false;tmp[to]=tmp[from];tmp[from]=null;let rook=step===1?base+3:base-4,rt=step===1?to-1:to+1;tmp[rt]=tmp[rook];tmp[rook]=null}else{tmp[to]=tmp[from];tmp[from]=null}return !checked(tmp,color(p))})}
function allMoves(co){let a=[];B.forEach((p,i)=>{if(p&&color(p)===co)legalMoves(i).forEach(to=>a.push({from:i,to,cap:B[to]}))});return a}
function perform(from,to,ai=false){history.push({B:B.slice(),turn,captured:captured.slice(),moves:moves.slice(),castle:clone(castle)});let p=B[from],cap=B[to],co=color(p),base=co==='w'?60:4;if(cap)captured.push(cap);if(type(p)==='K'){castle[co+'K']=0;if(Math.abs(to-from)===2){let rook=to>from?base+3:base-4,rt=to>from?to-1:to+1;B[rt]=B[rook];B[rook]=null}}if(type(p)==='R'){if(from===base-4)castle[co+'R0']=0;if(from===base+3)castle[co+'R7']=0}B[to]=p;B[from]=null;if(type(p)==='P'&&(rc(to)[0]===0||rc(to)[0]===7))B[to]=co+'Q';moves.push(`${String.fromCharCode(97+rc(from)[1])}${8-rc(from)[0]}–${String.fromCharCode(97+rc(to)[1])}${8-rc(to)[0]}`);turn=turn==='w'?'b':'w';sel=null;legal=[];render();let avail=allMoves(turn);if(!avail.length)say(checked(B,turn)?(mode==='computer'?(turn===player?'YOU GOT CHECKMATED — COMPUTER WINS':'CHECKMATE — YOU CHECKMATED THE COMPUTER'):`CHECKMATE — ${turn==='w'?'BLACK':'WHITE'} CHECKMATED ${turn==='w'?'WHITE':'BLACK'}`):'STALEMATE');else if(checked(B,turn))say('CHECK. Choose your response.');else say(mode==='computer'?(turn===player?'YOUR MOVE — select a piece.':'FLUID AI IS READING THE POSITION…'):`${turn==='w'?'WHITE':'BLACK'} PLAYER TO MOVE.`);if(mode==='computer'&&turn!==player&&avail.length)setTimeout(aiMove,320)}
function evaluate(pos,co){
 let score=0;
 pos.forEach((p,i)=>{if(!p)return;const sign=color(p)===co?1:-1,[r,c]=rc(i),center=7-Math.abs(3.5-r)-Math.abs(3.5-c);score+=sign*(val[type(p)]+center*(type(p)==='P'?3:7))});
 return score;
}
function aiMove(){
 if(aiBusy||mode!=='computer'||turn===player)return;
 aiBusy=true;boardEl.classList.add('v10-thinking');
 const ai=turn,choices=allMoves(ai);
 if(!choices.length){aiBusy=false;boardEl.classList.remove('v10-thinking');return}
 let best=-Infinity,bestMoves=[];
 choices.forEach(m=>{
   const saveB=B.slice(),saveCastle=clone(castle),saveTurn=turn;
   let p=B[m.from];B[m.to]=p;B[m.from]=null;
   let score=evaluate(B,ai)+(m.cap?val[type(m.cap)]*2.4:0);
   const enemy=ai==='w'?'b':'w';turn=enemy;
   let replies=allMoves(enemy),worst=0;
   replies.forEach(r=>{let penalty=(r.cap?val[type(r.cap)]*2.1:0);if(penalty>worst)worst=penalty});
   score-=worst;
   if(checked(B,enemy))score+=85;
   B=saveB;castle=saveCastle;turn=saveTurn;
   score+=Math.random()*4;
   if(score>best+1){best=score;bestMoves=[m]}else if(Math.abs(score-best)<=1)bestMoves.push(m);
 });
 const m=bestMoves[Math.floor(Math.random()*bestMoves.length)]||choices[0];
 setTimeout(()=>{perform(m.from,m.to,true);boardEl.classList.remove('v10-thinking');aiBusy=false},220);
}
function click(i){if(aiBusy||(mode==='computer'&&turn!==player))return;if(sel!==null&&legal.includes(i)){perform(sel,i);return}if(B[i]&&color(B[i])===(mode==='computer'?player:turn)){sel=i;legal=legalMoves(i);say(`${glyph[B[i]]} selected — ${legal.length} legal move${legal.length===1?'':'s'}.`);render()}else{sel=null;legal=[];say('Choose one of '+((mode==='computer'?player:turn)==='w'?'White':'Black')+' pieces.');render()}}
function render(){boardEl.innerHTML='';B.forEach((p,i)=>{let b=document.createElement('button');b.type='button';b.className='v8-square '+(((Math.floor(i/8)+i%8)%2)?'dark':'light');if(i===sel)b.classList.add('selected');if(legal.includes(i))b.classList.add(B[i]?'capture':'legal');b.dataset.i=i;if(p){let s=document.createElement('span');s.className='v8-piece '+(color(p)==='w'?'piece-white':'piece-black');s.textContent=glyph[p];b.appendChild(s)}b.onclick=()=>click(i);boardEl.appendChild(b)});turnEl.textContent=(turn==='w'?'WHITE':'BLACK')+' TO MOVE';capturedEl.textContent=captured.map(p=>glyph[p]).join(' ');movesEl.innerHTML=moves.map((m,i)=>`<span>${i+1}. ${m}</span>`).join('')}
function fresh(){B=Array(64).fill(null);['R','N','B','Q','K','B','N','R'].forEach((p,c)=>{B[c]='b'+p;B[8+c]='bP';B[48+c]='wP';B[56+c]='w'+p});turn='w';sel=null;legal=[];history=[];captured=[];moves=[];castle={wK:1,wR0:1,wR7:1,bK:1,bR0:1,bR7:1};aiBusy=false;boardEl.classList.toggle('v10-flipped',player==='b');whiteBtn?.classList.toggle('active',player==='w');blackBtn?.classList.toggle('active',player==='b');computerBtn?.classList.toggle('active',mode==='computer');twoBtn?.classList.toggle('active',mode==='two');document.querySelector('.v10-side-picker')?.classList.toggle('v103-disabled',mode==='two');render();say(mode==='two'?'Two-player mode. White moves first.':(player==='w'?'You are White. Make the first move.':'You are Black. Strong AI opens as White.'));if(mode==='computer'&&player==='b')setTimeout(aiMove,350)}
whiteBtn?.addEventListener('click',()=>{if(mode==='computer'){player='w';fresh()}});blackBtn?.addEventListener('click',()=>{if(mode==='computer'){player='b';fresh()}});computerBtn?.addEventListener('click',()=>{mode='computer';fresh()});twoBtn?.addEventListener('click',()=>{mode='two';fresh()});
document.getElementById('v8Reset')?.addEventListener('click',fresh);
document.getElementById('v8Undo')?.addEventListener('click',()=>{if(aiBusy)return;let h=history.pop();if(!h)return say('No move to undo yet.');if(h.turn!==player&&history.length)h=history.pop();B=h.B;turn=h.turn;sel=null;legal=[];captured=h.captured;moves=h.moves;castle=h.castle;render();say('Move undone. Read the board again.')});
fresh();
})();

// V8.2 velocity field
(()=>{
const c=document.getElementById('v82Stars');if(!c)return;const x=c.getContext('2d');let w,h,d=1,mx=.5,my=.5;
const stars=Array.from({length:105},()=>({a:Math.random()*Math.PI*2,r:Math.random(),s:.25+Math.random()*.75}));
function size(){w=innerWidth;h=innerHeight;c.width=w*d;c.height=h*d;x.setTransform(d,0,0,d,0,0)}size();addEventListener('resize',size,{passive:true});c.parentElement.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();mx=(e.clientX-r.left)/r.width;my=(e.clientY-r.top)/r.height},{passive:true});
function draw(t){x.clearRect(0,0,w,h);const cx=w*(.5+(mx-.5)*.035),cy=h*(.5+(my-.5)*.035),max=Math.hypot(w,h)*.62;stars.forEach((p,i)=>{let rr=((p.r+t*.000035*p.s)%1)*max,len=8+rr*.055*p.s,xx=cx+Math.cos(p.a)*rr,yy=cy+Math.sin(p.a)*rr;x.beginPath();x.moveTo(xx,yy);x.lineTo(xx-Math.cos(p.a)*len,yy-Math.sin(p.a)*len);x.strokeStyle=`rgba(210,235,255,${.12+p.s*.55})`;x.lineWidth=.4+p.s*1.5;x.stroke()});requestAnimationFrame(draw)}let v84StarRunning=false;const v84StarIO=new IntersectionObserver(([e])=>{if(e.isIntersecting&&!v84StarRunning){v84StarRunning=true;requestAnimationFrame(draw)}},{rootMargin:'200px'});v84StarIO.observe(c.parentElement)
})();




// ================= V8.7 — RABBIT RIG / SAFE BLINK / SOCIAL RAIL =================
(()=>{
 const fine=matchMedia('(pointer:fine)').matches, avatars=[...document.querySelectorAll('.v88-avatar')];
 let mx=innerWidth*.5,my=innerHeight*.5,sx=mx,sy=my,raf=0,lens;
 if(fine){lens=document.createElement('div');lens.className='v87-cursor';lens.innerHTML='<i></i>';document.body.appendChild(lens)}
 function frame(){
  raf=0;sx+=(mx-sx)*.38;sy+=(my-sy)*.38;
  if(lens)lens.style.transform=`translate3d(${sx}px,${sy}px,0)`;
  avatars.forEach(av=>{const r=av.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;
   const dx=Math.max(-1,Math.min(1,(sx-r.left-r.width*.5)/(innerWidth*.4)));
   const dy=Math.max(-1,Math.min(1,(sy-r.top-r.height*.43)/(innerHeight*.4)));
   av.style.setProperty('--ry',`${dx*7}deg`);av.style.setProperty('--rx',`${-dy*4.5}deg`);
   av.style.setProperty('--tx',`${dx*7}px`);av.style.setProperty('--ty',`${dy*4}px`);
   
  });
  if(Math.abs(mx-sx)+Math.abs(my-sy)>.15)raf=requestAnimationFrame(frame)
 }
 addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;if(lens)lens.classList.toggle('is-hot',!!e.target.closest('a,button,.skill-chip,.v82-thought-list article'));if(!raf)raf=requestAnimationFrame(frame)},{passive:true});
 const desk=document.querySelector('.v82-desk-section'),notes=[...document.querySelectorAll('.v82-desk-notes article')],code=document.getElementById('v82DeskCode');let sr=0;
 function scrollFrame(){sr=0;if(!desk||!notes.length)return;const r=desk.getBoundingClientRect(),range=Math.max(1,desk.offsetHeight-innerHeight),p=Math.max(0,Math.min(.999,-r.top/range));document.documentElement.style.setProperty('--avatar-scroll',p.toFixed(3))}
 addEventListener('scroll',()=>{if(!sr)sr=requestAnimationFrame(scrollFrame)},{passive:true});scrollFrame();
 document.querySelectorAll('.v82-thought-list article').forEach(item=>{item.classList.remove('active');item.addEventListener('pointerenter',()=>item.classList.add('active'));item.addEventListener('pointerleave',()=>item.classList.remove('active'))});
})();

// V8.8 magnetic social icons — fast, local and GPU-only.
(()=>{
 if(!matchMedia('(pointer:fine)').matches)return;
 document.querySelectorAll('.v87-social-rail a').forEach(a=>{
   const icon=a.querySelector('svg');
   a.addEventListener('pointermove',e=>{
     const r=a.getBoundingClientRect();
     const x=(e.clientX-r.left-r.width/2)*.34, y=(e.clientY-r.top-r.height/2)*.34;
     icon.style.setProperty('--icon-x',x+'px'); icon.style.setProperty('--icon-y',y+'px');
   },{passive:true});
   a.addEventListener('pointerleave',()=>{
     icon.style.setProperty('--icon-x','0px'); icon.style.setProperty('--icon-y','0px');
   },{passive:true});
 });
})();

// V8.9 Signal Constellation — pointer-local, transform-only interaction.
(()=>{
 const field=document.querySelector('.signal-constellation');
 if(!field)return;
 const nodes=[...field.querySelectorAll('.signal-node')];
 const thought=field.querySelector('.signal-thought');
 const core=field.querySelector('.signal-core');
 let hold=null, revealTimer=null;
 const fine=matchMedia('(pointer:fine)').matches;
 if(fine){
   field.addEventListener('pointermove',e=>{
     const fr=field.getBoundingClientRect();
     nodes.forEach(n=>{
       const r=n.getBoundingClientRect(), dx=e.clientX-(r.left+r.width/2), dy=e.clientY-(r.top+r.height/2);
       const d=Math.hypot(dx,dy), near=d<115;
       const pull=near?(1-d/115)*7:0;
       n.style.transform=`translate3d(${dx/(d||1)*pull}px,${dy/(d||1)*pull}px,0)`;
       n.classList.toggle('is-near',near);
     });
     const hit=nodes.find(n=>n.classList.contains('is-near'));
     thought.innerHTML=`<span>${hit?hit.dataset.thought:'MOVE THROUGH THE SIGNAL'}</span>`;
     thought.classList.toggle('active',!!hit);
   },{passive:true});
   field.addEventListener('pointerleave',()=>{
     nodes.forEach(n=>{n.style.transform='translate3d(0,0,0)';n.classList.remove('is-near')});
     thought.innerHTML='<span>MOVE THROUGH THE SIGNAL</span>';thought.classList.remove('active');
   },{passive:true});
   core.addEventListener('pointerenter',()=>{
     hold=setTimeout(()=>{
       field.classList.add('signal-found');
       revealTimer=setTimeout(()=>field.classList.remove('signal-found'),2200);
     },900);
   });
   core.addEventListener('pointerleave',()=>clearTimeout(hold));
 }
})();

// V8.9.1 — reliable Signal Found reveal at final contact.
(()=>{
 const field=document.querySelector('#contact .signal-constellation');
 if(!field)return;
 const core=field.querySelector('.signal-core');
 let timer=0, hide=0;
 const show=()=>{
   clearTimeout(timer); clearTimeout(hide);
   field.classList.add('signal-found');
   hide=setTimeout(()=>field.classList.remove('signal-found'),2600);
 };
 core.addEventListener('pointerenter',()=>{ timer=setTimeout(show,800); });
 core.addEventListener('pointerleave',()=>clearTimeout(timer));
 core.addEventListener('click',show);
})();

// V9.0 automatic desk narrative — independent of scrolling.
(()=>{
 const notes=[...document.querySelectorAll('.v82-desk-notes article')],code=document.getElementById('v82DeskCode');
 if(!notes.length)return; let i=0;
 const paint=()=>{notes.forEach((n,j)=>n.classList.toggle('active',j===i));if(code)code.textContent=notes[i].dataset.code||''};
 paint(); setInterval(()=>{i=(i+1)%notes.length;paint()},3600);
})();

// V9.0 lightweight Tech Stack motion.
(()=>{
 const stage=document.querySelector('.v90-stack-stage'),grid=document.querySelector('.v90-stack-grid');
 if(!stage||!grid||matchMedia('(pointer:coarse)').matches)return;
 stage.addEventListener('pointermove',e=>{const r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;grid.style.transform=`rotateX(${(-y*3).toFixed(2)}deg) rotateY(${(x*5).toFixed(2)}deg)`});
 stage.addEventListener('pointerleave',()=>grid.style.transform='');
})();

// V9.0 portfolio knowledge assistant. No fake cloud-AI claim: instant local knowledge mode.
(()=>{
 const form=document.getElementById('v90AiForm'),input=document.getElementById('v90AiInput'),log=document.getElementById('v90AiLog');
 if(!form)return;
 const add=(t,c)=>{const d=document.createElement('div');d.className='v90-ai-msg '+c;d.textContent=t;log.appendChild(d);log.scrollTop=log.scrollHeight};
 const answer=q=>{
  q=q.toLowerCase();
  if(/who|about|pranav/.test(q))return "Pranav Kumar Jha is a curiosity-driven aspiring Computer Science engineer from Saharsa, Bihar. He explores cybersecurity, AI, data and interactive web experiences.";
  if(/skill|tech|stack|know/.test(q))return "His current exposure includes cybersecurity, ethical hacking, IAM, prompt engineering, ChatGPT and AI tools, data analytics, HTML, CSS, Java, digital marketing, Meta Ads and computer systems.";
  if(/education|school|college|study|percentage|class/.test(q))return "Pranav completed Class X under CBSE with 84.4% and Class XII under BBOSE with 79.4%. His portfolio says B.Tech in Computer Science & Engineering is the next chapter.";
  if(/project|build|made|work/.test(q))return "The portfolio documents a Voice Welcome Discord bot, a dynamic birthday wish, a car racing game and frontend web experiments. Some older source files were lost after a PC reset, so the portfolio avoids fake repository claims.";
  if(/cyber|security|hack/.test(q))return "Cybersecurity is one of Pranav's core exploration areas. He is interested in security fundamentals, IAM, ethical-hacking concepts and questioning what systems trust or expose.";
  if(/\bai\b|artificial|prompt|chatgpt/.test(q))return "Pranav explores AI as a tool for curiosity and workflows, with exposure to prompt engineering, ChatGPT and AI tools. His own portfolio language emphasizes judgment and verification after prompting.";
  if(/contact|email|hire|reach/.test(q))return "You can reach Pranav at jhaarunakumari772@gmail.com. The Contact section also links his GitHub, LinkedIn, Instagram and resume.";
  if(/github/.test(q))return "Pranav's GitHub is linked in the Contact section under “Explore my repositories.”";
  if(/resume|cv/.test(q))return "The resume is available in the portfolio's Resume section and again in Contact. Use the resume card or the professional resume link.";
  if(/chess|game|play/.test(q))return "Pranav enjoys chess, cube solving and mind games. In Play With Me, you can play White against the portfolio's themed computer opponent.";
  if(/anime|gaming|interest|hobby/.test(q))return "Beyond technology, Pranav mentions gaming, anime-inspired storytelling, fantasy worlds and emerging technology as creative influences.";
  if(/where|bihar|saharsa|from/.test(q))return "Pranav is from Saharsa, Bihar.";
  return "I can answer portfolio questions about Pranav's background, skills, education, projects, cybersecurity, AI, resume, contact details, interests and chess. Try asking one of those directly.";
 };
 form.addEventListener('submit',e=>{e.preventDefault();const q=input.value.trim();if(!q)return;add(q,'user');input.value='';setTimeout(()=>add(answer(q),'bot'),90)});
})();

// V9.0 Hire interaction.
(()=>{
 const modal=document.getElementById('v90HireModal'),form=document.getElementById('v90HireForm');
 const open=()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false')},close=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')};
 document.querySelectorAll('.v90-hire-open').forEach(b=>b.addEventListener('click',open));
 modal?.querySelector('.v90-hire-close')?.addEventListener('click',close);
 modal?.addEventListener('click',e=>{if(e.target===modal)close()});
 form?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form),name=((d.get('first')||'')+' '+(d.get('last')||'')).trim(),body=`Hi Pranav,%0D%0A%0D%0A${encodeURIComponent(d.get('message')||'')}%0D%0A%0D%0AFrom: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(d.get('email')||'')}`;location.href=`mailto:jhaarunakumari772@gmail.com?subject=${encodeURIComponent('Portfolio opportunity from '+name)}&body=${body}`});
})();
