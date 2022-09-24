export { LogForm };
class LogForm {
    constructor(login, password) {
        this.password = password;
        this.login = login;
    }

    makeForm() {

        //form
        const my_form = document.createElement('form');
        const fs = my_form.style;
        my_form.className = 'log-form';


        fs.width = '250px';
        fs.height = '150px';
        fs.position = 'absolute';
        fs.margin = "-20px 0px -30px -200px";
        fs.border = "double 4px black";
        fs.borderRadius = '4px';
        fs.borderRadius = '4px';
        fs.backgroundColor = 'grey';
        fs.boxShadow = '0 0 10px black';
        fs.userSelect = 'false';
        document.querySelector('.div-logInOut').appendChild(my_form);
        





        //close button
        const exitBtn = document.createElement('button');
        exitBtn.className = 'closeBtn';
        exitBtn.innerHTML = 'X';
        const es = exitBtn.style;
        es.fontSize = '10px';
        es.width = '20px';
        es.height = '20px';
        es.position = "reletive";
        es.margin = '5px 0px 0px 220px';
        es.backgroundColor = "black";
        es.color = "white";
        es.boxShadow = '0 0 3px red';
        es.outline = '1px solid white';
        es.borderRadius = '3px';
        es.transitionDuration = '0.3s';
        my_form.append(exitBtn);
        es.cursor = 'pointer';
        console.log('making this form');

        const closeBtn = document.querySelector('.closeBtn');
        // closeBtn.addEventListener('click', () => {
        //     const element = document.querySelector('.div-logInOut form');
        //     form.style.transitionDuration = '15s';
        //     form.style.opacity = '.1';
        //     element.remove();
        // })

       
        closeBtn.addEventListener('mouseover', () => {


            es.fontSize = '12px';
            es.color = 'red';
            es.boxShadow = '0 0 8px red';
        })

        closeBtn.addEventListener('mouseout', () => {


            es.fontSize = '10px';
            es.color = 'white';
            es.boxShadow = '0 0 3px red';
        })

        //input LOGIN field
        const loginField = document.createElement('input');
        loginField.className = 'loginField';
        loginField.type = "text";
        const ls = loginField.style;
        loginField.style.backgroundColor = 'lightgrey';
        // loginField.style.
        ls.width = "200px";
        ls.height = "30px";
        ls.margin = "5px 20px 0px";
        ls.fontSize = '20px';
        
        loginField.maxLength = '10';
        loginField.placeholder = '--Login--'

        loginField.addEventListener('mouseover', ()=>{
            loginField.focus();
        })
        // loginField.addEventListener('mouseover', ()=>{
        //     if(loginField.value.length > 5){
        //         alert('max5');
        //         loginField.innerHTML = loginField.innerHTML.slice(0, 5); 
        //         alert('max5');
        //     }
        //     loginField.focus();
        // })



        my_form.append(loginField);

        //input PASSWORD field
        const passwordField = loginField.cloneNode();
        passwordField.placeholder= '-Password-';
        const ps = passwordField.style;
        passwordField.type = 'password';

        passwordField.addEventListener('mouseover', ()=>{
            passwordField.focus();
        })

        my_form.append(passwordField);




    }



}