/*Бургер*/
$(document).ready(function() {
  $('.header-burger'). click(function(event) {
    $('.header, .header-burger, .header-navigation').toggleClass('active_menu');
    $('body').toggleClass('body_lock');
  });
});

/*Спойлеры*/
$(document).ready(function() {
  $('.what-content-show-details_item-title').click(function(event) {
    if($('.what-content-show-details').hasClass('one_item')) {
      $('.what-content-show-details_item-title').not($(this)).removeClass('active_details');
      $('.what-content-show-details_item-text').not($(this).next()).removeClass('active_details');
    }
    $(this).toggleClass('active_details').next().toggleClass('active_details');
  });
});

/*Слайдер*/
const quoteSwiper = new Swiper('.quote-slider-body', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var logosSwiper = undefined;

function initLogosSwiper() {
  var screenWidth = $(window).width();
  if ((screenWidth >= 984) && (logosSwiper !== undefined)) {
    logosSwiper.destroy();
    logosSwiper = undefined;
  }
  else if ((screenWidth < 984) && (logosSwiper == undefined)) {
    logosSwiper = new Swiper('.logos-body-wrap', {
      slidesPerView: 'auto',
      centeredSlides: true,
      initialSlide: 2,
      spaceBetween: 16,
    });
  }
}

initLogosSwiper();

var counterSwiper = undefined;

function initCounterSwiper() {
  var screenWidth = $(window).width();
  if ((screenWidth >= 1124) && (counterSwiper !== undefined)) {
    counterSwiper.destroy();
    counterSwiper = undefined;
  }
  else if ((screenWidth < 1124) && (counterSwiper == undefined)) {
    counterSwiper = new Swiper('.counter-body-wrap', {
      slidesPerView: 'auto',
      centeredSlides: true,
      initialSlide: 2,
      spaceBetween: 0,
    });
  }
}

initCounterSwiper();

$(window).resize(function() {
  initLogosSwiper();
  initCounterSwiper();
});