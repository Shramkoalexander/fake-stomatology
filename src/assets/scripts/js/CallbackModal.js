import CallbackForm from './CallbackForm';
import Modal from './Modal';

class CallbackModal extends Modal {
   constructor(name) {
      super(name);
      this.callbackForm = new CallbackForm();
      this.events();
   }

   events() {
      super.events();

      this.callbackForm.getFields().forEach(field => {
         field.setEventHandler(() => {
            if (this.isOpened()) {
               field.validate();
            }
         });
      });

      this.callbackForm.setSubmitEventHandler(e => {
         e.preventDefault();
         if (this.callbackForm.validateForm()) {
            this.close();
         }
      });
   }

   close() {
      super.close();
      this.callbackForm.clearFields();
   }
}

export default CallbackModal;
