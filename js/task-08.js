const ourForm = document.querySelector(".login-form");

ourForm.addEventListener('submit', onSubmit);

function onSubmit(evt){
    evt.preventDefault();

    const {email, password} = evt.currentTarget.elements;
    if(email.value=="" || password.value==""){
        alert("ЗАПОВНИ ВСІ ПОЛЯ");
    }else {
        const userInfo={userEmail: email.value, userPassword:password.value};
        console.log(`Email: ${userInfo.userEmail} Password: ${userInfo.userPassword}`);
        ourForm.reset();
    }

    

 }
