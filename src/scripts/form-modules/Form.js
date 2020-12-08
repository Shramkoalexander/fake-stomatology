import SentMessageModal from '../modal-modules/SentMessageModal';

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

   openModal() {
      this.modal.open();
   }

   validateForm() {
      const isValid = this.fields
         .map(field => field.validate())
         .every(isFieldValid => isFieldValid);

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
