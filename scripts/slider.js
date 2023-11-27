const swiperGallery = new Swiper('.swiper-gallery', {
  // Optional parameters
  loop: true,
  allowTouchMove: false,
  // Navigation arrows
  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },

});

const swiperReviews = new Swiper('.swiper-reviews', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  grabCursor: true,
  // Navigation arrows
  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      loop: true,
      passiveListeners: false,
    },
    375: {
      slidesPerView: 1.5,
      loop: true,
      passiveListeners: false,
    },
    580: {
      slidesPerView: 2.2,
      loop: true,
      passiveListeners: false,
    },
    768: {
      slidesPerView: 2.3,
      loop: true,
      passiveListeners: false,
    },
    997: {
      slidesPerView: 2.5,
      loop: true,
      passiveListeners: false,
    },
    1200: {
      slidesPerView: 3,
      loop: true,
      passiveListeners: true,
    }
  },
});