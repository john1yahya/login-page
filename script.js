/* we have to check if the email form  */


import {users} from './users.js';

function matchUser(password, email){
    let result = users.find((user) => {
        return user.email === email && user.password === password;
    });

    return result;
};

function checkResult(result, output,email,password){
    if (result){
        output.innerHTML = 'Correct';
        document.querySelector('.output').style.background = 'rgb(30, 190, 62)';

        setTimeout(() => {
            output.style.background = 'rgb(255, 0, 0, 0)';
             output.innerHTML = 'Output';

        }, 1000);

    }else {
        output.innerHTML = 'Wrong';
        document.querySelector('.output').style.background = 'rgb(247, 72, 72)';
        
        setTimeout(() => {
            output.style.background = 'rgb(255, 0, 0, 0)';
            output.innerHTML = 'Output';
        }, 1000);
    }
    //  kkhass n3mr procedures l had condition
    if (password == '' || email == ''){
            console.log('enter email and password');
            }
};

function refreshInput(emailElement, passwordElement){
    emailElement.value = '';
    passwordElement.value = '';
};

function signin(){

    const emailElement = document.querySelector('.first-name-input');
    let email = emailElement.value;

    const passwordElement = document.querySelector('.last-name-input');
    let password = passwordElement.value;

    const output = document.querySelector('.output');
    const result = matchUser(password, email);

    checkResult(result, output, password, email);
    
    refreshInput(emailElement, passwordElement);
    
};

document.querySelector('.add').addEventListener('click', () => signin());

document.querySelectorAll('.js-enter').forEach((input) => {
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter'){
            signin();
        }
    });
});


const creatButton = document.querySelector('.creat-acc2');

const email2 = document.querySelector('.first-name-input2')
let emailElement2 = email2.value;

const password2 = document.querySelector('.last-name-input2');
let passwordElement2 = password2.value;


creatButton.addEventListener('click', () =>
    {
        let pass = password2.value.trim();//trim() function to remove the exra spaces at the begining and at te end 
        let em = email2.value.trim();

    if (pass === '' || em === ''){

        console.log('enter email and password');
        console.log(users);

    } else if (/\s/.test(pass) || /\s /.test(em) ){
        console.log('there is space ');
        alert('hid espace')
    }
      else{
        users.push({
        email:email2.value,
        password: password2.value
        });
        console.log(users);
    }
    refreshInput(email2, password2); 
     
});

const cancel = document.querySelector('.cancel');
cancel.addEventListener('click', () => {
    document.querySelector('.cr').style.display = 'none'

})
const create = document.querySelector('.creat-acc');

create.addEventListener('click', () => {
    document.querySelector('.cr').style.display = 'flex';    

})
