const nameOutput = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");

nameInput.addEventListener('input', onInput)

function onInput(){
    
    const value = nameInput.value;
    if(value!=""){
    nameOutput.textContent="";
    nameOutput.textContent+=value;
    }else nameOutput.textContent="Anonymos";
}