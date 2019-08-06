$.fn.dataTableExt.afnFiltering.push(

	function (oSettings, aData, iDataIndex) {
		// ====  Filter using dropdown list
	/*	var filtered = $('.filter').val().toLowerCase();
		if (filtered == 'mobile'){

		}
		var mobile, landline,data,all;
		if (filtered == 'mobile'){
			mobile = true;
		}
		else if (filtered == 'landline'){
			landline=true;
		}
		else if (filtered == 'data'){
			data=true;
		}
		else{

			mobile=true,landline=true,data=true
		}
		*/
	 var mobile = $('.mobile_accounts').is(':checked'),
	 landline = $('.landline_accounts').is(':checked'),
	 data = $('.data_accounts').is(':checked');


		var myRowClass = oSettings.aoData[iDataIndex].nTr.className;

		if (myRowClass === 'mobile animated fadeInUp' || myRowClass === 'mobile animated fadeInUp even' || myRowClass === 'mobile animated fadeInUp odd' ) {
			return mobile === true ? true : false;
		} else if  (myRowClass === 'landline animated fadeInUp' || myRowClass === 'landline animated fadeInUp even' || myRowClass === 'landline animated fadeInUp odd') {
			return landline === true ? true : false;
		} else if (myRowClass === 'data animated fadeInUp' || myRowClass === 'data animated fadeInUp odd' || myRowClass === 'data animated fadeInUp even') {
			return data === true ? true : false;
		}
		else {
			mobile = true, landline=true; data=true
			//return false;

		}



	});

$(document).ready(function() {
	var table = $('.accounts_tables').DataTable();

	/* Add event listeners to the two range filtering inputs */

	$('.mobile_accounts').change(function () {
		table.draw();
	});
	$('.landline_accounts').change(function () {
		table.draw();
	});
	$('.data_accounts').change(function () {
		table.draw();
	});

// Check what is the type of the account from the URL to display its filter
	var url = window.location.href;

	var accountsType = url.split("?");

	if(accountsType[1] == 'mobile'){
		$('.landline_accounts, .data_accounts').unbind( "click" )
		$('.mobile_accounts').trigger('click')
		table.draw();
	}
	else if(accountsType[1] == 'landline'){
		$('.mobile_accounts, .data_accounts').unbind( "click" )
		$('.landline_accounts').trigger('click')
		table.draw();
	}
	else if(accountsType[1] == 'data'){
		$('.mobile_accounts, .landline_accounts').unbind( "click" )
		$('.data_accounts').trigger('click')
		table.draw();
	}
	else{

		$('.landline_accounts, .mobile_accounts, .data_accounts').trigger('click')
		table.draw();
	}


});// document ready end




