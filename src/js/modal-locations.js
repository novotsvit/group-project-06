(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-locations-open]'),
    closeModalBtn: document.querySelector('[data-modal-locations-close]'),
    modal: document.querySelector('[data-modal-locations]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('menu-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
