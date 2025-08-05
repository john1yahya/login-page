
// import {users} from "../scripts/create-account.js";
const users = JSON.parse(localStorage.getItem('users'))
// first step we added event listener

    function stylingValidation(result){
        let iconName ;
        let validation ;
        if (result){
            validation = 'valid';
            iconName = 'check'; 
            
        }else if(!result){
            validation = 'notValid';
            iconName = 'exclamation';
        }
        email.classList.add(`${validation}`);
        password.classList.add(`${validation}`);

        document.querySelectorAll('.icons').forEach((icon) => {
            icon.innerHTML = `<img src="assets/icons/${iconName}.png" class="icon">`;
        });
        setTimeout(() => {
            email.classList.remove(`${validation}`);
            password.classList.remove(`${validation}`);
            document.querySelectorAll('.icons').forEach((icon) => {
            icon.innerHTML = '';
            });
        }, 3000)
            
    };
    
    function refrechInput(){
        email.value = '';
        password.value = '';
    }


const email = document.querySelector('.login-email');

const password = document.querySelector('.login-password');

document.querySelector('.signInButton')
    .addEventListener('click', (event) => {
        event.preventDefault();
        let emailElement = email.value;
        let passwordElement = password.value;

        if (passwordElement === '' || emailElement === ''){
            stylingValidation(false)
            return;
        }

        let result = users.find((user) => {
            return user.email === emailElement && user.password === passwordElement;
        })

        stylingValidation(result);
        setTimeout(() => {
            refrechInput();
        }, 3000);
    });

 console.log(users);

    // show and hide password
document.querySelector('.show-hide-icon').addEventListener('click', () => {
    showHidePass('login-password');
});

export function showHidePass(className){
    const showHideImg = document.querySelector(`.${className}`);
    if(showHideImg.type === 'password'){
        showHideImg.type = 'text';
        document.querySelector('.show-hide-icon').src = 'assets/icons/hide-eye.png'
    }else {
    showHideImg.type = 'password';
        document.querySelector('.show-hide-icon').src = 'assets/icons/eye.png'
    }
}