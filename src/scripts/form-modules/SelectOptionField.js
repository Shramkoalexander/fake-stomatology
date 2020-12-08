import FieldValidator from './FieldValidator';

export default class SelectOptionField {
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
      if (!this.validator.isEmpty()) {
         this.validator.setValid();
         return true;
      }
      this.validator.clearValidityState();
      return true;
   }

   clearField() {
      this.field.value = '';
      this.validator.clearValidityState();
   }
}
