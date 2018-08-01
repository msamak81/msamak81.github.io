// mobile viewport
$.fn.isMobile = function () {
    "use strict";
    var $mobile = 992,
        $screen = $(window).width();
    return $screen < $mobile;
};
$(window).on("load resize", function () {
    "use strict";
    if ($(window).isMobile()) {
        $('html').addClass('mobile');
    } else {
        $('html').removeClass('mobile');
    }
});

// slider
function owlSliderInit(){
    var owlslider = $('.owl-slider').owlCarousel({
        loop: true,
        margin: 1,
        autoplay: false,
        smartSpeed: 1000,
        nav: true,
        callbacks: true,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
                600: {
                items: 1
            },
                1000: {
                items: 1
            }
        },
		afterMove: previousslide,
		beforeMove: nextslide
    });  
    function previousslide() {
		$(".owl-item.active .desc").addClass('animated fadeInUp');
	}
	function nextslide() {
		$(".owl-item .desc").removeClass('animated fadeInUp');
	}
    owlslider.on('change.owl.carousel', function (event) {
        $(".animate").each(function () {
            $(this).bind('inview', function (event, visible) {
                var $this = $(this)
                    , $animation = ($this.data("animation") !== undefined) ? $this.data("animation") : "slideUp";
                $delay = ($this.data("delay") !== undefined) ? $this.data("delay") : 100;
                if (visible == true) {
                    setTimeout(function () {
                        $this.addClass($animation);
                    }, $delay);
                }
                else {
                    setTimeout(function () {
                        $this.removeClass($animation);
                    }, $delay);
                }
            });
        });
    });
}
$(function () {
    'use strict';
    if ( $('.owl-slider').length ) owlSliderInit();
});

//carousel 3 items
function carouselThree(){
      $('.owl-carousel-3col').owlCarousel({
		  loop:true,
		  margin:10,
		  nav:true,
		  singleItem: true,
          rtl: true,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  }
		  }
  });
}
$(function () {
    'use strict';
   if ( $('.owl-carousel-3col').length ) carouselThree();
});


//carousel 4 items
function carouselFour(){
      $('.owl-carousel-4col').owlCarousel({
		  loop:true,
		  margin:10,
		  nav:true,
		  singleItem: true,
          rtl: true,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:4
			  }
		  }
  });
}
$(function () {
    'use strict';
   if ( $('.owl-carousel-4col').length ) carouselFour();
});

//carousel 5 items
function carouselFive(){
      $('.owl-carousel-5col').owlCarousel({
		  loop:true,
		  margin:10,
		  nav:true,
		  singleItem: true,
          rtl: true,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:3
			  },
			  1000:{
				  items:5
			  }
		  }
  });
}
$(function () {
    'use strict';
   if ( $('.owl-carousel-5col').length ) carouselFive();
});

//inview 
function inviewInit(){
        $(".animate").each(function () {
        $(this).bind('inview', function (event, visible) {
            var $this = $(this)
                , $animation = ($this.data("animation") !== undefined) ? $this.data("animation") : "slideUp";
            $delay = ($this.data("delay") !== undefined) ? $this.data("delay") : 100;
            if (visible == true) {
                setTimeout(function () {
                    $this.addClass($animation);
                }, $delay);
            }
            else {
                setTimeout(function () {
                    $this.removeClass($animation);
                }, $delay);
            }
        });
    });
}
$(function () {
    'use strict';
   if ( $('.animate').length ) inviewInit();
});

//parallax
window.addEventListener('load', function () {
    "use strict";
    $('.parallax').each(function () {
        var $this = $(this),
            $src = $this.attr('data-image-src');
        $this.css('background-image', 'url(' + $src + ')');

        var $wrapperHeight = $this.parents('.parallax-wrapper').find('.parallax-container').outerHeight();
        $this.parents('.parallax-wrapper').outerHeight($wrapperHeight);
    });
});
function initParallax() {
    "use strict";
    var parallaxElements = $('.parallax'),
        parallaxQuantity = parallaxElements.length;

    window.addEventListener("load", function () {
        if (!$(this).isMobile()) {
            parallaxElements.each(function () {
                var $this = $(this),
                    $speed = $this.attr('data-parallax-speed'),
                    $scrolled = $(window).scrollTop() - $this.offset().top + $this.height(),
                    $scrolledTop = $(window).scrollTop() - $this.offset().top;

                for (var i = 0; i < parallaxQuantity; i++) {
					  var currentElement = parallaxElements.eq(i);
					  var scrolled = $(window).scrollTop();					
					
                    if ($this.parents('.parallax-section').is('.page-title')) {
                        currentElement.css({
                            'transform': 'translate3d(0,' + ($scrolledTop * $speed - 80) + 'px, 0)'
                        });
                    } else {
                        currentElement.css({
                            'transform': 'translate3d(0,' + ($scrolled * $speed + 10) + 'px, 0)'
                        }); 
                    }
                }
            });
        }        
    });
    window.addEventListener("scroll", function () {
        if (!$(this).isMobile()) {
            window.requestAnimationFrame(function () {
                parallaxElements.each(function () {
                    var $this = $(this),
                        $speed = $this.attr('data-parallax-speed'),
                        $scrolled = $(window).scrollTop() - $this.offset().top + ( $this.height() / 180 ),
                        $scrolledTop = $(window).scrollTop() - $this.offset().top;
                    
                    for (var i = 0; i < parallaxQuantity; i++) {     
						  var currentElement = parallaxElements.eq(i);
                            $this.css({
                                'transform': 'translate3d(0,' + $scrolled * $speed + 'px, 0)'
                            });                            
                    }
                });
            });
        }
    });
}
(function ($) {
    "use strict";
    if ($('.parallax').length && !$('.parallax').isMobile()) {
        initParallax();
    }
}(jQuery));

// background image
function bgimgInit() {
    var bgimg = $('.bgimg img').attr('src');
    $('.bgimg').each(function () {
        var imageUrl = $('img', this).attr('src');
        $(this).css('background-image', 'url(' + imageUrl + ')');
        $('img', this).remove();
    });
}
$(function () {
    'use strict';
   if ( $('.bgimg').length ) bgimgInit();     
});

// modal video iframe    
$(function(){
    $(".videobg").each(function(){
        var videoSRC = $(this).data("video");
        $('#video').on('hidden.bs.modal', function (e) { 
            $('iframe', this).attr('src', '');
        });
        $('#video').on('show.bs.modal', function (e) { 
            $('iframe', this).attr('src', videoSRC);
        });
    });
});

// mobile menu
$(function(){
    'use strict';    
    $('.burgerMenu').on('click', function(){
        if ( $('i', this).hasClass('fa-bars') ) {
            $('i', this).addClass('fa-times').removeClass('fa-bars');
        } else {
            $('i', this).addClass('fa-bars').removeClass('fa-times');
        }   
        $('body').toggleClass('openMenu');
    });
});


// GITheWall   
function gitwall(){
    $('.GITheWall').each(function(){
    wall = $(this).GITheWall({
      nextButtonClass: 'fa fa-angle-left',
      prevButtonClass: 'fa fa-angle-right',
      closeButtonClass: 'fa fa-times',
      scrollerElm: null,
      scrollOffset: 150,
      autoscroll: true,
    });
        });
}  
$(function () {
    'use strict';
   if ( $('.GITheWall').length ) gitwall();     
});