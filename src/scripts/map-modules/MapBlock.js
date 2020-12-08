import { getCoordinates } from './utils';
import YmapWrapper from './YmapWrapper';

export default class MapBlock {
   constructor() {
      this.currentCoordinates = null;
      this.currentOfficeDescription = null;
      this.currentId = null;
      this.activeSubwayButton = null;

      this.allOfficeDescriptions = document.querySelectorAll(
         '.map-block__descr-content'
      );

      this.allSubwayButtons = document.querySelectorAll(
         '.map-block__subway-list-item'
      );

      this.init();
   }

   async init() {
      // show initial office
      const initOffice = document.querySelector('.map-block__descr-content');
      const initID = initOffice.getAttribute('id');

      this.showOffice(initID);

      // initialize map
      this.yMap = new YmapWrapper('y-map', this.currentCoordinates);
      await this.yMap.init();

      this.yMap.on('click', id => {
         this.showOffice(id);
      });

      // create map placemarks
      this.allOfficeDescriptions.forEach(item => {
         const id = item.getAttribute('id');
         const coordinates = getCoordinates(id);
         this.yMap.createPlacemark(coordinates, id);
      });

      // add listeners to subway buttons to show offices on click
      this.allSubwayButtons.forEach(subwayButton => {
         subwayButton.addEventListener('click', e => {
            const targetButton = e.target.closest(
               '.map-block__subway-list-item'
            );
            const officeId = targetButton.dataset.officeToShow;
            this.showOffice(officeId);
            this.yMap.changePosition(this.currentCoordinates);
         });
      });
   }

   deactivateSubwayButtons() {
      this.allSubwayButtons.forEach(subwayButton => {
         subwayButton.classList.remove('map-block__subway-list-item--active');
      });
   }

   highlightSubwayButton(id) {
      this.deactivateSubwayButtons();
      this.activeSubwayButton = document.querySelector(
         `.map-block__subway-list-item[data-office-to-show="${id}"]`
      );
      this.activeSubwayButton.classList.add(
         'map-block__subway-list-item--active'
      );
   }

   hideAllDescriptions() {
      this.allOfficeDescriptions.forEach(officeDescription => {
         officeDescription.classList.remove(
            'map-block__descr-content--is-visible'
         );
      });
   }

   showContactDescription(id) {
      this.hideAllDescriptions();
      this.currentOfficeDescription = document.querySelector(`#${id}`);
      this.currentId = id;
      this.currentOfficeDescription.classList.add(
         'map-block__descr-content--is-visible'
      );
   }

   showOffice(id) {
      this.showContactDescription(id);
      this.highlightSubwayButton(id);
      this.currentCoordinates = getCoordinates(id);
   }
}
