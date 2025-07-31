import {users} from "../data/accounts.js";

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
            
        console.log('valid');
    };
    
    function refrechInput(email, password){
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


        let result = users.find((user) => {
            return user.email === emailElement && user.password === passwordElement;
        })

        stylingValidation(result);
        setTimeout(() => {
            refrechInput(email, password)
        }, 3000);
    });

 
