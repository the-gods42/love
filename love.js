for(let i=0;i<12;i++){
    let f=document.createElement("div");
    f.className="firefly";
    f.style.left=Math.random()*100+"vw";
    f.style.top=Math.random()*100+"vh";
    f.style.animationDuration=(5+Math.random()*5)+"s";
    document.body.appendChild(f);
}
let text="My love, I made this entire universe tonight just for you...";
let i=0;
function type(){
    if(i<text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type,60);
    } else {
        document.getElementById("question").style.opacity=1;
    }
}
type();

/* Petals, Sparks, Hearts */
setInterval(()=>{
    let p=document.createElement("div");
    p.className="petal";
    p.innerHTML="🌸";
    p.style.left=Math.random()*100+"vw";
    p.style.animation="fall "+(4+Math.random()*4)+"s linear";
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),6000);
},700);

setInterval(()=>{
    let h=document.createElement("div");
    h.className="heartFloat";
    h.innerHTML="❤️";
    h.style.left=Math.random()*100+"vw";
    h.style.bottom="0";
    h.style.animation="rise "+(4+Math.random()*4)+"s linear";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),6000);
},900);

/* YES BUTTON */
function yes(){
    document.getElementById("loveMessage").style.opacity="1";
    setTimeout(()=>{
        let bh=document.getElementById("bigHeart");
        bh.style.width="280vw";
        bh.style.height="280vw";
    },2500);
    launchFireworks();
}

/* Love Letter */
function showLetter(){ document.getElementById("letter").style.display="block"; }
function closeLetter(){ document.getElementById("letter").style.display="none"; }

/* Fireworks Engine */
const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");
canvas.width=innerWidth;
canvas.height=innerHeight;

let fw=[];

function launchFireworks(){
    setInterval(()=>{
        fw.push({
            x:Math.random()*canvas.width,
            y:canvas.height,
            dy:-15,
            color:"hsl("+(Math.random()*360)+",100%,70%)",
            exploded:false,
            parts:[]
        });
    },300);
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    fw.forEach((f,i)=>{
        if(!f.exploded){
            f.y+=f.dy;
            ctx.beginPath();
            ctx.arc(f.x,f.y,3,0,Math.PI*2);
            ctx.fillStyle=f.color;
            ctx.fill();
            f.dy+=0.3;
            if(f.dy > -3) f.exploded=true;
        } else {
            if(f.parts.length==0){
                for(let j=0;j<40;j++){
                    f.parts.push({
                        x:f.x, y:f.y,
                        dx:(Math.random()-0.5)*10,
                        dy:(Math.random()-0.5)*10,
                        a:1
                    });
                }
            }
            f.parts.forEach((p,j)=>{
                p.x+=p.dx;
                p.y+=p.dy;
                p.dy+=0.1;
                p.a-=0.02;
                ctx.fillStyle=f.color.replace("70%)",p.a+")");
                ctx.beginPath();
                ctx.arc(p.x,p.y,3,0,Math.PI*2);
                ctx.fill();
            });
        }
    });
    requestAnimationFrame(animate);
}
animate();
