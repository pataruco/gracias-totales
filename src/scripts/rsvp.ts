const form = document.getElementById('js-form') as HTMLFormElement;
const emailInput = document.getElementById('email') as HTMLInputElement;

const getEmail = (event: Event) => {
  event.preventDefault();
  if (emailInput.checkValidity()) {
    const { value } = emailInput;
  }
};

form.addEventListener('submit', getEmail);
