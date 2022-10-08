(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-chocolate-open]'),
    closeModalBtn: document.querySelector('[data-modal-chocolate-close]'),
    modal: document.querySelector('[data-modal-chocolate]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('menu-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
