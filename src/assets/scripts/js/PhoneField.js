import IMask from 'imask';
import FieldValidator from './FieldValidator';

export default class PhoneField {
   constructor(field) {
      this.phoneMask = IMask(field, {
         mask: '+{7} (000) 000-00-00',
      });
      this.field = this.phoneMask.el.input;
      this.validator = new FieldValidator(
         this.phoneMask.el.input,
         this.phoneMask.unmaskedValue
      );
      this.eventHandler = null;
   }

   setEventHandler(handler) {
      this.eventHandler = handler;
      this.field.addEventListener('change', handler);
   }

   validate() {
      this.validator.updateUnmaskedValue(this.phoneMask.unmaskedValue);

      if (this.validator.isEmpty()) {
         this.validator.setInvalid('Обязательно для заполнения');
         return false;
      }
      if (!this.validator.isOnlyDigits()) {
         this.validator.setInvalid('Номер должен содержать только цифры');
         return false;
      }
      if (!this.validator.isLengthEqualTo(11)) {
         this.validator.setInvalid('Номер должен состоять из 11 цифр');
         return false;
      }

      this.validator.setValid();
      return true;
   }

   clearField() {
      this.phoneMask.value = '';
      this.validator.clearValidityState();
   }
}
