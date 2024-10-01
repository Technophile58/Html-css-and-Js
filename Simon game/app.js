let gameSeq=[];
let userSeq=[];

let btns=["red","green","orange","purple"]
let h2=document.querySelector('h2'); 

let started=false;
let level=0;

document.addEventListener('keypress',function(){
    if(started==false){
console.log("Game started");
        started=true;
    levelUp();
    }
});

function levelUp(){
    userSeq=[]
    level++;
    h2.innerText=`Level ${level}`;
    //random button flash
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor)
   gameFlash(randbtn);
}

function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove('flash')
},250);
}

function userFlash(btn){
btn.classList.add("userflash");
setTimeout(function(){
    btn.classList.remove('userflash')
},250);
}


function checkAns(idx){
    // console.log("curr level : ",level);
    // let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
if(userSeq.length===gameSeq.length){
    setTimeout(levelUp,1000)
    levelUp();
}
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br>press any key to start.`;
         document.querySelector('body').style.backgroundColor="red";
         setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";

        },150)
        reset();
    }
}
function btnpress(){
let btn=this;
// console.log(btn);
userFlash(btn)
userColor=btn.getAttribute("id");
// console.log(userColor)
userSeq.push(userColor);
checkAns(userSeq.length-1);
}

let allBtn=document.querySelectorAll('.btn');

for(btn of allBtn){
    btn.addEventListener('click',btnpress);
}

function reset(){
    started  =false;
    gameSeq=[];
    userSeq=[]
    level=0
}