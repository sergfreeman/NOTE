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
        fs.border = "double 3px black";
        fs.borderRadius = '10px';
        // fs.borderRadius = '4px';
        fs.backgroundColor = 'grey';
        fs.boxShadow = '0 0 10px black';
        fs.userSelect = 'false';
        document.querySelector('.div-logInOut').appendChild(my_form);




        // FORM clothing
        function formClothing(){
            const element = document.querySelector('.div-logInOut form');
            my_form.style.transitionDuration = '1s';
            my_form.style.opacity = 0;

            setTimeout(() => {
                element.remove();
            }, 1000)
        }

        //CLOSE button
        const exitBtn = document.createElement('button');
        exitBtn.className = 'closeBtn';
        exitBtn.innerHTML = 'X';
        exitBtn.type = "button";
        const es = exitBtn.style;
        es.fontSize = '10px';
        es.width = '15px';
        es.height = '15px';
        es.position = "abolute";
        es.margin = '5px 222px';
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
        closeBtn.addEventListener('click', () => {
            // const element = document.querySelector('.div-logInOut form');
            // my_form.style.transitionDuration = '1s';
            // my_form.style.opacity = 0;

            // setTimeout(() => {
            //     element.remove();
            // }, 1000)

            formClothing();
        })


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
        loginField.style.position = "abolute";
        ls.width = "200px";
        ls.height = "30px";
        ls.margin = "10px 0px 0px 20px";
        ls.fontSize = '20px';

        loginField.maxLength = '10';
        loginField.placeholder = '--Login--';

        loginField.addEventListener('mouseover', () => {
            loginField.focus();
        })

        my_form.append(loginField);

        //input PASSWORD field
        const passwordField = loginField.cloneNode();
        passwordField.placeholder = '-Password-';
        const ps = passwordField.style;
        passwordField.type = 'password';
        ps.position = "abolute";
        ps.margin = "10px 20px";

        passwordField.addEventListener('mouseover', () => {
            passwordField.focus();
        })

        my_form.append(passwordField);


        // LOGIN button 
        const logBtn = document.createElement('button');
        logBtn.innerText = 'Log';
        logBtn.type = 'button';
        const logStyle = logBtn.style;
        logStyle.width = "50px";
        logStyle.height = "20px";
        logStyle.position = "absolute";
        logStyle.margin = "50px -170px";
        logStyle.fontWeight = 'bold';

        logBtn.addEventListener('click', ()=>{

            
            if (loginField.value.length < 6){
                alert('LOGIN must have more then 6 symbol');
                return;
            }

            if (passwordField.value.length < 6){
                alert('PASSWORD must have more then 6 symbol');
                return;
            }

            alert('All fields is OK!');
            formClothing();
        })

        my_form.append(logBtn);

        const regBtn = document.createElement('button');
        regBtn.innerText = 'Reg';
        regBtn.style.fontWeight = 'bold';

        regBtn.style.width = "50px";
        regBtn.style.height = "20px";
        regBtn.style.position = "absolute";
        regBtn.style.margin = "50px -120px";

        my_form.append(regBtn);




    }



}