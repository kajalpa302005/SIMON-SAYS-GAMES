let gameSeq=[];
let userSeq=[];
let btn=["yellow","red","purple","green"];

let started= false;
let level = 0;
let h2= document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started == true;
        levelUp();

    }

});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () { 
        btn.classList.remove("flash");
    } , 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function () { 
        btn.classList.remove("userflash");
    } , 250);
}

function levelUp() {
    userSeq =[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random() *3);
    let randColor= btn[randIdx];
    let randBtn= document.querySelector(`.${randColor} `);
    gameSeq.push(randColor);
    console.log(gameSeq);
    
    //console.log(randIdx);
    //console.log(randColor);
    //console.log(randBtn);
    gameFlash(randBtn);


}


function checkAns(idx) {

    if (userSeq[idx]===gameSeq[idx]){
     if (userFlash.Seq.length == gameSeq.length){
        setTimeout(levelUp, 1000);
     }
    } else{
        h2.innerHTML=`Game Over! Your score was<b> ${level}</b>  <br>Press any key to start.`;
        document.querySelector("body").style.backgroundcolor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundcolor="white";
        }, 150);
        reset();

  
    }
}
function btnPress() {
 let btn= this;
 userFlash(btn);

 userColor = btn.getAttribute("id");
 userSeq.push(userColor);

 checkAns(userSeq.length-1);
}

let allbtn=document.querySelectorAll(".btn")
for  ( btn of allbtn) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started =false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
