//Global function and variables to create the Charts

$.accounts_charts = function(id,datasrc,showtooltip)
{


	var postpaid_account = $(id).get(0).getContext("2d");
	window.postpaid_accounts = new Chart(postpaid_account).Doughnut(datasrc,{

		//animateScale: true
		percentageInnerCutout : 60,
		showTooltips: showtooltip,
		// String - Template string for single tooltips
		tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
	});

	/*
	 postpaid_accounts.datasets[0].bars[0].fillColor = "#e20079"; //bar 1
	 postpaid_accounts.datasets[0].bars[1].fillColor = "#8d569a"; //bar 2
	 postpaid_accounts.datasets[0].bars[2].fillColor = "#f2bd55"; //bar 3
	 postpaid_accounts.datasets[0].bars[3].fillColor = "#999999"; //bar 1
	 postpaid_accounts.datasets[0].bars[4].fillColor = "#c6abcd"; //bar 2
	 postpaid_accounts.datasets[0].bars[5].fillColor = "#aa80b3"; //bar 3
	 postpaid_accounts.datasets[0].bars[6].fillColor = "#e98cb0"; //bar 1
	 postpaid_accounts.datasets[0].bars[7].fillColor = "#f5cd7f"; //bar 2
	 postpaid_accounts.datasets[0].bars[8].fillColor = "#cccccc"; //bar 3
	 postpaid_accounts.datasets[0].bars[9].fillColor = "#f0b2ca"; //bar 3
	 postpaid_accounts.update();
	 */
}


function create_Doughnut_charts(id,src,vars){

	var ctx = $(id).get(0).getContext("2d");
	window.vars = new Chart(ctx).Doughnut(src,{
		//animateScale: true
		percentageInnerCutout : 87,

	})
	ctx.lineCap="round";
}

var myBarChart,myRadarChart
function create_bar_charts(id,src){

	var ctx = $(id).get(0).getContext("2d");

	myBarChart = new Chart(ctx).Bar(src, {

		animateScale: true
	});

}
function create_radar_charts(id,src){

	var ctx_radar = $(id).get(0).getContext("2d");
	myRadarChart = new Chart(ctx_radar).Radar(src, {

		animateScale: true,
		scaleShowGridLines : true,
	});
}


window.quicknet_packages_500 = [
	{
		value: 100,
		color:"#d94880",
		highlight: "#8d569a",

	},
	{
		value: 47,
		color:"#f2f2f2",
		highlight: "#f2f2f2",

	},



];

window.quicknet_packages_5gb = [
	{
		value: 100,
		color:"#d94880",
		highlight: "#8d569a",

	},
	{
		value: 40,
		color:"#f2f2f2",
		highlight: "#f2f2f2",

	},



];
window.quicknet_packages_unlimited = [
	{
		value: 100,
		color:"#d94880",
		highlight: "#8d569a",

	},
	{
		value: 0,
		color:"#f2f2f2",
		highlight: "#f2f2f2",

	},



];
window.quicknet_packages_roaming = [
	{
		value: 100,
		color:"#8d569a",
		highlight: "#8d569a",

	},
	{
		value: 20,
		color:"#f2f2f2",
		highlight: "#f2f2f2",

	},



];

// accounts Summary chart
window.account_summary = [
	{


		value: 2300,
		color:"#e20079",
		highlight: "#e20079",

	},
	{

		value: 1230,
		color:"#8d569a",
		highlight: "#8d569a",

	},

	{

		value: 4000,
		color:"#f2bd55",
		highlight: "#f2bd55",

	},

	{

		value: 0,
		color:"#999999",
		highlight: "#999999",

	},

	{

		value: 600,
		color:"#c6abcd",
		highlight: "#c6abcd",

	},


];
window.account_top_charts = [
	{
		value: 600,
		color:"#e20079",
		highlight: "#e20079",

	},
	{
		value: 320,
		color:"#8d569a",
		highlight: "#8d569a",

	},

	{
		value: 120,
		color:"#f2bd55",
		highlight: "#f2bd55",

	},

	{
		value: 90,
		color:"#999999",
		highlight: "#999999",

	},

	{
		value: 75,
		color:"#c6abcd",
		highlight: "#c6abcd",

	},


];

window.top_Accounts = {
	labels: ["54123556", "0123456789", "8765430910", "5467893214","0987654321", "1238764590", "0944533219", "99876665332","432578901", "0983451276"],
	datasets: [
		{
			label: "Top 10 Account",
			data: [2333, 2000, 1750, 1600,1234, 1100, 789, 760,690,610]
		}
	]
};
window.quicknet_packages = [
	{
		value: 100,
		color:"#d94880",
		highlight: "#8d569a",

	},
	{
		value: 28,
		color:"#f2f2f2",
		highlight: "#f2f2f2",

	},



];
window.top_10_accounts = {
	labels: ["0534343963", "0129882922", "0550199022", "0501234567", "0500001111", "0502299887", "0538876621","0559874563","0539080706","012349870"],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(220,220,220,0.5)",

			data: [30123, 28120, 20198, 19800, 17293, 16980, 16960,16230,15100,3902]
		}
	]
};

window.data_radar = {
	labels: ["Saudi Arabia", "Egypt", "China", "USA", "Canada", "Jordan", "UAE"],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(249,222,170,0.2)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "#efac2a",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [65, 59, 90, 81, 56, 55, 40]
		},
		{
			label: "My Second dataset",
			fillColor: "rgba(225,101,149,0.4)",
			strokeColor: "rgba(218,63,123,1)",
			pointColor: "rgba(113,44,129,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: [28, 48, 40, 19, 96, 27, 100]
		}
	]
};

function bar_colors(id) {

	/* changing the bar chart colors */
	id.datasets[0].bars[0].fillColor = "#d9d9d9"; //bar 1
	id.datasets[0].bars[1].fillColor = "#712c81"; //bar 2
	id.datasets[0].bars[2].fillColor = "#efac2a"; //bar 3
	id.datasets[0].bars[3].fillColor = "#da3f7b"; //bar 4
	id.datasets[0].bars[4].fillColor = "#8d569a"; //bar 5
	id.datasets[0].bars[5].fillColor = "#666666"; //bar 6
	id.datasets[0].bars[6].fillColor = "#e16595"; //bar 7
	id.datasets[0].bars[7].fillColor = "#c6abcd"; //bar 8
	id.datasets[0].bars[8].fillColor = "#f5cd7f"; //bar 9
	id.datasets[0].bars[9].fillColor = "#cccccc"; //bar 10
	id.update();
}

