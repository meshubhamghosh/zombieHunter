let timer=20;
let kills=0;
let bullets=0;
const gamePlayScreenele = document.querySelector(".gameplay-screen");
const zombieBtnele = document.querySelector(".zombie-btn");
const zomBtnele = document.querySelector(".zom-btn");
const timerele = document.querySelector(".time-no");
const killele = document.querySelector(".kills-no");
const bulletele = document.querySelector(".bull-no");
const gameOver = document.querySelector(".pag-div");
const overBtnele = document.querySelector(".pag");


zombieBtnele.src="images/zombie-obj.png";

//gamePlayScreenele.addEventListener("mouseover",()=>{gamePlayScreenele.style.cursor=`url('images/target.png'),auto`;})
//zomBtnele.addEventListener("mouseover",()=>{gamePlayScreenele.style.cursor=`url('images/target.png'),auto`;})
//zombieBtnele.addEventListener("mouseover",()=>{gamePlayScreenele.style.cursor=`url('images/target.png'),auto`;})

// const gameOver = document.createElement('div');


function photoLoc(){
    let w = window.innerWidth;
    console.log(w);
    let x= Math.round(Math.random()*(w-100));
    let y= Math.round(Math.random()*450);
    console.log(x,y);
    if(timer>0){
      zomBtnele.style.display=`flex`;
    }else{
      gameOver.style.display="flex";
      gameOver.style.justifyContent="center";
      zomBtnele.style.display=`none`;

    }
    zombieBtnele.style.height=`${Math.round(Math.random()*(80-30)+30)}px`;
    zomBtnele.style.paddingTop=`${y}px`;
    zomBtnele.style.paddingLeft=`${x}px`;
    timerele.innerHTML=`${timer}`;
    killele.innerHTML=`${kills}`
    bulletele.innerHTML=`${bullets}`
    timer-=1;
}

for (let i= 0; i <= timer; i++) {
    setTimeout(photoLoc, i*1000);

  }
  zombieBtnele.addEventListener("mousedown",()=>{
    zomBtnele.style.display="none";
    kills++;
    console.log(kills);
    killele.innerHTML=`${kills}`;
    
});

gamePlayScreenele.addEventListener("mousedown",()=>{
  if(timer>0){
  bullets++;
  }
  bulletele.innerHTML=`${bullets}`;
});


overBtnele.addEventListener("click",()=>{
              window.location.reload();
            });
            
