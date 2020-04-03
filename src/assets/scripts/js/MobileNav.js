import { elementStrings, elements } from './base';

export default class MobileNav {
   constructor() {
      this.mobileNav = document.querySelector(`.${elementStrings.mobileNav}`);
      this.menuButton = elements.headerMenuButton;
      this.closeButton = document.querySelector(
         `.${elementStrings.mobileNav}__close`
      );
      this.servicesItem = document.querySelector(
         `#${elementStrings.headerMobileMenuServices} > a`
      );
      this.events();
   }

   events() {
      this.mobileNav.addEventListener('click', e => {
         if (!e.target.closest(`.${elementStrings.mobileNav}__menu`)) {
            this.close();
         }
      });

      this.menuButton.addEventListener('click', () => {
         this.open();
      });

      this.closeButton.addEventListener('click', () => {
         this.close();
      });

      this.servicesItem.addEventListener('click', () => {
         document
            .querySelector(`#${elementStrings.headerMobileMenuServices}`)
            .classList.toggle(`${elementStrings.mobileNavItem}--is-opened`);
      });

      window.addEventListener('resize', () => {
         const displayProperty = window
            .getComputedStyle(this.mobileNav, null)
            .getPropertyValue('display');

         if (displayProperty === 'none') {
            if (
               this.mobileNav.classList.contains(
                  `${elementStrings.mobileNav}--is-opened`
               )
            ) {
               this.close();
            }
         }
      });
   }

   close() {
      if (
         this.mobileNav.classList.contains(
            `${elementStrings.mobileNav}--is-opened`
         )
      ) {
         this.mobileNav.classList.remove(
            `${elementStrings.mobileNav}--is-opened`
         );
      }

      if (
         document
            .querySelector(`#${elementStrings.headerMobileMenuServices}`)
            .classList.contains(`${elementStrings.mobileNavItem}--is-opened`)
      ) {
         document
            .querySelector(`#${elementStrings.headerMobileMenuServices}`)
            .classList.remove(`${elementStrings.mobileNavItem}--is-opened`);
      }

      document.body.style.overflow = 'visible';
   }

   open() {
      if (
         !this.mobileNav.classList.contains(
            `${elementStrings.mobileNav}--is-opened`
         )
      ) {
         this.mobileNav.classList.add(`${elementStrings.mobileNav}--is-opened`);
         document.body.style.overflow = 'hidden';
      }
   }
}
