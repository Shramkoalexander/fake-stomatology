import Tooltip from '../Tooltip';

class FieldValidator {
   constructor(field, unmaskedValue = null) {
      this.field = field;
      this.tooltip = null;
      this.unmaskedValue = unmaskedValue;
      this.haveMask = this.unmaskedValue !== null;
   }

   clearValidityState() {
      this.field.classList.remove('valid');
      this.field.classList.remove('invalid');
      if (this.tooltip) {
         this.tooltip.removeAlreadyExisting();
      }
   }

   setInvalid(message) {
      this.clearValidityState();
      this.tooltip = new Tooltip(`${this.field.id}-tooltip`);
      this.tooltip.attachToElement(this.field);
      this.field.classList.add('invalid');
      this.tooltip.setMessage(message);
      this.tooltip.show();
   }

   setValid() {
      this.clearValidityState();
      this.field.classList.add('valid');
   }

   isOnlyLetters() {
      const value = this.getCurrentValue();
      const onlyLetters = /^[a-zA-Zа-яА-ЯёЁ]+(([ ][a-zA-Zа-яА-ЯёЁ ])?[a-zA-Zа-яА-ЯёЁ]*)*$/;
      if (!onlyLetters.test(value)) {
         return false;
      }
      return true;
   }

   isOnlyDigits() {
      const value = this.getCurrentValue();
      const onlyDigits = /^[0-9]*$/;
      if (!onlyDigits.test(value)) {
         return false;
      }
      return true;
   }

   isLengthEqualTo(length) {
      const value = this.getCurrentValue();
      if (value.length !== length) {
         return false;
      }
      return true;
   }

   isEmpty() {
      const value = this.getCurrentValue();
      return value.trim() === '';
   }

   getCurrentValue() {
      return this.haveMask ? this.unmaskedValue : this.field.value;
   }

   updateUnmaskedValue(unmaskedValue) {
      this.unmaskedValue = unmaskedValue;
   }
}

export default FieldValidator;
