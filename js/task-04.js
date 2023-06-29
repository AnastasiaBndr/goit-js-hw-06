const counterHTML = document.getElementById("value");
let counterValue=0;

const buttonInc=document.querySelector('button[data-action="increment"]');
const buttonDec=document.querySelector('button[data-action="decrement"]');

buttonInc.addEventListener("click", onClickInc);
buttonDec.addEventListener("click", onClickDec);

function onClickInc(){
    counterValue+=1;
    counterHTML.textContent=counterValue;
}

function onClickDec(){
   counterValue-=1;
    counterHTML.textContent=counterValue;
}

