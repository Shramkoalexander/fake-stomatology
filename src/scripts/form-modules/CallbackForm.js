import Form from './Form';
import FieldFactory from './FieldFactory';

class CallbackForm extends Form {
   constructor() {
      super();
      const modalPhoneInputElement = document.querySelector(
         '#callback-modal-phone'
      );
      const modalSubmitBtnElement = document.querySelector(
         '#callback-modal-submit'
      );

      this.phone = FieldFactory.create(
         modalPhoneInputElement,
         FieldFactory.types.phone
      );
      this.fields.push(this.phone);
      this.submitBtn = modalSubmitBtnElement;
   }
}

export default CallbackForm;
