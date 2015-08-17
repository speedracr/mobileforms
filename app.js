$(document).ready(function(){
  $('.slide-wrapper').slick({
     arrows: false,
     infinite: false,
     cssEase: 'none'
  });
  $('.slick-prev').on('click', function(){
     $('.slide-wrapper').slick('slickPrev');
  })
  $('.slick-next').on('click', function(){
     $('.slide-wrapper').slick('slickNext');
  })
});
