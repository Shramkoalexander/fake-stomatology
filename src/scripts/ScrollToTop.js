export default class ScrollToTop {
   constructor() {
      this.scrollToTop = document.querySelector('.scroll-to-top');
      this.revealOffset = 600;
      this.events();
   }

   events() {
      document.addEventListener('scroll', () => {
         if (window.pageYOffset >= this.revealOffset) {
            this.scrollToTop.classList.add('scroll-to-top--is-visible');
         } else {
            this.scrollToTop.classList.remove('scroll-to-top--is-visible');
         }
      });
   }
}
