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
      fade: true
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
});



