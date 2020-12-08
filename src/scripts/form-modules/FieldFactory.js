import NameField from './NameField';
import PhoneField from './PhoneField';
import SelectOptionField from './SelectOptionField';

export default class FieldFactory {
   static get types() {
      return { name: 1, phone: 2, selectOption: 3 };
   }

   static create(field, type) {
      switch (type) {
         case FieldFactory.types.name:
            return new NameField(field);
         case FieldFactory.types.phone:
            return new PhoneField(field);
         case FieldFactory.types.selectOption:
            return new SelectOptionField(field);
         default:
            return null;
      }
   }
}
