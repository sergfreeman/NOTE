import { LogForm } from "./loginWindow.js";
// document.querySelector('.div-logInOut');
const logoIco = document.querySelector('.div-logInOut');
logoIco.addEventListener('click', (e) => {

    const form = new LogForm();

    if (e.target == '[object HTMLParagraphElement]') {
        form.makeForm();
    }

})
