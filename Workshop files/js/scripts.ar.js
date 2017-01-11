var wall
$(document).ready(function(){
	
/////// tabs with carousel code  /////// 
	  $('#myTabs a').click(function (e) {
	  		e.preventDefault();
	  		$(this).tab('show');
	  });  
	  
	  $('#tabs-style-1 a').click(function (e) {
	  		e.preventDefault();
	  		$(this).tab('show');
	  });  
	  
	  $('#tabs-style-2 a').click(function (e) {
	  		e.preventDefault();
	  		$(this).tab('show');
	  });  
	  
	  $('#tabs-style-3 a').click(function (e) {
	  		e.preventDefault();
	  		$(this).tab('show');
	  });
	
////// carousel code //////
////// carousel code //////
	var col1_carousel= $('.owl-carousel-1col').owlCarousel({
		loop:false,
		margin:10,
		rtl: true,
		nav:false,
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
		loop:false,
		margin:1,
		autoplay:true,
		rtl: true,
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

	  $('.owl-carousel-3col').owlCarousel({
		  loop:true,
		  margin:10,
		  nav:true,
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
 	  $('.owl-carousel-4col').owlCarousel({
		  loop:true,
		  margin:10,
		  nav:true,
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

////// megamenu code //////
	  var example = $('#mainnav').superfish({
		  //add options here if required
	  });

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

////// Expanding Preview //////
	   wall = $('.GITheWall').GITheWall({
		  nextButtonClass: 'fa fa-angle-left',
		  prevButtonClass: 'fa fa-angle-right',
		  closeButtonClass: 'fa fa-times',
		   dynamicHeight: true,

	  });

////// background image blocks //////
	  var bgimg = $('.bgimg img').attr('src');
	  //alert(bgimg);
	  $('.bgimg').each(function(){
		  	var imageUrl = $('img', this).attr('src');			
			$(this).css('background-image', 'url(' + imageUrl + ')');			
			$('img', this).remove();
			
		});


	// make the header to be fixed when scrolling
	$(window).scroll(function () {
		//if you hard code, then use console
		//.log to determine when you want the
		//nav bar to stick.

		if ($(window).scrollTop() > 250) {
			$('#header').addClass('navbar-fixed');
		}
		if ($(window).scrollTop() < 251) {
			$('#header').removeClass('navbar-fixed');
		}
	});


}); /// end of document.ready ///
	
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
						h_align:"right",
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