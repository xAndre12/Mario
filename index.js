let start = document.querySelector(".start");
let background = document.querySelector("main");
let body = document.querySelector("body");
let penguin= document.querySelector(".pinguin")
let spike1= document.querySelector(".spike1")
let spike2= document.querySelector(".spike2")
let spike3= document.querySelector(".spike3")
let pengu = document.querySelector(".pengu")
let Dawg = document.querySelector(".Dawg")
let life= document.querySelector(".life")
let hearth=document.querySelector(".life1")
let hearth1=document.querySelector(".hearth1")
let hearth2=document.querySelector(".hearth2")
let hearth3=document.querySelector(".hearth3")
let retry=document.querySelector(".retry")
let textdead = document.querySelector(".buttondead")
let winnumber = document.querySelector(".winnumber")
let wins = document.querySelector(".wins")
let winshow= document.querySelector(".winshow")
let GG= document.querySelector(".WOW")
let lifenumber="3";
let dead=false;

penguin.style.left = "1px";
penguin.style.top   = "700px";
penguin.style.bottom = "0px";
penguin.style.right= "0px";
start.addEventListener("click",() => {
    start.style.visibility="hidden";
    body.style.backgroundImage = "url('./img/a.jpg')"
    body.style.backgroundColor = "transparent";
    penguin.style.visibility = "visible"
    spike1.style.visibility="visible"
    spike2.style.visibility="visible"
    spike3.style.visibility="visible"
    life.style.visibility="visible"
    hearth.style.visibility="visible"
    life.style.visibility="visible";
    hearth1.style.visibility="visisble";
    hearth2.style.visibility="visible";
    hearth3.style.visibility="visible";
    winnumber.style.visibility="visible";
    winshow.style.visibility="visible";
})
retry.addEventListener("click",() => {
    retry.style.visibility="hidden";
    body.style.backgroundImage = "url('./img/a.jpg')"
    body.style.backgroundColor = "transparent";
    penguin.style.visibility = "visible"
    spike1.style.visibility="visible"
    spike2.style.visibility="visible"
    spike3.style.visibility="visible"
    life.style.visibility="visible"
    hearth.style.visibility="visible"
    textdead.style.visibility="hidden"
    hearth1.style.visibility="visible";
    hearth2.style.visibility="visible";
    hearth3.style.visibility="visible";
    pengu.style.visibility="visible";
    life.style.visibility="visible";
    lifenumber="3";
    penguin.style.left = "1px";
    penguin.style.top   = "700px";
    penguin.style.bottom = "0px";
    penguin.style.right= "0px";
    winnumber.style.visibility="visible";
    winshow.style.visibility="visible";
    wins.textContent= 0;
})
GG.addEventListener("click",() => {
    retry.style.visibility="hidden";
    body.style.backgroundImage = "url('./img/a.jpg')"
    body.style.backgroundColor = "transparent";
    penguin.style.visibility = "visible"
    spike1.style.visibility="visible"
    spike2.style.visibility="visible"
    spike3.style.visibility="visible"
    life.style.visibility="visible"
    hearth.style.visibility="visible"
    textdead.style.visibility="hidden"
    hearth1.style.visibility="visible";
    hearth2.style.visibility="visible";
    hearth3.style.visibility="visible";
    pengu.style.visibility="visible";
    life.style.visibility="visible";
    lifenumber="3";
    penguin.style.left = "1px";
    penguin.style.top   = "700px";
    penguin.style.bottom = "0px";
    penguin.style.right= "0px";
    winnumber.style.visibility="visible";
    winshow.style.visibility="visible";
    wins.textContent= 0;
    GG.style.visibility="hidden";
})
let push = true;
let position = 0;
window.addEventListener("keydown", (event)=>{
    position = 0;
   if(event.key === "w" || event.key === "W"){
    penguin.style.top = parseInt(penguin.style.top) -50 + 'px';
   }

   if(push && event.key === "s" || event.key === "S"){
        if(lifenumber===0){
            dead=true;
        }
      if((parseInt(penguin.style.left) >= 251 && parseInt(penguin.style.left) <= 501)){
        lifenumber --;
        if(lifenumber===2){
            hearth3.style.visibility="hidden";
        }
        if(lifenumber===1){
            hearth3.style.visibility="hidden";
            hearth2.style.visibility="hidden";
        }
        if(lifenumber===0){
            hearth3.style.visibility="hidden";
            hearth2.style.visibility="hidden";
            hearth1.style.visibility="hidden";
            retry.style.visibility= "visible";
            textdead.style.visibility="visible";
            spike1.style.visibility="hidden";
            spike2.style.visibility="hidden";
            spike3.style.visibility="hidden";
            pengu.style.visibility="hidden";
            life.style.visibility="hidden";
            body.style.backgroundColor="black";
            winnumber.style.visibility="hidden";
            winshow.style.visibility="hidden";
        }
        penguin.style.top="700px";
        penguin.style.left="20px";
      } 
      if((parseInt(penguin.style.left) >= 820 && parseInt(penguin.style.left) <= 1051)){
        lifenumber --;
        if(lifenumber===2){
            hearth3.style.visibility="hidden";
        }
        if(lifenumber===1){
            hearth3.style.visibility="hidden";
            hearth2.style.visibility="hidden";
        }
        if(lifenumber===0){
            hearth3.style.visibility="hidden";
            hearth2.style.visibility="hidden";
            hearth1.style.visibility="hidden";
            retry.style.visibility= "visible";
            textdead.style.visibility="visible";
            spike1.style.visibility="hidden";
            spike2.style.visibility="hidden";
            spike3.style.visibility="hidden";
            pengu.style.visibility="hidden";
            life.style.visibility="hidden";
            body.style.backgroundColor="black";
            body.style.backgroundImage = "url()";
            winnumber.style.visibility="hidden";
            winshow.style.visibility="hidden";
        }
        penguin.style.top="700px";
        penguin.style.left="20px";
      }
      if((parseInt(penguin.style.left) >= 1320 && parseInt(penguin.style.left) <= 1520)){
        lifenumber --;
        if(lifenumber===2){
            hearth3.style.visibility="hidden";
        }
        if(lifenumber===1){
            hearth3.style.visibility="hidden";
            hearth2.style.visibility="hidden";
        }
        if(lifenumber===0){
            hearth3.style.visibility="hidden";
            hearth2.style.visibility="hidden";
            hearth1.style.visibility="hidden";
            retry.style.visibility= "visible";
            textdead.style.visibility="visible";
            spike1.style.visibility="hidden";
            spike2.style.visibility="hidden";
            spike3.style.visibility="hidden";
            pengu.style.visibility="hidden";
            life.style.visibility="hidden";
            body.style.backgroundColor="black";
            body.style.backgroundImage = "url()";
            winnumber.style.visibility="hidden";
            winshow.style.visibility="hidden";
        }
        penguin.style.top="700px";
        penguin.style.left="20px";
      }                      
      penguin.style.top = parseInt(penguin.style.top) + 150 + 'px';
      pengu.style.height = "60px";
      push = false;
      setTimeout(()=>{
        pengu.style.height= "200px";
        penguin.style.top = parseInt(penguin.style.top) - 150 + 'px';
        penguin.style.top = "700px";
        push=true;
      }, 1000)
   }
   if(event.key === "a" || event.key === "A"){
    penguin.style.left = parseInt(penguin.style.left) - 50 + 'px';
    if(lifenumber===0){
        dead=true
    }
    if(parseInt(penguin.style.left) < -160){
        Dawg.style.visibility="visible"
    }

    if((parseInt(penguin.style.left) >= 251 && parseInt(penguin.style.left) <= 501) 
        && 
        (parseInt(penguin.style.top)>=600&& parseInt(penguin.style.top)<= 700) ){
        lifenumber --;
        if(lifenumber===2){
            hearth3.style.visibility="hidden";
        }
        if(lifenumber===1){
            hearth3.style.visibility="hidden";
            hearth2.style.visibility="hidden";
        }
        if(lifenumber===0){
            hearth3.style.visibility="hidden";
            hearth2.style.visibility="hidden";
            hearth1.style.visibility="hidden";
            retry.style.visibility= "visible";
            textdead.style.visibility="visible";
            spike1.style.visibility="hidden";
            spike2.style.visibility="hidden";
            spike3.style.visibility="hidden";
            pengu.style.visibility="hidden";
            life.style.visibility="hidden";
            body.style.backgroundColor="black";
            body.style.backgroundImage = "url()";
            winnumber.style.visibility="hidden";
            winshow.style.visibility="hidden";
        }
        penguin.style.top="700px";
        penguin.style.left="20px";

    }
    if((parseInt(penguin.style.left) >= 820 && parseInt(penguin.style.left) <= 1051) 
        && 
        (parseInt(penguin.style.top)>=600&& parseInt(penguin.style.top)<= 700) ){
        lifenumber --;
        if(lifenumber===2){
            hearth3.style.visibility="hidden";
        }
        if(lifenumber===1){
            hearth3.style.visibility="hidden";
            hearth2.style.visibility="hidden";
        }
        if(lifenumber===0){
            hearth3.style.visibility="hidden";
            hearth2.style.visibility="hidden";
            hearth1.style.visibility="hidden";
            retry.style.visibility= "visible";
            textdead.style.visibility="visible";
            spike1.style.visibility="hidden";
            spike2.style.visibility="hidden";
            spike3.style.visibility="hidden";
            pengu.style.visibility="hidden";
            life.style.visibility="hidden";
            body.style.backgroundColor="black";
            body.style.backgroundImage = "url()";
            winnumber.style.visibility="hidden";
            winshow.style.visibility="hidden";
        }
        penguin.style.top="700px";
        penguin.style.left="20px";
    }
    if((parseInt(penguin.style.left) >= 1320 && parseInt(penguin.style.left) <= 1520) 
    && 
    (parseInt(penguin.style.top)>=600&& parseInt(penguin.style.top)<= 700) ){
        lifenumber --;
        if(lifenumber===2){
            hearth3.style.visibility="hidden";
        }
        if(lifenumber===1){
            hearth3.style.visibility="hidden";
            hearth2.style.visibility="hidden";
        }
        if(lifenumber===0){
            hearth3.style.visibility="hidden";
            hearth2.style.visibility="hidden";
            hearth1.style.visibility="hidden";
            retry.style.visibility= "visible";
            textdead.style.visibility="visible";
            spike1.style.visibility="hidden";
            spike2.style.visibility="hidden";
            spike3.style.visibility="hidden";
            pengu.style.visibility="hidden";
            life.style.visibility="hidden";
            body.style.backgroundColor="black";
            body.style.backgroundImage = "url()";
            winnumber.style.visibility="hidden";
            winshow.style.visibility="hidden";
        }
    penguin.style.top="700px";
    penguin.style.left="20px";
    
}
   }
   console.log(+wins.textContent)
   if(event.key === "d" || event.key ==="D"){
    penguin.style.left = parseInt(penguin.style.left) + 50 + 'px';
    if(parseInt(penguin.style.left) > 50){
        Dawg.style.visibility="hidden"
    }
    if(parseInt(penguin.style.left)>1750){
        wins.textContent = +wins.textContent + 1 ;
        penguin.style.top="700px";
        penguin.style.left="20px";
        if(wins.textContent>=2){
            hearth3.style.visibility="hidden";
            hearth2.style.visibility="hidden";
            hearth1.style.visibility="hidden";
            GG.style.visibility= "visible";
            textdead.style.visibility="hidden";
            spike1.style.visibility="hidden";
            spike2.style.visibility="hidden";
            spike3.style.visibility="hidden";
            pengu.style.visibility="hidden";
            life.style.visibility="hidden";
            body.style.backgroundColor="black";
            body.style.backgroundImage = "url()";
            winnumber.style.visibility="hidden";
            winshow.style.visibility="hidden";
        }
    }
    if((parseInt(penguin.style.left) >= 251 && parseInt(penguin.style.left) <= 501) 
        && 
        (parseInt(penguin.style.top)>=600&& parseInt(penguin.style.top)<= 700) ){
           lifenumber --;
           if(lifenumber===2){
            hearth3.style.visibility="hidden";
        }
        if(lifenumber===1){
            hearth3.style.visibility="hidden";
            hearth2.style.visibility="hidden";
        }
        if(lifenumber===0){
            hearth3.style.visibility="hidden";
            hearth2.style.visibility="hidden";
            hearth1.style.visibility="hidden";
            retry.style.visibility= "visible";
            textdead.style.visibility="visible";
            spike1.style.visibility="hidden";
            spike2.style.visibility="hidden";
            spike3.style.visibility="hidden";
            pengu.style.visibility="hidden";
            life.style.visibility="hidden";
            body.style.backgroundColor="black";
            body.style.backgroundImage = "url()";
            winnumber.style.visibility="hidden";
            winshow.style.visibility="hidden";
        }
           penguin.style.top="700px";
           penguin.style.left="20px";
    }
   }
   if((parseInt(penguin.style.left) >= 820 && parseInt(penguin.style.left) <= 1051)  && 
        (parseInt(penguin.style.top)>=600&& parseInt(penguin.style.top)<= 700) ){
            lifenumber --;
            if(lifenumber===2){
                hearth3.style.visibility="hidden";
            }
            if(lifenumber===1){
                hearth3.style.visibility="hidden";
                hearth2.style.visibility="hidden";
            }
            if(lifenumber===0){
                hearth3.style.visibility="hidden";
                hearth2.style.visibility="hidden";
                hearth1.style.visibility="hidden";
                retry.style.visibility= "visible";
                textdead.style.visibility="visible";
                pengu.style.visibility="hidden";
                spike1.style.visibility="hidden";
            spike2.style.visibility="hidden";
            spike3.style.visibility="hidden";
            life.style.visibility="hidden";
            body.style.backgroundColor="black";
            body.style.backgroundImage = "url()";
            winnumber.style.visibility="hidden";
            winshow.style.visibility="hidden";
            }
        penguin.style.top="700px";
        penguin.style.left="20px";
     
    }
    if((parseInt(penguin.style.left) >= 1320 && parseInt(penguin.style.left) <= 1520) 
    && 
    (parseInt(penguin.style.top)>=600&& parseInt(penguin.style.top)<= 700) ){
        lifenumber --;
        if(lifenumber===2){
            hearth3.style.visibility="hidden";
        }
        if(lifenumber===1){
            hearth3.style.visibility="hidden";
            hearth2.style.visibility="hidden";
        }
        if(lifenumber===0){
            hearth3.style.visibility="hidden";
            hearth2.style.visibility="hidden";
            hearth1.style.visibility="hidden";
            retry.style.visibility= "visible";
            textdead.style.visibility="visible";
            pengu.style.visibility="hidden";
            spike1.style.visibility="hidden";
            spike2.style.visibility="hidden";
            spike3.style.visibility="hidden";
            life.style.visibility="hidden";
            body.style.backgroundColor="black";
            body.style.backgroundImage = "url()";
            winnumber.style.visibility="hidden";
            winshow.style.visibility="hidden";
        }
    penguin.style.top="700px";
    penguin.style.left="20px";
 
}
})
