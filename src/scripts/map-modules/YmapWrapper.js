import ymaps from 'ymaps';
import EventEmitter from '../EventEmitter';

export default class YmapWrapper extends EventEmitter {
   constructor(tagContainerId, centerCoord) {
      super();
      this.tagContainerId = tagContainerId;
      this.centerCoord = centerCoord;
      this.isRendered = false;
   }

   initPlacemarkIcon() {
      this.placemarkIcon = new Image();
      this.placemarkIcon.src = './assets/images/placemark.svg';
   }

   createPlacemark(coords, id, iconScale = 0.5) {
      const placemark = new this.mapContainer.Placemark(
         coords,
         {
            hintContent: '',
            balloonContent: '',
         },
         {
            iconLayout: 'default#image',
            iconImageHref: this.placemarkIcon.src,
            iconImageSize: [
               this.placemarkIcon.width * iconScale,
               this.placemarkIcon.height * iconScale,
            ],
            iconImageOffset: [-30, -70],
         }
      );

      placemark.events.add('click', () => {
         this.emit('click', id);
         this.changePosition(coords);
      });

      this.map.geoObjects.add(placemark);
   }

   async init() {
      this.initPlacemarkIcon();

      this.mapContainer = await ymaps.load(
         'https://api-maps.yandex.ru/2.1/?apikey=19a7e723-f0c0-427a-94b2-fd24f4887eaa&lang=ru_RU'
      );

      this.map = new this.mapContainer.Map(
         this.tagContainerId,
         {
            center: this.centerCoord,
            zoom: 15,
            controls: ['zoomControl'],
         },
         {
            yandexMapDisablePoiInteractivity: true,
         }
      );
   }

   changePosition(newCoords) {
      this.map.setCenter(newCoords, 15, { duration: 250 });
   }

   refreshToFitContainer() {
      this.map.container.fitToViewport();
   }
}
