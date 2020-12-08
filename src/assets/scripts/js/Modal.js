class Modal {
   constructor(name) {
      this.name = name;
      this.modal = document.querySelector(`.${this.name}`);
      this.closeModalButton = document.querySelector(`.${this.name}__close`);
      this.keyPressListener = this.keyPressHandler.bind(this);
   }

   events() {
      this.closeModalButton.addEventListener('click', this.close.bind(this));
      this.modal.addEventListener('click', e => {
         if (!e.target.closest('.modal__content')) {
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
      return this.modal.classList.contains('modal--is-opened');
   }

   open() {
      this.modal.classList.add('modal--is-opened');
      document.addEventListener('keyup', this.keyPressListener);
   }

   close() {
      this.modal.classList.remove('modal--is-opened');
      document.removeEventListener('keyup', this.keyPressListener);
   }
}

export default Modal;
