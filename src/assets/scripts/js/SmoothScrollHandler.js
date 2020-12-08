import SmoothScroll from 'smooth-scroll';

export default class SmoothScrollHandler {
   constructor() {
      this.scroll = new SmoothScroll('a[href*="#"]', {
         speed: 200,
      });
      this.firstNameInput = document.querySelector('#ba-fname');
      this.baSection = document.querySelector('#book-appointment-section');

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
