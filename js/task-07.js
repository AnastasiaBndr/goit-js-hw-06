const rangeInput = document.getElementById("font-size-control");
const text = document.getElementById("text");

text.style.fontSize=`${rangeInput.value}px`;

rangeInput.addEventListener("input", onRange);

function onRange(evt){
   
    text.style.fontSize=`${rangeInput.value}px`;
}