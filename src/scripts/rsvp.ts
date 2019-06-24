import Joi from '@hapi/joi';
import { updateEvent } from './update-event';

const form = document.getElementById('js-form') as HTMLFormElement;
const emailInput = document.getElementById('email') as HTMLInputElement;

const schema = Joi.string()
  .email()
  .required();

const addAttendee = async (event: Event) => {
  event.preventDefault();
  if (emailInput.checkValidity()) {
    const { value } = emailInput;
    const { error } = Joi.validate(value, schema);
    if (error) {
      // tslint:disable-next-line:no-console
      console.error(error);
      document.body.classList.toggle('event-validation-error');
      emailInput.value = '';
      return;
    }
    const isEventUpdated = await updateEvent(value);

    isEventUpdated
      ? document.body.classList.toggle('event-update-success')
      : document.body.classList.toggle('event-update-failure');
  }
};

const removeState = (event: Event) => {
  emailInput.value = '';
  const classesNames = [
    'event-update-success',
    'event-update-failure',
    'event-validation-error',
  ];
  classesNames.forEach(name => document.body.classList.remove(name));
};

form.addEventListener('submit', addAttendee);
emailInput.addEventListener('focus', removeState);
