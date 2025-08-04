
export let users = [];

 const username = document.querySelector('.create-username');
 const email = document.querySelector('.create-email');
 const password = document.querySelector('.create-password');
 const checkPassword = document.querySelector('.confirm-password');



 document.querySelector('.signInButton').addEventListener('click', (event) => {
    event.preventDefault();

    let usernameElement = username.value;
    let emailElement = email.value;
    let passwordElement = password.value;
    let checkPasswordElement = checkPassword.value;

    console.log('passwordElement:', passwordElement);
    console.log('checkPasswordElement:', checkPasswordElement);


    const emailIsValid = emailValidation(emailElement);
    const passwordIsValid = passwordVlaidation(passwordElement);
    const passwordIsConfirm = passwordConfirmation(passwordElement, checkPasswordElement);


    formValidation(emailIsValid, passwordIsValid, passwordIsConfirm);


    console.log(emailIsValid, 'email validation');
    console.log(passwordIsValid,'password condition');
    console.log(passwordIsConfirm,'confirmation');


    
    localStorage.setItem('users',JSON.stringify(users));
    console.log(users);
 });
 function validUsername(username){
    usernameElement = username.value;
    if(username === ''){
        return false
    }else{
        return true;
    }
 }



// function to check if the email is valid 
export function emailValidation(email){

    const regex = /^(?!\.)(?!.*\.@)(?!.*@.*@)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?!-)[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/ ;
    let result = regex.test(email);
    if (!result){
        validationstyle('create-email', 'js-email-message', 'invalid email', 'exclamation')
            return false;
    }
    else if(result){
        validationstyle('create-email', 'js-email-message', '' , 'check')
        return true;
    };
}
// function to chceck if the password is valid 
 function passwordVlaidation(password){

    const regex = /\s/;
    const result = regex.test(password);
    if (password === '') {
        validationstyle('create-password','js-password-message','Enter a password pleas','exclamation')
        return false;
    }
    else
    if (result){
        return false;
    }else 
        if(password.length < 6){
            validationstyle('create-password','js-password-message',`Enter more than 6 digits`,'exclamation');
            return false;
    }
    else {
        validationstyle('create-password','js-password-message',``,'check');

        return true}
    
};
// function to check if the password confirm
 function passwordConfirmation(passwordElement, checkPasswordElement){

    let passwordConfirmValidationMessage = document.querySelector('.js-password-confirm-message');

    if ( passwordElement === checkPasswordElement){
        console.log('password lwl w tnai bhal bhal asat nadi ');
        passwordConfirmValidationMessage.innerHTML = 'Passwords do not match. Please try again';
         validationstyle( 'confirm-password', 'js-password-confirm-message', ``, `check`)
        return true;
    }
    else if(passwordElement !== checkPasswordElement){
        console.log('Passwords do not match. Please try again');
        passwordConfirmValidationMessage.innerHTML = 'Passwords do not match. Please try again';
        validationstyle( 'confirm-password', 'js-password-confirm-message', `password do not match`, `exclamation`)
        
        return false;
    }
} ;
// function to check if the form is valid = all of the conditions valid 
function formValidation(emailIsValid, passwordIsValid, passwordIsConfirm){

    if(emailIsValid && passwordIsValid && passwordIsConfirm){
        
        users.push(
        {
            username:username.value,
            email: email.value,
            password: password.value
        });
        console.log('form is valid');
    }
    else{
        console.log('form is not valid');
    }
};

function validationstyle( inputClassName, messageClassName, errorMessage, validationIcon){


    const element = document.querySelector(`.${messageClassName}`);
    element.innerHTML = `${errorMessage}`;

    element.classList.add(`invalid`);

    let iconName = document.querySelector(`.icons.${inputClassName}`)
    iconName.innerHTML = `<img src="assets/icons/${validationIcon}.png" class="icon">`
    
}