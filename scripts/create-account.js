
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
    const usernameIsValid = usernameValidation(usernameElement)


    formValidation(usernameIsValid,emailIsValid, passwordIsValid, passwordIsConfirm);

    console.log(usernameIsValid, 'username validation');
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

    if ( passwordElement === checkPasswordElement){
        validationstyle( 'confirm-password', 'js-password-confirm-message', ``, `check`)
        return true;
    }
    else if(passwordElement !== checkPasswordElement){
        validationstyle( 'confirm-password', 'js-password-confirm-message', `password do not match`, `exclamation`)
        
        return false;
    }
};
function usernameValidation(username){
    if(username === ''){
        validationstyle('create-username', 'js-username-message', 'please enter a valid username', `exclamation`);
        return false;
    }
    else{
        validationstyle('create-username', 'js-username-message', '', `check`);
        return true;
    }
    

}
// function to check if the form is valid = all of the conditions valid 
function formValidation(usernameIsValid ,emailIsValid, passwordIsValid, passwordIsConfirm){

    if(usernameIsValid && emailIsValid && passwordIsValid && passwordIsConfirm){
        
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

    element.classList.remove('.invalid');

    element.classList.add(`invalid`);

    let iconName = document.querySelector(`.icons.${inputClassName}`)
    iconName.innerHTML = `<img src="assets/icons/${validationIcon}.png" class="icon">`
    
};
// 
document.querySelector('.show-hide-icon').addEventListener('click', () => {
    const showHideImg = document.querySelector('.confirm-password');
    if(showHideImg.type === 'password'){
        showHideImg.type = 'text';
        document.querySelector('.show-hide-icon').src = 'assets/icons/hide-eye.png'
    }else {
    showHideImg.type = 'password';
        document.querySelector('.show-hide-icon').src = 'assets/icons/eye.png'

    }
})