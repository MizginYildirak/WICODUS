$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 12,
  items: 4,
  dots: false,
  mouseDrag: true,
  responsiveClass: true,

  responsive: {
    0: {
      items: 1,

    },

    480: {
      items: 2,
      
    },

    768: {
      items: 4,
      
    }
  }
  

  });
});
