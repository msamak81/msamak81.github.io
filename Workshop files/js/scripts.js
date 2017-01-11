var wall
$(document).ready(function(){



////// carousel code //////
	
	// First Slide
	$(".owl-item.active .desc").addClass('animated fadeInUp');

// Other Slides
	function previousslide() {
		$(".owl-item.active .desc").addClass('animated fadeInUp');
	}
	function nextslide() {
		$(".owl-item .desc").removeClass('animated fadeInUp');
	}


	/// main slider ///
	var owlslider= $('.owl-slider').owlCarousel({
		loop:true,
		margin:1,
		autoplay:false,
		smartSpeed: 1000,
		//animateOut: 'fadeOut',
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		},
		afterMove: previousslide,
		beforeMove: nextslide
	});

	$('.owl-carousel-1col').owlCarousel({
		loop:true,
		margin:5,
		nav:false,
		singleItem: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	$('.owl-carousel-3col').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		singleItem: true,
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
	$('.owl-carousel-4col').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		singleItem: true,
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

	window.onload = function(){

		var url = document.location.toString();
		//alert(url.split('#')[1])
		if (url.match('#')) {
			$('.nav-tabs').find('a[href="#' + url.split('#')[1] + '"]').tab('show');
		}
		//Change hash for page-reload
		$('.nav-tabs a[href="#' + url.split('#')[1] + '"]').on('shown', function (e) {
			window.location.hash = e.target.hash;
		});



		if (url.match('#')) {
			$('.tabnav').find('a[href="#' + url.split('#')[1] + '"]').tab('show');
		}
		//Change hash for page-reload
		$('.tabnav a[href="#' + url.split('#')[1] + '"]').on('shown', function (e) {
			window.location.hash = e.target.hash;
		});



	}



		var url = document.location.toString();
		//alert(url.split('#')[1])





////// collaps code //////	
	$('.panel-heading').click(function(){
		$('a', this).click();
	});

	$('.panel-heading').click(function(){
		if ( $(this).hasClass('active') ) {
			$('.panel-heading').removeClass('active');
		} else {
			$('.panel-heading').removeClass('active');
			$(this).addClass('active');
		}
	});

/*
	/// adding the slider background images to the parent as background ////
	var slider_bg = $('.slider_imgs img.slider_bg').attr('src');

	$('.slider_imgs').each(function(){
		var imageUrl = $('img.slider_bg', this).attr('src');
		$(this).css('background-image', 'url(' + imageUrl + ')');
		$('img.slider_bg', this).remove();
	});
	*/

////// Expanding Preview //////
	 wall = $('.GITheWall').GITheWall({
		nextButtonClass: 'fa fa-angle-right',
		prevButtonClass: 'fa fa-angle-left',
		closeButtonClass: 'fa fa-times',
		 dynamicHeight :true,


	});







	/*
	// make the header to be fixed when scrolling
	$(window).scroll(function () {
		//if you hard code, then use console
		//.log to determine when you want the
		//nav bar to stick.

		if ($(window).scrollTop() > 101) {
			$('#header').addClass('navbar-fixed');
		}
		if ($(window).scrollTop() < 102) {
			$('#header').removeClass('navbar-fixed');
		}
	});
	*/


////// background image blocks //////
	var bgimg = $('.bgimg img').attr('src');
	//alert(bgimg);
	$('.bgimg').each(function(){
		var imageUrl = $('img', this).attr('src');
		$(this).css('background-image', 'url(' + imageUrl + ')');
		$('img', this).remove();

	});



}); /// end of document.ready ///





////// slider code //////
var tpj=jQuery;
var revapi66;
tpj(document).ready(function() {
	if(tpj("#stc_banner").revolution == undefined){
		revslider_showDoubleJqueryError("#stc_banner");
	}else{
		revapi66 = tpj("#stc_banner").show().revolution({
			sliderType:"standard",
			jsFileLocation:"js/",
			sliderLayout:"fullscreen",
			dottedOverlay:"",
			delay:9000,
			navigation: {
				keyboardNavigation:"on",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "vertical",
					drag_block_vertical: false
				},
				arrows: {
					style: "uranus",
					enable: true,
					hide_onmobile: true,
					hide_under: 778,
					hide_onleave: true,
					hide_delay: 200,
					hide_delay_mobile: 1200,
					tmp: '',
					left: {
						h_align: "left",
						v_align: "center",
						h_offset: 20,
						v_offset: 0
					},
					right: {
						h_align: "right",
						v_align: "center",
						h_offset: 20,
						v_offset: 0
					}
				},
				bullets: {
					enable:true,
					hide_onmobile:true,
					hide_under:1024,
					style:"uranus",
					hide_onleave:false,
					direction:"horizntal",
					h_align:"center",
					v_align:"bottom",
					h_offset:0,
					v_offset:30,
					space:5,
					tmp:'<span class="tp-bullet-inner"></span>'
				}


			},
			responsiveLevels:[2040,1024,778,490],
			visibilityLevels:[2040,1024,778,490],
			gridwidth:[2040,1024,778,490],
			gridheight:[868,768,500,720],
			lazyType:"none",
			parallax: {
				type:"mouse",
				origo:"slidercenter",
				speed: 1000,
				//levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],
				//type: "scroll",
				levels: [2, 4, 6, 8, 10, 12, 14, 16, 45, 50, 47, 48, 49, 50, 0, 50],
				ddd_shadow: "off",
				ddd_bgfreeze: "on",
				ddd_overflow: "hidden",
				ddd_layer_overflow: "visible",
				ddd_z_correction: 100,
			},
			shadow:0,
			spinner:"on",
			stopLoop:"off",
			stopAfterLoops:0,
			stopAtSlide:0,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}

});

////// products details showcase //////
var tpj=jQuery;
var revapi54;
tpj(document).ready(function() {
	if(tpj("#stc-showcase").revolution == undefined){
		revslider_showDoubleJqueryError("#stc-showcase");
	}else{
		revapi54 = tpj("#stc-showcase").show().revolution({
			sliderType:"carousel",
			jsFileLocation:"js/",
			sliderLayout:"auto",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
				onHoverStop:"off",
				arrows: {
					style:"erinyen",
					enable:false,
					hide_onmobile:false,
					hide_onleave:false,
					tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div>    <div class="tp-arr-img-over"></div>	<span class="tp-arr-titleholder">{{title}}</span> </div>',
					left: {
						h_align:"left",
						v_align:"center",
						h_offset:30,
						v_offset:0
					},
					right: {
						h_align:"right",
						v_align:"center",
						h_offset:30,
						v_offset:0
					}
				}
				,
				thumbnails: {
					style:"gyges",
					enable:true,
					width:70,
					height:90,
					min_width:70,
					wrapper_padding:5,
					wrapper_color:"#fff",
					wrapper_opacity:"0.15",
					tmp:'<span class="tp-thumb-img-wrap">  <span class="tp-thumb-image"></span></span>',
					visibleAmount:4,
					hide_onmobile:true,
					hide_onleave:false,
					direction:"vertical",
					span:true,
					position:"outer-middle",
					space:5,
					h_align:"left",
					v_align:"top",
					h_offset:0,
					v_offset:0
				}
			},
			carousel: {
				maxRotation: 65,
				vary_rotation: "on",
				minScale: 55,
				vary_scale: "off",
				horizontal_align: "center",
				vertical_align: "center",
				fadeout: "on",
				vary_fade: "on",
				maxVisibleItems: 1,
				infinity: "off",
				space: -150,
				stretch: "off"
			},
			gridwidth:500,
			gridheight:420,
			lazyType:"none",
			shadow:0,
			spinner:"off",
			stopLoop:"on",
			stopAfterLoops:0,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			disableProgressBar:"on",
			hideThumbsOnMobile:"on",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}


////// megamenu code //////
	var example = $('#mainnav').superfish({
		//add options here if required
	});





});

// Load more global function
function LoadMore(count,item,more,backtop,backtop_cont) {
	list_count = $(item).size();
	items = count;
	$(item+':lt(' + items + ')').show();
	$(more).click(function () {
		items = (items + count <= list_count) ? items + count : list_count;
		$(item+':lt(' + items + ')').slideDown();

		if (items == list_count) {
			$(this).addClass('disabled').parents().find(backtop).show()

		}

		$('html,body').animate({
			scrollTop: $(this).offset().top
		}, 1500);
	});

	$(backtop).click(function(){

		$('html,body').animate({
			scrollTop: $(backtop_cont).offset().top
		}, 1500);

	})



}

