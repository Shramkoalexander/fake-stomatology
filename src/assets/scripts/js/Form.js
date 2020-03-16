import SentMessageModal from './SentMessageModal';

class Form {
   constructor() {
      this.modal = new SentMessageModal('sent-message-modal');
      this.fields = [];
      this.submitBtn = null;
      this.submitEventHandler = null;
   }

   setSubmitEventHandler(handler) {
      this.submitEventHandler = handler;
      if (this.submitBtn) {
         this.submitBtn.addEventListener('click', this.submitEventHandler);
      }
   }

   getFields() {
      return this.fields;
   }

   validateForm() {
      const validityStates = this.fields.map(field => field.validate());
      const isValid = validityStates.reduce(
         (accumulator, state) => accumulator && state,
         true
      );

      if (isValid) {
         this.clearFields();
      }

      return isValid;
   }

   clearFields() {
      this.fields.forEach(filed => {
         filed.clearField();
      });
   }
}

export default Form;
