export default class MenuDropdown {
   constructor() {
      const headerElement = document.querySelector('header');
      const headerMenuServicesElement = document.querySelector(
         '#menu-services'
      );
      this.header = headerElement;
      this.headerHeight = this.header.clientHeight;
      this.dropdown = document.querySelector('.header-menu-dropdown');
      this.dropdown.style.top = `${this.headerHeight}px`;
      this.menuServices = headerMenuServicesElement;
      this.events();
   }

   events() {
      document
         .querySelector('.header__our-clinics')
         .addEventListener('click', e => {
            if (
               e.target.closest(
                  '.header__clinics-count, .header__clinics-pin-icon'
               )
            ) {
               if (
                  this.dropdown.classList.contains(
                     'header-menu-dropdown--opened'
                  )
               ) {
                  this.close();
               }
            }
         });

      window.addEventListener('resize', () => {
         const displayProperty = window
            .getComputedStyle(this.dropdown, null)
            .getPropertyValue('display');

         if (displayProperty === 'none') {
            if (
               this.dropdown.classList.contains('header-menu-dropdown--opened')
            ) {
               this.close();
            }
         }

         if (this.headerHeight !== this.header.clientHeight) {
            this.headerHeight = this.header.clientHeight;
            this.dropdown.style.top = `${this.headerHeight}px`;
         }
      });

      this.menuServices.addEventListener('click', e => {
         e.preventDefault();
         if (this.dropdown.classList.contains('header-menu-dropdown--opened')) {
            this.close();
         } else {
            this.open();
         }
      });
   }

   close() {
      this.dropdown.classList.remove('header-menu-dropdown--opened');
      document.body.style.overflow = 'visible';
      this.menuServices.classList.remove('main-menu__item--active');
   }

   open() {
      this.dropdown.classList.add('header-menu-dropdown--opened');
      document.body.style.overflow = 'hidden';
      this.menuServices.classList.add('main-menu__item--active');
   }
}
