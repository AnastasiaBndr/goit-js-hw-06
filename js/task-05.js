const nameOutput = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");

nameInput.addEventListener('input', onInput)

function onInput(){
    
    const value = nameInput.value+"";

    const trimmed = value.trim();
    if(trimmed!=""){
    nameOutput.textContent="";
    nameOutput.textContent+=trimmed;
    }else nameOutput.textContent="Anonymos";
}