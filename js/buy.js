$(document).ready(function(){
    
$('.con03Product').slick({
      centerMode: true,
  centerPadding: '5px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ],
    prevArrow:('.arrowL'),
    nextArrow:('.arrowR'),
    });
});