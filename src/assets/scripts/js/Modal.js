// import { elements } from './base';

class Modal {
   constructor(name) {
      this.name = name;
      this.modal = document.querySelector(`.${this.name}`);
      this.closeModalButton = document.querySelector(`.${this.name}__close`);
      this.keyPressListener = this.keyPressHandler.bind(this);
      this.visibleClassName = 'modal--is-visible';
   }

   events() {
      this.closeModalButton.addEventListener('click', this.close.bind(this));
      this.modal.addEventListener('click', e => {
         if (!e.target.closest('.modal__inner')) {
            this.close();
         }
      });
   }

   keyPressHandler(e) {
      if (e.keyCode === 27) {
         this.close();
      }
   }

   isOpened() {
      return this.modal.classList.contains(this.visibleClassName);
   }

   open() {
      this.modal.classList.add(this.visibleClassName);
      document.addEventListener('keyup', this.keyPressListener);
   }

   close() {
      this.modal.classList.remove(this.visibleClassName);
      document.removeEventListener('keyup', this.keyPressListener);
   }
}

export default Modal;
