import { elementStrings } from './base';

export default class FooterToggle {
   constructor() {
      this.toggle = document.querySelector(`.${elementStrings.footerToggle}`);

      this.footerLinkList = document.querySelector(
         `.${elementStrings.footerLinkList}`
      );

      this.events();
   }

   events() {
      window.addEventListener('resize', () => {
         const displayProperty = window
            .getComputedStyle(this.toggle, null)
            .getPropertyValue('display');

         if (displayProperty === 'none') {
            this.toggle.classList.remove(
               `${elementStrings.footerToggle}--opened`
            );

            this.footerLinkList.classList.remove(
               `${elementStrings.footerLinkList}--is-visible`
            );
         }
      });

      this.toggle.addEventListener('click', e => {
         e.target.classList.toggle(`${elementStrings.footerToggle}--opened`);

         this.footerLinkList.classList.toggle(
            `${elementStrings.footerLinkList}--is-visible`
         );
      });
   }
}
