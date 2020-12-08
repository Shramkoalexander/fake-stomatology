export default class FooterToggle {
   constructor() {
      this.toggle = document.querySelector('.footer__other-list-toggle');

      this.footerLinkList = document.querySelector('.footer__other-link-list');

      this.events();
   }

   events() {
      window.addEventListener('resize', () => {
         const displayProperty = window
            .getComputedStyle(this.toggle, null)
            .getPropertyValue('display');

         if (displayProperty === 'none') {
            this.toggle.classList.remove('footer__other-list-toggle--opened');

            this.footerLinkList.classList.remove(
               'footer__other-link-list--is-visible'
            );
         }
      });

      this.toggle.addEventListener('click', e => {
         e.target.classList.toggle('footer__other-list-toggle--opened');

         this.footerLinkList.classList.toggle(
            'footer__other-link-list--is-visible'
         );
      });
   }
}
