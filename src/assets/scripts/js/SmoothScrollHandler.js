import SmoothScroll from 'smooth-scroll';
import { elements, elementStrings } from './base';

export default class SmoothScrollHandler {
   constructor() {
      this.scroll = new SmoothScroll('a[href*="#"]', {
         speed: 200,
      });
      this.firstNameInput = elements.firstNameInput;
      this.baSection = document.querySelector(
         `#${elementStrings.bookAppointmentSection}`
      );

      this.events();
   }

   events() {
      document.addEventListener('scrollStop', e => {
         if (e.detail.anchor === this.baSection) {
            this.firstNameInput.focus();
         }
      });
   }
}
