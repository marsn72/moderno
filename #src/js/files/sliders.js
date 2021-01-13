// BuildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
  for (let i = 0; i < sliders.length; i++) {
    let slider = sliders[i];
    if (!slider.classList.contains('swiper-build')) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let i = 0; i < slider_items.length; i++) {
          let el = slider_items[i];
          el.classList.add('swiper-slide');
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement('div');
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = '';
      slider.appendChild(slider_wrapper);
      slider.classList.add('swiper-bild');
    }
    if (slider.classList.contains('_gallery')) {
      // slider.data('lightGallery').destroy(true);
    }
  }
  sliders_bild_callback();
}

function sliders_bild_callback(params) {}

let mainslider = new Swiper('.mainslider__body', {
  /* 
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }, 
  */
  observer: true,
  observeParents: true,
  slidesPerview: 1,
  spaceBetween: 0,
  autoHeight: true,
  speed: 800,
  // touchRatio: 0,
  // simulateTouch: false,
  // loop: true,
  // preloadImages: false,
  // Lazy: true,
  // Dotts
  pagination: {
    el: '.mainslider__dotts',
    clickable: true,
  },
  // Arrows
/*   navigation: {
    nextEl: 'about__more .more__item_next',
    prevEl: 'about__more .more__item_prev',
  }, */
  /*
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1268: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }
  */
  on: {
    lazyImageReady: function() {
      ibg();
    },
  },
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',  
  // },
});