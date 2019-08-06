
$(document).ready(function() {

	var ctx = $(".quicknet_packages").get(0).getContext("2d");
	window.myDoughnut = new Chart(ctx).Doughnut(quicknet_packages_500,{
		//animateScale: true
		//responsive: true,
		percentageInnerCutout : 87,

	})

	var ctx_roaming = $(".quicknet_packages_roaming").get(0).getContext("2d");
	window.myDoughnut_roaming = new Chart(ctx_roaming).Doughnut(quicknet_packages_roaming,{
		//animateScale: true
		//responsive: true,
		percentageInnerCutout : 87,

	})

	$('#internet_packages').on('slid.bs.carousel', function () {
		window.myDoughnut.destroy();
		var id=$(this).find(".carousel-inner .item.active").find(".quicknet_packages");
		create_Doughnut_charts(id,quicknet_packages_500,'myDoughnut');



	})

	$('#internet_roaming_packages').on('slid.bs.carousel', function () {
		window.myDoughnut_roaming.destroy();
		var id=$(this).find(".carousel-inner .item.active").find(".quicknet_packages_roaming");
		create_Doughnut_charts(id,quicknet_packages_roaming,'myDoughnut_roaming');



	})




});// document ready end




