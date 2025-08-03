// import { users } from "
import {refrechInput} from "./log-in.js";

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

    
    emailValidation(emailElement);
    passwordVlaidation(passwordElement);
    passwordConfirmation(passwordElement, checkPasswordElement);

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



function emailValidation(email)
{

    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
    let result = regex.test(email);
    if (!result){
        console.log('email is not valid');
        return false;
    }
    else if(result){
        console.log('email is valid');
        return true;
    }   

}
 function passwordVlaidation(password){
    let regex = /\s/;
    let result = regex.test(password);

    if(!result){

        if(password.length > 6){
        console.log('password is valid !!!');
        return true;
        }
    }else{
        if(result){
            if(password.length < 6){
                return false;
            }
        }
    };
};

 function passwordConfirmation(passwordElement, checkPasswordElement){
    if (passwordElement === checkPasswordElement){
        console.log('password lwl w tnai bhal bhal asat nadi ');
        return true
    }
    else if(passwordElement !== checkPasswordElement){
        console.log('pleas hdrna m3ak dkhl password lwl w tani bhal bhal');
        return false
    }
} ;

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
