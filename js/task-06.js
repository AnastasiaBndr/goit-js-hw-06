const textInput = document.getElementById("validation-input");

textInput.addEventListener("blur", onClick);

function onClick(evt){
    
     const input = evt.currentTarget;
     input.classList.remove("invalid");
     input.classList.remove("valid");

     const trimmed = input.value.trim().length;

    if(trimmed!=input.dataset.length)
        input.classList.add("invalid");
    else input.classList.add("valid");

}