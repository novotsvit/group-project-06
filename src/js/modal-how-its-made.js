(() => {
    const mobileMenu = document.querySelector('.js-how-its-made-menu-container');
    const openMenuBtn = document.querySelector('.js-how-its-made-open-menu');
    const closeMenuBtn = document.querySelector('.js-how-its-made-close-menu');
  
    const toggleMenu = () => {
      const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
  
      const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();