$(document).ready(function() {
    
  $(".nav-item a").on("click", function (event) {
    event.preventDefault();

    let id  = $(this).attr('href'),
		top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
    
	});
  $(".nav-menu").on('click', function(){
  
    if( $(this).hasClass('nav-menu-active') ) {
      $(this).removeClass('nav-menu-active')
      $(".nav-list").removeClass('nav-list-active')
    }
    else {
      $(this).toggleClass('nav-menu-active');
      $(".nav-list").toggleClass('nav-list-active')
    }
    
  });

  $('.testimonial-slider').slick({
    infinite: false,
    slidesToShow: 3,
    prevArrow: "<i class='fa fa-chevron-left slick-prev testimonial-slider-arrow'></i>",
    nextArrow: "<i class='fa fa-chevron-right slick-next testimonial-slider-arrow'></i>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
           
    ]
  });
    

});