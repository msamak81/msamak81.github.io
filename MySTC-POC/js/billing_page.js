
$(document).ready(function() {


	var ctx_bar = $(".bar_chart").get(0).getContext("2d");

	 myBarChart = new Chart(ctx_bar).Bar(top_10_accounts, {

		animateScale: true,
		scaleShowGridLines : true,
	});





	// Check if the bill is for account or service to dispaly the services list so we can display the bill for this service
	var url = window.location.href;

	var billtype = url.split("?");

	if(billtype[1] == 'service'){
		$('.service_bill').show();
		$('.account_bill').hide();

		var ctx = $(".quicknet_packages").get(0).getContext("2d");
		window.myDoughnut = new Chart(ctx).Doughnut(quicknet_packages_500,{

			percentageInnerCutout : 87,

		})

	}
	else if(billtype[1] == 'account'){
		$('.service_bill').hide();
		$('.account_bill').show();
	}


	$('#bill_stats').on('slid.bs.carousel', function () {
		var id_bar=$(this).parents(1).find(".carousel-inner .item.active").find(".bar_chart");

		var id_radar=$(this).parents(1).find(".carousel-inner .item.active").find(".radar_chart");

		if(id_bar.length > 0){

			create_bar_charts(id_bar,top_10_accounts)/* changing the bar chart colors */
			bar_colors(myBarChart)

		}
		else if(id_radar.length > 0){

			create_radar_charts(id_radar,data_radar)
		}




	})

	bar_colors(myBarChart)


		$(".download_bill").click(function (){

			$(".download_bill_panel").toggle();
		})


	$('#internet_packages').on('slid.bs.carousel', function () {
		window.myDoughnut.destroy();
		var id=$(this).find(".carousel-inner .item.active").find(".quicknet_packages");
		create_Doughnut_charts(id,quicknet_packages_500,'myDoughnut');

	})


});// document ready end




