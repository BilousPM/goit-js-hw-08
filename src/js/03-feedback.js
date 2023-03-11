import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";


const formEl = document.querySelector('.feedback-form');
const textAreaEl = document.querySelector('.feedback-form textarea');
const emailAreaEl = document.querySelector('.feedback-form [type="email"]');
const submitBtnEl = document.querySelector('button[type="submit"]');


formEl.addEventListener('input', throttle(recordDataInStorage, 500));
formEl.addEventListener('submit', onFormSubmit);

addSaveTextInputArea();


// submitBtnEl.setAttribute('disabled', 'true')

const formData = {};

function recordDataInStorage(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, (JSON.stringify(formData)));
}

 function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
     localStorage.removeItem(STORAGE_KEY);
     console.log(formData);
 }

function addSaveTextInputArea() {
    const saveMessage = localStorage.getItem(STORAGE_KEY)
    if (saveMessage) {
        const JSONvalue= JSON.parse(saveMessage);
        textAreaEl.value = JSONvalue.message;
        emailAreaEl.value = JSONvalue.email;
    }
}
