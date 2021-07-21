//BuildSlider - строит HTML конструкцию для свайпера

let sliders = document.querySelectorAll('.swiper');
if (sliders) {
  for (let index = 0; index < sliders.length; index++) {
    let slider = sliders[index];
    if (!slider.classList.contains('swiper-container')) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let index = 0; index < slider_items.length; index++) {
          let el = slider_items[index];
          el.classList.add('swiper-slide');
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement('div');
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = '';
      slider.appendChild(slider_wrapper);
      slider.classList.add('swiper-container');
    }
    if (slider.classList.contains('_gallery')) {
      //slider.data('lightGallery').destroy(true);
    }
  }
  sliders_bild_callback();
}

function sliders_bild_callback(params) { }


// Project Sliders ====================================
if (document.querySelector('.aside-product__slider')) {
  var product_galleryThumbs = new Swiper('.slider-product__thumbs-body', {
    slidesPerView: 3,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    centeredSlides: true,
    speed: 800,
    loop: true,
    breakpoints: {
      400: {
        slidesPerView: 4,
      },
      600: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 3,
        // centeredSlides: false,
      },
    }
  });
  var product_galleryTop = new Swiper('.slider-product__body', {
    slidesPerView: 1,
    thumbs: {
      swiper: product_galleryThumbs
    },
    observer: true,
    observeParents: true,
    speed: 800,
    loop: true,
    navigation: {
      nextEl: '.slider-product__thumbs .slider-nav__next',
      prevEl: '.slider-product__thumbs .slider-nav__prev',
    },
  });


}

if (document.querySelector('.similar__slider')) {
  var similarCards = new Swiper('.similar__slider', {
    slidesPerView: 6,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    speed: 800,
    autoplay: true,
    loop: true,
    navigation: {
      nextEl: '.similar .slider-nav__next',
      prevEl: '.similar .slider-nav__prev',
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      330: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 3,

      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
    }
  });
}

if (document.querySelector('.documents__slider')) {
  var patentsSlider = new Swiper('.patent-slider', {
    slidesPerView: 2,
    spaceBetween: 19,
    observer: true,
    observeParents: true,
    speed: 800,
    // autoplay: true,
    loop: true,
    navigation: {
      nextEl: '.patent-nav .slider-nav__next',
      prevEl: '.patent-nav .slider-nav__prev',
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      330: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 2,
      },
      650: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
      1250: {
        slidesPerView: 2,
      },
    }
  });

  var certSlider = new Swiper('.cert-slider', {
    slidesPerView: 2,
    spaceBetween: 19,
    observer: true,
    observeParents: true,
    speed: 800,
    // autoplay: true,
    loop: true,
    navigation: {
      nextEl: '.cert-nav .slider-nav__next',
      prevEl: '.cert-nav .slider-nav__prev',
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      330: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 2,
      },
      650: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
      1250: {
        slidesPerView: 2,
      },
    }
  });

  var awardSlider = new Swiper('.award-slider', {
    slidesPerView: 2,
    spaceBetween: 19,
    observer: true,
    observeParents: true,
    speed: 800,
    // autoplay: true,
    loop: true,
    navigation: {
      nextEl: '.award-nav .slider-nav__next',
      prevEl: '.award-nav .slider-nav__prev',
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      330: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 2,
      },
      650: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
      1250: {
        slidesPerView: 2,
      },
    }
  });

  var thanksSlider = new Swiper('.thanks-slider', {
    slidesPerView: 1,
    spaceBetween: 19,
    observer: true,
    observeParents: true,
    speed: 800,
    // autoplay: true,
    loop: true,
    navigation: {
      nextEl: '.thanks-nav .slider-nav__next',
      prevEl: '.thanks-nav .slider-nav__prev',
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      330: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 2,
      },
      650: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
    }
  });

  var attestationSlider = new Swiper('.attestation-slider', {
    slidesPerView: 1,
    spaceBetween: 19,
    observer: true,
    observeParents: true,
    speed: 800,
    // autoplay: true,
    loop: true,
    navigation: {
      nextEl: '.attestation-nav .slider-nav__next',
      prevEl: '.attestation-nav .slider-nav__prev',
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      330: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 2,
      },
      650: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
    }
  });

}

if (document.querySelector('.about__slider')) {
  var aboutSlider = new Swiper('.about__slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    speed: 800,
    autoplay: true,
    loop: true,
    navigation: {
      nextEl: '.about .slider-nav__next',
      prevEl: '.about .slider-nav__prev',
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      400: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1250: {
        slidesPerView: 3,
      },
    }
  });
}

if (document.querySelector('.viewed__slider')) {
  var viewedCards = new Swiper('.viewed__slider', {
    slidesPerView: 6,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    speed: 800,
    autoplay: true,
    loop: true,
    navigation: {
      nextEl: '.similar .slider-nav__next',
      prevEl: '.similar .slider-nav__prev',
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      330: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 3,

      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
    }
  });
}
