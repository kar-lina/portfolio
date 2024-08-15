import { showPopup } from "./popup.js";

export function formValidation() {
  const forms = document.querySelectorAll('form[data-validation]');
  forms.forEach((form) => {
    validateForm(form);
    const inputs = form.querySelectorAll('input');
    inputs.forEach((input) => {
      input.addEventListener('change', () => {
        checkInputValidity(input);
      });
    })
  });
}
function validateForm(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll('input');
    let validityOfInputs = [];
    inputs.forEach((input) => {
      validityOfInputs.push(checkInputValidity(input));
    });
    if (!validityOfInputs.includes(false)) {
      // form.submit();
      showPopup('form-success');
      console.log('form submitted');
    }
  });
}

function checkInputValidity(input) {
 
  const error = input.parentElement.querySelector('.form__error');
  if (input.checkValidity()) {
    error.textContent = '';
    input.classList.remove('_error');
    return true
  } else {
    error.textContent = input.dataset.error ?? 'Invalid Input';
    input.classList.add('_error');
        return false;
  }
}

