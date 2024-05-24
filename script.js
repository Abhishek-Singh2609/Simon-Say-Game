let gameseq=[];
let userseq= [];
let btns = ["red","yellow","purple","green"]

let started = false;
let level =0;

h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
if (started == false) {
    console.log("game start");
    started= true;
    levelup()
}
})

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250)
}
function levelup(){
    userseq=[];
    level++;
h2.innerText= `Level ${level}`;
let randmIdx= Math.floor(Math.random()*3);
let randcolor = btns[randmIdx];
let randbtn = document.querySelector(`.${randcolor}`)
// console.log(randmIdx);
// console.log(randcolor);
// console.log(randbtn);
gameseq.push(randcolor)
console.log(gameseq);
//Random Button choose
gameflash(randbtn);
}

function checkAns(idx){
    // console.log(`Current level :`, level);
 
    if (userseq[idx] === gameseq[idx]) {
        // console.log("same Value");
        if(userseq.length == gameseq.length){
        setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was  <b>${level} </b> <br> Please Press any key to start the game and <br> High Score ${level}`;
        document.querySelector("body").style.backgroundColor =  "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor =  "white";
        },200)
        reset()
    }
}


function btnPress(){
    console.log(this);
  let btn= this;
  userflash(btn)
  let usercolor= btn.getAttribute("id")
  console.log(usercolor);
  userseq.push(usercolor)
  console.log(userseq);
  checkAns(userseq.length-1)
}
let allbtns = document.querySelectorAll(".btn")
for (butn of allbtns) {
    butn.addEventListener("click", btnPress)
    
}
function reset(){
    started=false;
    userseq= [];
    gameseq=[]
    level=0;
}