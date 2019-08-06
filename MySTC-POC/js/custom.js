
$(document).ready(function() {
    // user display popover call
	$('.display').popover();
	
	// Stack grid functions
	$(function () {
		var options = {
			cell_height: 90,
			vertical_margin: 4,
			animate : true,
			always_show_resize_handle : false,
			min_width:1110,
			
		};
	
		$('.grid-stack.dashboard').gridstack(options);
		$('.grid-stack.fixed').gridstack({
			cell_height: 90,
			vertical_margin: 4,
			animate : true,
			static_grid : true,
			});

	});

// Full Screen popup function
function fullscreenpopup (conts,closebtn){
		var cont=$(conts)
		var input=cont.find('input');
		
		cont.toggleClass('open');
		input.focus();
		input.val('');
		
		// close button click event
		$(closebtn).on('click',function(){
				cont.removeClass('open');
				input.val('');
		});
		
			//ESC key pressed
		$(document).keyup(function(e) {
			 if (e.keyCode == 27) { // escape key maps to keycode `27`
				cont.removeClass('open');
				input.val('');
			}
		});
	}

// accounts search popup
	$( '.accounts_selection' ).click(function (){
		fullscreenpopup ('.account_list','.morphsearch-close'); // fullscreenpopup function params ("div to show", "close btn");
		return false;
	})

	// User profile menu display
	$( '.user_display_btn' ).click(function (){
		fullscreenpopup ('.user_profile','.morphsearch-close'); // fullscreenpopup function params ("div to show", "close btn");
 		return false;
		})

	// custom selects code
	function selects() {
		[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
			new SelectFx(el);
		} );
	}
	selects();

	function filter_selects() {
		[].slice.call( document.querySelectorAll( '.dataTables_length .select' ) ).forEach( function(el) {
			new SelectFx(el);
		} );
	}
	filter_selects();

	// Open Widget Settings panel
	$(".widget_setting_btn").click(function (){
		$(this).toggleClass("active");
		$(this).parents().eq(1).find(".widget_settings").toggleClass("opened");
		$(this).parents().eq(1).find(".widget_settings_btns").fadeIn().removeClass('fadeOutUp');
		//$(this).parents().eq(1).bringToTop();
		return false;
	});

	// open edit, delete widget divs
	$(".widget_settings_btns").on("click", function (){

		$this=$(this);
		$this.parents().eq(1).find(".widget_settings_btns").addClass("animated fadeOutUp")
		$this.parents().eq(1).find(".widget_back_btn").show().addClass("animated fadeInUp")
		$this.parents().eq(1).find(".widget_setting_btn").fadeOut();

		if($this.hasClass("edit")){
			$this.parents().eq(1).find(".widget_done_btn, .edit_widget_cont").show().addClass("animated fadeInUp")
			$this.parents().eq(1).find(".remove_widget_cont").fadeOut();


		}
		else if($this.hasClass("remove"))  {

			$this.parents().eq(1).find(".remove_widget_cont").show().addClass("animated fadeInUp")
			$this.parents().eq(1).find(".widget_done_btn, edit_widget_cont").fadeOut();
		}
		return false;
	})

	// widget back to edit menu button
	$(".widget_back_btn").on('click', function (){
		$(this).fadeOut();
		$this.parents().eq(2).find(".widget_setting_btn").fadeIn();
		$this.parents().eq(1).find(".remove_widget_cont, .edit_widget_cont, .widget_done_btn").fadeOut().removeClass('fadeInUp').addClass("fadeOutUp");
		$this.parents().eq(1).find(".widget_settings_btns").fadeIn().removeClass('fadeOutUp fadeInUp').addClass(" fadeInDown")
		return false;
	})

	//widget Edit Done button
	$(".widget_done_btn").on('click', function (){
		$(this).fadeOut();
		$(this).parents().eq(2).find(".widget_setting_btn").fadeIn().removeClass("active");
		$(this).parents().eq(2).find(".widget_settings").toggleClass("opened");
		$(this).parents().eq(1).find('.edit_widget_cont , .widget_back_btn').fadeOut();
		return false;
	})


	// Open Add widget panel div
	$('.add_widget, .close_widget').click(function (){
		//$('.add_Widget_panel').toggleClass("opened");
		$('.add_widget_div').toggleClass("opened");
	});

	// common calling of the cbPtabs
	$('.tabs').tabslet({

		animation:    true,
		autorotate:   false,

	});



	// Get context with jQuery - using jQuery's .get() method.
	var local_internet = [
		{
			value: 500,
			color:"#f2f2f2",
			highlight: "#f2f2f2",

		},
		{
			value: 200,
			color:"#d94880",
			highlight: "#8d569a",

		},


	];
	// used minutes
	var used_minutes = [

		{
			value: 40,
			color:"#793888",
			highlight: "#d94880",

		},
		{
			value: 100,
			color:"#f2f2f2",
			highlight: "#f2f2f2",

		},
		{
			value: 0,
			color:"#d94880",
			highlight: "#d94880",

		},



	];

	window.onload = function(){



		var ctx = $("#local_internet").get(0).getContext("2d");
		window.myDoughnut = new Chart(ctx).Doughnut(local_internet,{

			//animateScale: true
			percentageInnerCutout : 87,

		});

		var ctx = $("#used_minutes").get(0).getContext("2d");
		window.myDoughnut = new Chart(ctx).Doughnut(used_minutes,{

			//animateScale: true,
			// Adding text inside the charts for the percentage usage

			onAnimationComplete: function() {

				var canvasWidthvar = $('#used_minutes').width();
				var canvasHeight = $('#used_minutes').height();
				//this constant base on canvasHeight / 2.8em
				var constant = 40;
				var fontsize = (canvasHeight/constant).toFixed(2);
				ctx.font=fontsize +"em stc-light";
				ctx.color="red";
				ctx.textBaseline="middle";
				var total = 0;
				$.each(used_minutes,function() {
					total += parseInt(this.value,10);
				});
				var tpercentage = ((used_minutes[0].value/total)*100).toFixed(0)+"%";
				var textWidth = ctx.measureText(tpercentage).width;

				var txtPosx = Math.round((canvasWidthvar - textWidth)/2);
				ctx.fillText(tpercentage, txtPosx, canvasHeight/2);
			}


		});



	};


// Open Chat Box functions 
		var isOpen = false;
		$( '.chat_icon' ).on( 'click', function (){

			if( isOpen ) {
			$('body').removeClass('show-menu' );
				$(this).removeClass("opened");
				$( ".chat-wrap" ).removeAttr('style')
			}
			else {
				$('body').addClass('show-menu' );
				$(this).addClass("opened");


			}
			isOpen = !isOpen;
			$( ".chat-wrap" ).draggable({
				cancel:".chat-input-wrapper, .chat-messages",
				scroll: false,
				containment:"body",
			});
		});



	// Profile menu links classes
		$('.profile_menu').click(function (){
			$(this).parents().find('.profile_divs').removeClass('noscrolling');
			$('.profile_menu').removeClass("active");
			$(this).toggleClass('active');
			$('.profile_div_cont').hide().addClass('fadeOutLeft').removeClass('slideInRight');
			var selected_titles, icons, headerClass;
			$(".profile_divs  h2.titles").find ('i').attr('class','fa')

			if($(this).hasClass('personal')){
				selected_titles=' Personal Settings';
				icons = "fa-user";
				$('.profile_div_cont.personal_div').show().addClass('slideInRight').removeClass('fadeOutLeft')

			}
			else if($(this).hasClass('password')){
				selected_titles='Change  Password';
				icons = "fa-cog"
				$('.profile_div_cont.password_div').show().addClass('slideInRight').removeClass('fadeOutLeft')
			}
			if($(this).hasClass('social')){
				selected_titles='Social Media Settings';
				icons = "fa-share-alt"
				$('.profile_div_cont.social_div').show().addClass('slideInRight').removeClass('fadeOutLeft')
			}
			else if($(this).hasClass('payment')){
				selected_titles='Payment Settings';
				icons = "fa-credit-card";
				$(this).parents().find('.profile_divs').toggleClass('noscrolling');
				$('.profile_div_cont.payment_div').show().addClass('slideInRight').removeClass('fadeOutLeft')
				$(this).parents().find('.profile_divs').addClass('noscrolling');
			}
			else if($(this).hasClass('notification')){
				selected_titles='Notification Settings';
				icons = "fa-bell";
				$(this).parents().find('.profile_divs').toggleClass('noscrolling');
				$('.profile_div_cont.notification_div').show().addClass('slideInRight').removeClass('fadeOutLeft')
			}

			$(".profile_divs  h2.titles").find ('span').text(selected_titles);
			$(".profile_divs  h2.titles").find ('i').addClass(icons)
		})



	// Welcome message to users
function chnage_welcome_msg(){
		var mydate=new Date()
		var hours=mydate.getHours()
		var welcome_msg;
		if (hours>=0  && hours<12){
			welcome_msg="Good morning "

		}
		else if (hours>=12 && hours<17 )
		{
			welcome_msg="Good afternoon "

		}
		else if (hours>=17){
			welcome_msg="Good evening "

		}
		else{}


		$('.welcome_msg').html(welcome_msg);
	}
	chnage_welcome_msg();


	// Modifying z-index of the grid elements
	(function() {
		var highest = 1;

		$.fn.bringToTop = function() {
			this.css('z-index', ++highest); // increase highest by 1 and set the style
		};
	})();


$(".input__field--hoshi").keyup(function(){
	if($(this).val()!=''){
		$(this).addClass('active')
	}
	else{

		$(this).removeClass('active')
	}

})
	// Autocomplete typehead install
	var service_numbers = [
		"0534343963",
		"0551234567",
		"0502345679",
		"0552349981",
		"0534466533",
		"0502348876",
		"0534343963",
		"0551234567",
		"0502345679",
		"0552349981",
		"0534466533",
		"0502348876",
		"0534343963",
		"0551234567",
		"0502345679",
		"0552349981",
		"0534466533",
		"0502348876",
		"0534343963",
		"0551234567",
		"0502345679",
		"0552349981",
		"0534466533",
		"0502348876",
		"0550909120"
	];
	$(".quicknet_services .auto_complete" ).autocomplete({
		source: service_numbers,
		select: function( event, ui ) {

				$('.show_quicknet_package').fadeIn();
				$('.info_msg').hide();
				var ctx = $(".quicknet_packages").get(0).getContext("2d");
				window.myDoughnut = new Chart(ctx).Doughnut(quicknet_packages_unlimited,{
					//animateScale: true
					percentageInnerCutout : 87,

				})
		}
	});

	$( ".auto_complete.quick_access" ).autocomplete({
		source: service_numbers,
		select: function( event, ui ) {
			window.location.replace("service_page.html").delay( 800 )
		}
	});

	// disable links
	$(document).on('click', 'a', function(e) {
		if ($(this).attr('disabled') == 'disabled') {
			e.preventDefault();
		}
	});

	// disable submenu active links
	$('.submenu_cont a.active').click(function() {

		return false
	})


// Adding bootstrap carousel indicators


$('.carousel').each(function (element){
	var id=$(this).attr('id');
	$('#'+id).append("<ol class='carousel-indicators'></ol>");
	var indicators =$(this).find (".carousel-indicators");

	$('#'+id).find('.carousel-inner').children(".item").each(function(index) {

		(index === 0) ?
			indicators.append("<li data-target='#"+id+"' data-slide-to='"+index+"' class='active'></li>") :
			indicators.append("<li data-target='#"+id+"'  data-slide-to='"+index+"'></li>");
	});

})










});// document ready end




