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
	var col1_carousel= $('.owl-carousel-1col').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		rtl: true,
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
		loop:true,
		margin:1,
		rtl: true,
		autoplay:false,
		smartSpeed: 1000,
		//animateOut: 'fadeOut',
		nav:true,
		callbacks: true,
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
owlslider.on('change.owl.carousel', function(event) {
 $(".animate").each(function(){
                $(this).bind('inview', function (event, visible) {
                    var $this = $(this),
                            $animation = ( $this.data("animation") !== undefined ) ? $this.data("animation") : "slideUp";
                    $delay = ( $this.data("delay") !== undefined ) ? $this.data("delay") : 100;
                    if (visible == true) {
                        setTimeout(function() { $this.addClass($animation);	},$delay);
                    }else{
                        setTimeout(function() { $this.removeClass($animation); },$delay);
                    }
                });
            });
});

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
		  scrollerElm: null,
     	  scrollOffset: 150,
		  autoscroll: true,
	  });

	  
////// responsive tables //////
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	var maxwidth = $(window).width();
 $('table').each(function(){
	   if ( $(this).width() > maxwidth ) {
 var tableht = $(this).height();
 $(this).wrap('<div style="overflow:hidden"><div class="scrolltable"></div></div>');
 $('.scrolltable').height(tableht + 40);
 /*return false;*/
	   }  
 });

}


////// background image blocks //////
	  var bgimg = $('.bgimg img').attr('src');
	  //alert(bgimg);
	  $('.bgimg').each(function(){
		  	var imageUrl = $('img', this).attr('src');			
			$(this).css('background-image', 'url(' + imageUrl + ')');			
			$('img', this).remove();
			
		});
///// make the header to be fixed when scrolling
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
$('li.mix').each(function(){
		var href = $(this).attr('data-href'),
		end = href.substring(href.lastIndexOf("/") + 1);
		$(this).attr('id', end);
		});

		
		/*
		qitaf discount Partners
		*/
		var highestBox = 0;
var mainbox= 0;
$('.qitaf_show:visible').each(function(){
   if( $('.partners_show',this).height() > mainbox ){
       mainbox = $('.partners_show', this).height();
   }
   $('.qitaf_show:visible  .partners_show').height(mainbox);

   if( $('p', this).height() > highestBox ){
       highestBox = $('p', this).height();
   }
   $('.qitaf_show:visible .partners_show p').height(highestBox);
});
/*
		qitaf discount Partners
		*/
		
}); /// end of document.ready ///


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