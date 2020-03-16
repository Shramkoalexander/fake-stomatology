import { elements } from './base';
import FieldFactory from './FieldFactory';
import Form from './Form';

class BookAppointmentForm extends Form {
   constructor() {
      super();
      this.name = FieldFactory.create(
         elements.firstNameInput,
         FieldFactory.types.name
      );
      this.phone = FieldFactory.create(
         elements.phoneInput,
         FieldFactory.types.phone
      );
      this.callBackTime = FieldFactory.create(
         elements.callbackTimeSelect,
         FieldFactory.types.selectOption
      );
      this.officeAddress = FieldFactory.create(
         elements.officeAddressSelect,
         FieldFactory.types.selectOption
      );

      this.fields.push(
         this.name,
         this.phone,
         this.callBackTime,
         this.officeAddress
      );

      this.submitBtn = elements.submitBtn;

      this.events();
   }

   events() {
      this.fields.forEach(field => {
         field.setEventHandler(() => {
            field.validate();
         });
      });

      this.setSubmitEventHandler(e => {
         e.preventDefault();
         if (this.validateForm()) {
            this.modal.open();
         }
      });
   }
}

export default BookAppointmentForm;
