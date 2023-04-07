$(document).ready(function(){
  AOS.init();
  
    $('.testimonial_slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
    
    });

    $('.moreless_button').click(function() {
      $('.more_text').slideToggle();
      if ($('.moreless_button').text() == "Load More") {
        $(this).text("Load Less")
      } else {
        $(this).text("Load More")
      }
    });

  });

  