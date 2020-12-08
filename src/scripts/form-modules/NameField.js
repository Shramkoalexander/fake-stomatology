import FieldValidator from './FieldValidator';

export default class NameField {
   constructor(field) {
      this.field = field;
      this.validator = new FieldValidator(this.field);
      this.eventHandler = null;
   }

   setEventHandler(handler) {
      this.eventHandler = handler;
      this.field.addEventListener('change', handler);
   }

   validate() {
      if (this.validator.isEmpty()) {
         this.validator.setInvalid('Обязательно для заполнения');
         return false;
      }
      if (!this.validator.isOnlyLetters()) {
         this.validator.setInvalid('Имя должно содержать только буквы');
         return false;
      }

      this.validator.setValid();
      return true;
   }

   clearField() {
      this.field.value = '';
      this.validator.clearValidityState();
   }
}
