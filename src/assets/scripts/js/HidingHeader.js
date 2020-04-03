import { elements, elementStrings } from './base';

export default class HidingHeader {
   constructor() {
      this.header = elements.header;
      this.pageOffset = window.pageYOffset;
      this.directionCount = 0;
      this.headerHeight = this.header.clientHeight;
      this.upDirection = false;
      this.downDirection = false;
      this.minOffsetDown = 10;
      this.minOffsetUp = 20;

      this.refreshHeaderSpot();
      this.events();
   }

   events() {
      document.addEventListener('scroll', () => {
         if (window.pageYOffset > this.pageOffset) {
            this.downDirection = true;
            if (this.downDirection === this.upDirection) {
               this.directionCount = 0;
               this.upDirection = false;
            }
            this.directionCount += 1;
            if (
               this.directionCount > this.minOffsetDown &&
               window.pageYOffset > this.headerHeight
            ) {
               this.header.classList.remove(
                  `${elementStrings.header}--is-visible`
               );
            }
         } else {
            this.upDirection = true;
            if (this.downDirection === this.upDirection) {
               this.directionCount = 0;
               this.downDirection = false;
            }
            this.directionCount += 1;
            if (
               this.directionCount > this.minOffsetUp ||
               window.pageYOffset <= this.headerHeight
            ) {
               this.header.classList.remove(
                  `${elementStrings.header}--is-visible`
               );
               this.header.classList.add(
                  `${elementStrings.header}--is-visible`
               );
            }
         }
         this.pageOffset = window.pageYOffset;
      });

      window.addEventListener('resize', () => {
         if (this.headerHeight !== this.header.clientHeight) {
            this.headerHeight = this.header.clientHeight;
            this.refreshHeaderSpot();
         }
      });
   }

   refreshHeaderSpot() {
      document.body.style.paddingTop = `${this.header.clientHeight}px`;
   }
}
