let userinput=[];
let gameoutput=[];
 let lvl=0;
 let started=false;
 let para=document.querySelector('p');
 let btncolor=["palevioletred","orange","lightseagreen","skyblue"];
 document.addEventListener("keypress", function(){
   if(started==false){
      started=true;
      console.log("game started");
      lvlup();
   }
 });
 function gameflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
       btn.classList.remove("flash");
   },50);
 }
 function userflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
       btn.classList.remove("flash");
   },50);
 }
 function lvlup(){
   userinput=[];
   lvl++;
   para.innerText=`Level ${lvl}`;
   let randIdx=Math.floor(Math.random()*4);
  let randclr=btncolor[randIdx];
  let flashclr=document.querySelector(`.${randclr}`);
  gameoutput.push(randclr);
  console.log(gameoutput);
  
  gameflash(flashclr);
 }
 function checkSeq(idx){
   
   if(userinput[idx]=== gameoutput[idx]){
      if(userinput.length==gameoutput.length){
      setTimeout(lvlup,500);
       
      }
   }else{
       para.innerHTML=`GAME OVER! Your high score is <b>${lvl}</b> <br/>press any key to start!`;
      document.querySelector('body').classList.add('red');
      setTimeout(function(){
         document.querySelector('body').classList.remove('red');
      },100);
      reset();
      
   }
 }
 

 function btnpress(){
   let btn=this;
   userflash(btn);

   let storeinput=btn.getAttribute('id');
   userinput.push(storeinput);

 
    checkSeq(userinput.length-1);
  
  
 }
 let accessbtn=document.querySelectorAll(".btn");
 for(btnss of accessbtn){
  btnss.addEventListener("click", btnpress);

 }

function reset(){ 
 started=false;
 lvl=0;
 gameoutput=[];
 document.addEventListener("keypress", function(){
   if(started==false){
      started=true;
      console.log("game started");
      lvlup();
   }
 });
 

}



 
