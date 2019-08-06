
$(document).ready(function() {

	window.onload = function(){


		var bartx = $(".mobile_chart").get(0).getContext("2d");
		window.myDoughnut = new Chart(bartx).Doughnut(account_top_charts,{

			//animateScale: true
			percentageInnerCutout : 60,
			showTooltips: true,
		});


	};

	// Datatable configuration

	var table = $('.accounts_tables').DataTable({

		//scrollY:        '300px',
		paging:     true,
		"aLengthMenu": [[5,10, 25, 50, 100], ["5", "10", "25", "50", "100"]],
		"initComplete":function (){

			$(".dataTables_filter input[type='search']").attr('placeholder','Search Datatable ')

		},
		colReorder: true,
		responsive: {
			details: {
				type: 'column'
			}
		},


	});

/*
// ===== Add event listeners to the select menu
$('.filter').change(function(){



		table.draw();
})
*/


	new $.fn.dataTable.Buttons( table, {
		buttons: [
			'copy', 'excel', 'pdf'
		],
	} );

	table.buttons().container()
		.appendTo( $('.col-sm-6:eq(0)', table.table().container() ) ).addClass('animated bounceIn');


	$('.accounts_tables').find('tbody tr').addClass('animated fadeInUp');
	$('.dataTables_filter').addClass('animated fadeInRight');
	$('.dataTables_length').addClass('animated fadeInLeft');
	$(".dataTables_wrapper .pagination").on("click", "a", function() { alert("clicked") });

	// select all checkbox
	$('.pay_btn').attr('disabled','disabled');

	$('.select_all_chks').change(function () {
		$(':checkbox', table.rows().nodes()).prop('checked', this.checked);
		if ($(this).is(":checked")) {

			$('.pay_btn').removeAttr('disabled');
		}
		else {
			$('.pay_btn').attr('disabled','disabled');
		}
	});


	$(':checkbox', table.rows().nodes()).change(function () {
		var check = ($(':checkbox', table.rows().nodes()).filter(":checked").length == $(':checkbox', table.rows().nodes()).length);
		$('.select_all_chks').prop("checked", check);
		if($(':checkbox', table.rows().nodes()).filter(":checked").length >=1 ){

			$('.pay_btn').removeAttr('disabled');
		}
		else {
			$('.pay_btn').attr('disabled','disabled');
		}


	});

	// show export table list
	$('.download_tbl_btn').on('click',function (){
		$('.dt-buttons').toggle();

		$('.dt-buttons a').on('click',function (){
			$('.dt-buttons').hide();

		})
		return false;

	})

//show the action buttons on mouse hover at the datatables row
	/*$('.accounts_tables tr').hover(function (){

		$(this).find('.datatable_action_btns').toggleClass('show_btns');
	})
*/
});// document ready end




