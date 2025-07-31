import { users } from "../data/accounts.js";


 const username = document.querySelector('.create-username');
 
 const email = document.querySelector('.create-email');

 const password = document.querySelector('.create-password');

 const confirmPassword = document.querySelector('.confirm-password');



 document.querySelector('.signInButton').addEventListener('click', () => {
    let usernameElement = username.value;
    let emailElement = email.value;
    let passwordElement = password.value;
    let confirmPasswordElement = confirmPassword.value;


 });