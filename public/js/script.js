// sticky navbar
const x = document.getElementsByClassName("navbar");
window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    x.style.top = "0px";
  } else {
    x.style.top = "30px";
  }
});

// *************************************************************************************
$(document).ready(function () {
  //  owl - carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    margin: 40,
    dotsEach: true,
    responsiveClass: true,
    videoHeight: 150,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });
});
