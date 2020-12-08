import Modal from './Modal';

class SentMessageModal extends Modal {
   constructor(name) {
      super(name);
      this.okButton = document.querySelector(`.${this.name}__ok-btn`);
      this.events();
   }

   events() {
      super.events();
      this.okButton.addEventListener('click', this.close.bind(this));
   }
}

export default SentMessageModal;
