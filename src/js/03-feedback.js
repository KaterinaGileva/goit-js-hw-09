import throttle from "lodash.throttle";

const STORAGE__KEY = 'feedback-msg';

const refs = {
     form: document.querySelector('.feedback-form'),
     textarea: document.querySelector('.feedback-form textarea'),
     input: document.querySelector('.feedback-form input'),
     
};
let formData = {};
populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput (evt) {
    evt.preventDefault();
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE__KEY, JSON.stringify(formData));
}

function populateTextarea () {
    const saveMessage = localStorage.getItem(STORAGE__KEY);
    const formData = JSON.parse(saveMessage);
    if(saveMessage) {
        (refs.textarea.value = formData.message || " ");
        (refs.input.value = formData.email || " ");
    }
}

function onFormSubmit (evt) {
evt.preventDefault();
//console.log('отправляем форму');
evt.currentTarget.reset();
localStorage.removeItem(STORAGE__KEY);
}






