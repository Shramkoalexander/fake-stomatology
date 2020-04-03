import { elements, elementStrings } from './base';

export default class MenuDropdown {
   constructor() {
      this.header = elements.header;
      this.headerHeight = this.header.clientHeight;
      this.dropdown = document.querySelector(
         `.${elementStrings.headerDropdown}`
      );
      this.dropdown.style.top = `${this.headerHeight}px`;
      this.menuServices = elements.headerMenuServices;
      this.events();
   }

   events() {
      document
         .querySelector(`.${elementStrings.headerOurClinics}`)
         .addEventListener('click', e => {
            if (
               e.target.closest(
                  `.${elementStrings.headerClinicsCount}, .${elementStrings.headerClinicsPinIcon}`
               )
            ) {
               if (
                  this.dropdown.classList.contains(
                     `${elementStrings.headerDropdown}--opened`
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
               this.dropdown.classList.contains(
                  `${elementStrings.headerDropdown}--opened`
               )
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
         if (
            this.dropdown.classList.contains(
               `${elementStrings.headerDropdown}--opened`
            )
         ) {
            this.close();
         } else {
            this.open();
         }
      });
   }

   close() {
      this.dropdown.classList.remove(
         `${elementStrings.headerDropdown}--opened`
      );
      document.body.style.overflow = 'visible';
      elements.headerMenuServices.classList.remove(
         `${elementStrings.mainMenuItem}--active`
      );
   }

   open() {
      this.dropdown.classList.add(`${elementStrings.headerDropdown}--opened`);
      document.body.style.overflow = 'hidden';
      elements.headerMenuServices.classList.add(
         `${elementStrings.mainMenuItem}--active`
      );
   }
}
