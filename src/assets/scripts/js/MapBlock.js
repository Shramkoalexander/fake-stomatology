import { elementStrings } from './base';
import YmapWrapper from './YmapWrapper';

export default class MapBlock {
   constructor() {
      this.currentCoordinates = null;
      this.currentOfficeDescription = null;
      this.currentId = null;
      this.activeSubwayButton = null;

      this.allOfficeDescriptions = document.querySelectorAll(
         `.${elementStrings.officeDescriptionContent}`
      );

      this.allSubwayButtons = document.querySelectorAll(
         `.${elementStrings.subwayListItem}`
      );

      this.init();
   }

   async init() {
      // show initial office
      const initOffice = document.querySelector(
         `.${elementStrings.officeDescriptionContent}`
      );
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
         const coordinates = MapBlock.getCoordinates(id);
         this.yMap.createPlacemark(coordinates, id);
      });

      // add listeners to subway buttons to show offices on click
      this.allSubwayButtons.forEach(subwayButton => {
         subwayButton.addEventListener('click', e => {
            const targetButton = e.target.closest(
               `.${elementStrings.subwayListItem}`
            );
            const officeId = targetButton.dataset.officeToShow;
            this.showOffice(officeId);
            this.yMap.changePosition(this.currentCoordinates);
         });
      });
   }

   deactivateSubwayButtons() {
      this.allSubwayButtons.forEach(subwayButton => {
         subwayButton.classList.remove(
            `${elementStrings.subwayListItem}--active`
         );
      });
   }

   highlightSubwayButton(id) {
      this.deactivateSubwayButtons();
      this.activeSubwayButton = document.querySelector(
         `.${elementStrings.subwayListItem}[data-office-to-show="${id}"]`
      );
      this.activeSubwayButton.classList.add(
         `${elementStrings.subwayListItem}--active`
      );
   }

   hideAllDescriptions() {
      this.allOfficeDescriptions.forEach(officeDescription => {
         officeDescription.classList.remove(
            `${elementStrings.officeDescriptionContent}--is-visible`
         );
      });
   }

   showContactDescription(id) {
      this.hideAllDescriptions();
      this.currentOfficeDescription = document.querySelector(`#${id}`);
      this.currentId = id;
      this.currentOfficeDescription.classList.add(
         `${elementStrings.officeDescriptionContent}--is-visible`
      );
   }

   showOffice(id) {
      this.showContactDescription(id);
      this.highlightSubwayButton(id);
      this.currentCoordinates = MapBlock.getCoordinates(id);
   }

   static getCoordinates(id) {
      const officeDescription = document.querySelector(`#${id}`);
      const coordinatesRaw = officeDescription.dataset.coord;
      const coordinates = coordinatesRaw
         .split(',')
         .map(coordanate => parseFloat(coordanate));
      return coordinates;
   }
}
