import { elementStrings } from './base';

export default class ScrollToTop {
   constructor() {
      this.scrollToTop = document.querySelector(
         `.${elementStrings.scrollToTop}`
      );
      this.revealOffset = 600;
      this.events();
   }

   events() {
      document.addEventListener('scroll', () => {
         if (window.pageYOffset >= this.revealOffset) {
            this.scrollToTop.classList.add(
               `${elementStrings.scrollToTop}--is-visible`
            );
         } else {
            this.scrollToTop.classList.remove(
               `${elementStrings.scrollToTop}--is-visible`
            );
         }
      });
   }
}
