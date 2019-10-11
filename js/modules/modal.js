export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.openModal = document.querySelector(botaoAbrir);
    this.closeModal = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para
    // fazer referencia ao objeto
    // da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutside = this.clickOutside.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    console.log(this);

    event.preventDefault();
    this.toggleModal();
  }

  clickOutside(e) {
    console.log(this);

    if (e.target === this.containerModal) {
      this.toggleModal(e);
    }
  }

  addModalEvent() {
    this.openModal.addEventListener('click', this.eventToggleModal);
    this.closeModal.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickOutside);
  }

  init() {
    if (this.openModal && this.closeModal && this.containerModal) {
      this.addModalEvent();
    }

    return this;
  }
}
