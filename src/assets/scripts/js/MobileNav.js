export default class MobileNav {
   constructor() {
      const headerMenuButtonElement = document.querySelector(
         '.header__menu-button'
      );
      this.mobileNav = document.querySelector('.mobile-nav');
      this.menuButton = headerMenuButtonElement;
      this.closeButton = document.querySelector('.mobile-nav__close');
      this.servicesItem = document.querySelector('#mobile-menu-services > a');
      this.events();
   }

   events() {
      this.mobileNav.addEventListener('click', e => {
         if (!e.target.closest('.mobile-nav__menu')) {
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
            .querySelector('#mobile-menu-services')
            .classList.toggle('mobile-nav__menu-item--is-opened');
      });

      window.addEventListener('resize', () => {
         const displayProperty = window
            .getComputedStyle(this.mobileNav, null)
            .getPropertyValue('display');

         if (displayProperty === 'none') {
            if (this.mobileNav.classList.contains('mobile-nav--is-opened')) {
               this.close();
            }
         }
      });
   }

   close() {
      if (this.mobileNav.classList.contains('mobile-nav--is-opened')) {
         this.mobileNav.classList.remove('mobile-nav--is-opened');
      }

      if (
         document
            .querySelector('#mobile-menu-services')
            .classList.contains('mobile-nav__menu-item--is-opened')
      ) {
         document
            .querySelector('#mobile-menu-services')
            .classList.remove('mobile-nav__menu-item--is-opened');
      }

      document.body.style.overflow = 'visible';
   }

   open() {
      if (!this.mobileNav.classList.contains('mobile-nav--is-opened')) {
         this.mobileNav.classList.add('mobile-nav--is-opened');
         document.body.style.overflow = 'hidden';
      }
   }
}
