$(function(){
    
    "use strict"

    /*================================
        Slider
    ==================================*/

    var winh = $(window).height();
    $('.swiper-container').height(winh);


    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });


      /*================================
        Stickey Header
    ==================================*/

    $(window).scroll(function(){
        var wintop = $(window).scrollTop();
  
        if(wintop >1){
          $('.navbar').addClass('sticky');
          
        }else{
          $('.navbar').removeClass('sticky');
          
        }
  
      });



       /*================================
        OWL Carousel
        ==================================*/
    
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:100,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

        //Show Scroll Button
        $(window).scroll(function(){
          var n = $(this).scrollTop();
          if(n > 250){
            $('.sroll-button i').fadeIn();
          } else{
            $('.sroll-button i').fadeOut();
          }
        });
        //Scroll To Top By Button
        $('.sroll-button i').click(function(){
          $('body,html').animate({
            scrollTop :0
          },1000);
        });

        //Scroll To Section
    
          $('.nav-link').click(function(e){
              
            e.preventDefault();

        $('body,html').animate({
          scrollTop: $('#' + $(this).data('scroll')).offset().top-30
        },1000);
        $(this).parent().addClass('b-active').siblings().removeClass('b-active');
        });
});

