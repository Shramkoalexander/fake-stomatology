export const getCoordinates = id => {
   const officeDescription = document.querySelector(`#${id}`);
   const coordinatesRaw = officeDescription.dataset.coord;
   const coordinates = coordinatesRaw
      .split(',')
      .map(coordanate => parseFloat(coordanate));
   return coordinates;
};
