new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicsBullets: true,
  },
  grabCursor: true,
  mousewheel: {
    sensitivity: 1,
  },
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 300,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  speed: 800,
  // loop: true,
  breakpoint: {
    320: {
      slidersPerView: 1,
    },
    480: {
      slidersPerView: 1,
    },
    768: {
      slidersPerView: 1,
    },
    1200: {
      slidersPerView: 1,
    },
  },
});
