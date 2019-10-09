export default function initModal() {
  const openModal = document.querySelector('[data-modal="abrir"]');
  const closeModal = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(e) {
    e.preventDefault();

    containerModal.classList.toggle('ativo');
  }

  function clickOutside(e) {
    if (e.target === this) {
      toggleModal(e);
    }
  }
  if (openModal && closeModal && containerModal) {
    openModal.addEventListener('click', toggleModal);
    closeModal.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickOutside);
  }
}
