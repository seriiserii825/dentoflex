$(function () {
  /*
      https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
      ===========================*/
  $("html").easeScroll({
    frameRate: 60,
    animationTime: 1000,
    stepSize: 90,
    pulseAlgorithm: 1,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: true,
    arrowScroll: 50,
    touchpadSupport: true,
    fixedBackground: true
  });

  let slider = function () {
    $('#js-slider').slick({
      arrows: false,
      fade: true,
      responsive: [
        {
          breakpoint: 720,
          settings: {
            dots: true
          }
        },
      ]
    });

    $('.slider__button--left').on('click', function (e) {
      e.preventDefault();
      $('#js-slider').slick('slickPrev');
    });

    $('.slider__button--right').on('click', function (e) {
      e.preventDefault();
      $('#js-slider').slick('slickNext');
    });
  };
  slider();

  let sandwitch = function () {
    $('.sandwitch').on('click', function () {
      $('#js-main-menu').toggleClass('fixed');
      $('body').toggleClass('fixed');
      $(this).toggleClass('sandwitch--active');
      $(this).closest('.sandwitch-wrapper').toggleClass('sandwitch--active');
    });
  };
  sandwitch();

  let tabs = function () {
    $('#js-tabs a').on('click', function (e) {
      e.preventDefault();
      let id = $(this).attr('href');
      $('#js-tabs a').removeClass('active');
      $(this).addClass('active');
      $('#js-tabs-content .tabs-content__item').fadeOut(100);
      $(id).fadeIn(100);
    });
  };
  tabs();
});



