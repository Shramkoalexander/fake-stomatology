import { createPopper } from '@popperjs/core';

class Tooltip {
   constructor(id) {
      this.popper = null;
      this.tooltip = null;
      this.tooltipMessage = null;
      this.element = null;
      this.id = id;
      this.create();
   }

   create() {
      this.tooltip = document.createElement('div');
      this.tooltip.classList.add('tooltip');
      this.tooltip.setAttribute('id', this.id);
      const arrow = document.createElement('div');
      arrow.classList.add('tooltip__arrow');
      arrow.setAttribute('data-popper-arrow', '');
      this.tooltip.insertAdjacentElement('beforeend', arrow);
      this.tooltipMessage = document.createElement('span');
      this.tooltipMessage.classList.add('tooltip__text');
      this.tooltip.addEventListener('click', this.destroy.bind(this));
   }

   setMessage(message) {
      this.tooltipMessage.innerText = message;
      this.tooltip.appendChild(this.tooltipMessage);
   }

   attachToElement(element) {
      this.element = element;
      this.element.insertAdjacentElement('afterend', this.tooltip);
      this.popper = createPopper(this.element, this.tooltip, {
         modifiers: [
            {
               name: 'offset',
               options: {
                  offset: [0, 8],
               },
            },
         ],
      });
   }

   removeAlreadyExisting() {
      const alreadyExisting = document.getElementById(this.id);
      if (alreadyExisting) {
         setTimeout(() => {
            alreadyExisting.remove();
         }, 200);
      }
   }

   show() {
      this.tooltip.setAttribute('data-show', '');
      setTimeout(this.destroy.bind(this), 5000);
   }

   hide() {
      this.tooltip.removeAttribute('data-show');
   }

   destroy() {
      this.hide();
      this.popper.destroy();
      this.tooltip.remove();
   }
}

export default Tooltip;
