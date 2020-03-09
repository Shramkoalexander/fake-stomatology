import IMask from 'imask';
import Tooltip from './Tooltip';

function isEmpty(field) {
   return field.value.trim() === '';
}

function clearValidityClass(field) {
   field.classList.remove('valid');
   field.classList.remove('invalid');
}

function setInvalid(field, tooltip) {
   clearValidityClass(field);
   field.classList.add('invalid');
   tooltip.show();
}

function setValid(field, tooltip) {
   clearValidityClass(field);
   field.classList.add('valid');
   if (tooltip) {
      tooltip.destroy();
   }
}

export const validateName = nameInput => {
   const tooltip = new Tooltip('ba-fname-tooltip');
   const alreadyAttachedTooltip = document.getElementById(tooltip.id);

   if (alreadyAttachedTooltip) {
      alreadyAttachedTooltip.remove();
   }

   tooltip.attachToElement(nameInput);

   const lettersRegExp = /^[a-zA-Zа-яА-ЯёЁ]+(([ ][a-zA-Zа-яА-ЯёЁ ])?[a-zA-Zа-яА-ЯёЁ]*)*$/;
   if (isEmpty(nameInput)) {
      tooltip.setMessage('Обязательно для заполнения');
      setInvalid(nameInput, tooltip);
      return false;
   }
   if (!lettersRegExp.test(nameInput.value)) {
      tooltip.setMessage('Имя должно содержать только буквы');
      setInvalid(nameInput, tooltip);
      return false;
   }

   setValid(nameInput, tooltip);
   return true;
};

export const validatePhoneNumber = phoneInput => {
   const maskOptions = {
      mask: '+{7} (000) 000-00-00',
   };
   const mask = IMask(phoneInput, maskOptions);
   const tooltip = new Tooltip('ba-phone-tooltip');
   const onlyDigitsRegExp = /^[0-9]*$/;
   const alreadyAttachedTooltip = document.getElementById(tooltip.id);

   if (alreadyAttachedTooltip) {
      alreadyAttachedTooltip.remove();
   }

   tooltip.attachToElement(phoneInput);

   if (isEmpty(phoneInput)) {
      tooltip.setMessage('Обязательно для заполнения');
      setInvalid(phoneInput, tooltip);
      return false;
   }
   if (mask.unmaskedValue.length < 11) {
      tooltip.setMessage('Номер должен состоять из 11 цифр');
      setInvalid(phoneInput, tooltip);
      return false;
   }
   if (!onlyDigitsRegExp.test(mask.unmaskedValue)) {
      tooltip.setMessage('Номер должен содержать только цифры');
      setInvalid(phoneInput, tooltip);
      return false;
   }

   setValid(phoneInput, tooltip);
   return true;
};

export const validateSelectOptions = selector => {
   clearValidityClass(selector);
   if (!isEmpty(selector)) {
      setValid(selector);
      return true;
   }
   return false;
};
