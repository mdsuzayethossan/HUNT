
$(function () {


// company slider
$('.company_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed:1500,
  autoplaySpeed: 2000,
  arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        
      }
    },
   
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// banner
$('.banner_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:true,
  fade:true,
  speed:1500,
  prevArrow:'.left',
  nextArrow:'.right',
  autoplaySpeed: 2000,
});



$('.portfolio-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  speed:1500,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// service slider
$('.service_main').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows:true,
  prevArrow:'.sup',
  nextArrow:'.sdown',
  vertical:true,
  centerMode:true,
  centerPadding:false,
  speed:1500,
  verticalSwiping:true,
  autoplaySpeed: 2000,
  
   responsive: [
   
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        
      }
    },
  
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// service slider
$('.service_main_2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows:true,
  prevArrow:'.sup_2',
  nextArrow:'.sdown_2',
  vertical:true,
  centerMode:true,
  centerPadding:false,
  speed:1500,
  verticalSwiping:true,
  autoplaySpeed: 2000,
  
   responsive: [
 
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        
      }
    },
   
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//Testimonial 

$('.testimonial_details').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.testimonial_main'
});
$('.testimonial_main').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.testimonial_details',
  centerMode: true,
  centerPadding:false,
  focusOnSelect: true,
  arrows: true,
  prevArrow:'.tup',
  nextArrow:'.tdown',
  vertical:true,
  autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        
        
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical:false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical:false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});


// scrolling

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if (scrolling > 150) {
    $('nav').addClass('bg');
  }
  else {
    $('nav').removeClass('bg');
  }

});


//BAck_to_top
$('.back_to_top').click(function(){
  $('html, body').animate({scrollTop:0}, 5000);
});
$(window).scroll(function () {
  var scrolling = $(this).scrollTop();
  if (scrolling > 200) {
    $('.back_to_top').fadeIn(500);
  }
  else {
    $('.back_to_top').fadeOut(500);
  }

});

//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  if (target.length) {
      html_body.animate({
          scrollTop: target.offset().top - 90
      }, 1500);
      return false;
  }
}
});

$(".typed").typed({
  strings: ["Developers.", "Designers.", "Photographer."],
  // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
  stringsElement: null,
  // typing speed
  typeSpeed: 30,
  // time before typing starts
  startDelay: 1200,
  // backspacing speed
  backSpeed: 20,
  // time before backspacing
  backDelay: 500,
  // loop
  loop: true,
  // false = infinite
  loopCount: 5,
  // show cursor
  showCursor: false,
  // character for cursor
  cursorChar: "|",
  // attribute to type (null == text)
  attr: null,
  // either html or text
  contentType: 'html',
  // call when done callback function
  callback: function() {},
  // starting callback function before each string
  preStringTyped: function() {},
  //callback for every typed string
  onStringTyped: function() {},
  // callback for reset
  resetCallback: function() {}
});

// Wow js
new WOW().init();
$('.counter').counterUp({
  delay: 10,
  time: 1000
});

// preloader
$(window).on('load', function (){
  $('.preloader').delay(1500).fadeOut(500);

});

});
