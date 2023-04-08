$(document).ready(function(){

    // Aos
    AOS.init();
  
    // Popup
    popup = $(".pop_up_block");
    if(popup.hasClass("show")){
      $("body").css("overflow" , "hidden");
    }

    $(".pop_up_block .pop_up_container .close_btn").click(function(){
      $(".pop_up_block").hide();
      $(popup.removeClass("show"));
      $("body").css("overflow" , "auto");

    })
    
    // Testimonial Slider
    $('.testimonial_slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
    });

    // More Less button
    $('.moreless_button').click(function() {
      $('.more_text').slideToggle();
      if ($('.moreless_button').text() == "Load More") {
        $(this).text("Load Less")
      } else {
        $(this).text("Load More")
      }
    });

  });