import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(recordDataInStorage, 500));
formEl.addEventListener('submit', onFormSubmit);

const formData = {};
addSaveTextInputArea();

function recordDataInStorage(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, (JSON.stringify(formData)));
}

function onFormSubmit(e) {
    if (e.target.email.value === '' || e.target.message.value === '') {
        return;
    } else { 
    e.preventDefault();
    e.currentTarget.reset();
     localStorage.removeItem(STORAGE_KEY);
         console.log(formData);
     }    
}
 
function addSaveTextInputArea() {
    const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saveMessage) {
        return
    };
        formEl.email.value = saveMessage.email || '';
    formEl.message.value = saveMessage.message || '';
    formData.email = formEl.email.value;
    formData.message = formEl.message.value;
};
