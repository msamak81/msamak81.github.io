/**** goto ****/	
	(function ($) {
		'use strict';
		$('[data-goto]').on('click', function () {
			var goto = $(this).attr('data-goto')
				, gotoTop = $('section#' + goto).offset().top - 70;
			$('li[data-goto]').removeClass('active');
			$(this).addClass('active');
			$("html, body").animate({
				scrollTop: gotoTop
			}, 1200, 'swing');
		});
	}($));
	window.addEventListener('scroll load', function () {
		$('section').each(function () {
			if ($(this).inView()) {
				var active = $(this).attr('id');
				$('li[data-goto]').removeClass('active');
				$('li[data-goto=' + active + ']').addClass('active');
			}
		});
	});

jQuery('.icon img').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});	

//========  parallax ========//
function initParallax() {
	'use strict';
	var parallaxElements = $('.parallax')
		, parallaxQuantity = parallaxElements.length
		, parallaxTitle = $('.page-title .parallax')
		, parallaxQuantityTitle = parallaxElements.length;
	$(window).on('scroll', function () {
		window.requestAnimationFrame(function () {
			parallaxElements.each(function () {
				var $this = $(this)
					, $speed = $this.attr('data-parallax-speed');
				for (var i = 0; i < parallaxQuantity; i++) {
					var $scrolled = $(window).scrollTop() - $this.offset().top + $this.height();
					$this.css({
						'transform': 'translate3d(0,' + $scrolled * $speed + 'px, 0)'
					});
				}
			});
			parallaxTitle.each(function () {
				var $this = $(this)
					, $speed = $this.attr('data-parallax-speed');
				for (var i = 0; i < parallaxQuantityTitle; i++) {
					var $scrolled = $(window).scrollTop();
					$this.css({
						'transform': 'translate3d(0,' + $scrolled * $speed + 'px, 0)'
					});
				}
			});
		});
	});
}
$('.parallax').each(function () {
	'use strict';
	var $this = $(this)
		, $src = $this.attr('data-image-src')
		, $wrapperHeight = $this.parents('.parallax-wrapper').find('.parallax-container').outerHeight();
	$this.css('background-image', 'url(' + $src + ')');
	$this.parents('.parallax-wrapper').outerHeight($wrapperHeight);
});
$(window).resize(function () {
	'use strict';
	$('.parallax-section').each(function () {
		var $newHeight = $('.parallax-container', this).outerHeight();
		$('.parallax-wrapper', this).height($newHeight);
	});
});
(function ($) {
	'use strict';
	if ($('.parallax').length) {
		initParallax();
	}
}($));

//========  owl carousel ========//
function owlCarousel() {
	'use strict';
	$('.owl-carousel').owlCarousel();
}
(function ($) {
	'use strict';
	if ($('.owl-carousel').length) {
		owlCarousel();
	}
}($));


//========  mobile menu ========//
(function ($) {
	'use strict';
	$('.burgerMenu').on('click', function(){
		$('body').toggleClass('menu-open')
	});
	
}($));

//========  expand ========//
function expandInit() {
	'use strict';
	$('.expand').each(function(){
		var h = $('.col-md-3', this).height(),
			l = $('.col-md-3', this).length,
			rDesktop = Math.ceil(l / 4),
			rTablet = Math.ceil(l / 3),
			w = $(window).width();

        //$('.expand').height (h * 2);
        
		if ( l > 8 ) {
			$(this).height(h * 2);
			if ( !$('body').hasClass('inner-projects') ) {
				$('<span class="expandBtn"><img src="imgs/icons/downarrow.svg" /><p>Click to expand</p></span>').insertAfter(this);
			} else {
				$('<span class="expandBtn"><img src="../imgs/icons/downarrow.svg" /><p>Click to expand</p></span>').insertAfter(this);
			}
		}
		$('.expandBtn').on('click', function(){
			if ( w > 1024 ) {
				$(this).prev('.expand').animate({height: rDesktop * h});
			} else if ( w <= 1024 && w >= 768  ) {
				$(this).prev('.expand').animate({height: rTablet * h});
			} else if ( w <= 768 ) {
				$(this).prev('.expand').animate({height: l * h});
			}
			$(this).hide();
		});
		
	});
}
window.addEventListener('load', function(){
		'use strict';
	$('#loader').fadeOut(300);
	$('body').removeClass('loading');
	//history.pushState("", document.title, window.location.pathname);
	if ($('.expand').length) {
		expandInit();
	}
});
(function ($) {
	'use strict';
	
	$('.videos').click(function(){
		$(this).parents('.video-wrapper').toggleClass('playing');		
		   var video = $(this).get(0);
			if (video.paused === false) {
				video.pause();
			} else {
				video.play();
			}
	});	
	
	$('.videos').click(function(){
		   var video = $(this).get(0);
			if (video.paused === false) {
				video.pause();
			} else {
				video.play();
			}
	});	
	
	$('.open-grid').on('click', function(){
		$('body').addClass('opened-grid');
	});
	
	$('.close-grid').on('click', function(){
		$('body').removeClass('opened-grid');
	});	
	
	
	
}($));


function filterInit(){
    var offest = $('.team_filter').offset().top - 90;
    $('.team_filter li, .orgchart li .box').on('click', function(){
        var team = $(this).attr('id');
        $('.team_filter li').removeClass('active');
        $('.team_filter li#'+team).addClass('active');
        
        if ( $(this).is('#all') ) {
            $('.ourteam div[data-team]').show();
        } else {    
            $('.ourteam div[data-team]').hide();
            $('.ourteam div[data-team="'+team+'"]').show();
        }   
    });
    $('.orgchart li .box').on('click', function(){
        $('html').animate({ scrollTop: offest }, 'slow')
    });
}
(function ($) {
	'use strict';
    if ( $('.team_filter').length ) filterInit();
}($));

//========  expand ========//
function galleryinit(){
    $('#lightgallery').lightGallery();
    console.log('test');
}
(function ($) {
	'use strict';
    if ( $('#lightgallery').length ) galleryinit();
}($));


// odd and even number in ourteam page
function oddinit(){
    var num = $('.orgchart ul li ul li').length;
    if ( num % 2 == 0) {
        $('.orgchart').removeClass('odd');
    }else{
        $('.orgchart').addClass('odd');
    }
}
(function ($) {
	'use strict';
    if ( $('.orgchart').length ) oddinit();
}($));