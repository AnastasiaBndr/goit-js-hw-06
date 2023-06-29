const ourForm = document.querySelector(".login-form");

ourForm.addEventListener('submit', onSubmit);

function onSubmit(evt){
    evt.preventDefault();

    const {email, password} = evt.currentTarget.elements;
    if(email.value=="" || password.value==""){
        alert("ЗАПОВНИ ВСІ ПОЛЯ");
    }else {
        console.log(`Email: ${email.value} Password: ${password.value}`);
        ourForm.reset();
    }

    

 }
