import FieldFactory from './FieldFactory';
import Form from './Form';

class BookAppointmentForm extends Form {
   constructor() {
      super();
      const firstNameInputElement = document.querySelector('#ba-fname');
      const phoneInputElement = document.querySelector('#ba-phone');
      const callbackTimeSelectElement = document.querySelector(
         '#ba-callback-time'
      );
      const officeAddressSelectElement = document.querySelector(
         '#ba-office-address'
      );
      const submitBtnElement = document.querySelector('#ba-submit');

      this.name = FieldFactory.create(
         firstNameInputElement,
         FieldFactory.types.name
      );
      this.phone = FieldFactory.create(
         phoneInputElement,
         FieldFactory.types.phone
      );
      this.callBackTime = FieldFactory.create(
         callbackTimeSelectElement,
         FieldFactory.types.selectOption
      );
      this.officeAddress = FieldFactory.create(
         officeAddressSelectElement,
         FieldFactory.types.selectOption
      );

      this.fields.push(
         this.name,
         this.phone,
         this.callBackTime,
         this.officeAddress
      );

      this.submitBtn = submitBtnElement;
      this.events();
   }

   events() {
      this.fields.forEach(field => {
         field.setEventHandler(() => {
            field.validate();
         });
      });

      this.submitBtn.addEventListener('click', e => {
         e.preventDefault();
         if (this.validateForm()) {
            this.openModal();
         }
      });
   }
}

export default BookAppointmentForm;
