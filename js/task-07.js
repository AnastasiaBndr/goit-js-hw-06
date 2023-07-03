const rangeInput = document.getElementById("font-size-control");
const text = document.getElementById("text");

onRange();

rangeInput.addEventListener("input", onRange);

function onRange(){
   
    text.style.fontSize=`${rangeInput.value}px`;
}