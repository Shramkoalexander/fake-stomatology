import { elements } from './base';
import Form from './Form';
import FieldFactory from './FieldFactory';

class CallbackForm extends Form {
   constructor() {
      super();
      this.phone = FieldFactory.create(
         elements.modalPhoneInput,
         FieldFactory.types.phone
      );
      this.fields.push(this.phone);
      this.submitBtn = elements.modalSubmitBtn;
   }
}

export default CallbackForm;
