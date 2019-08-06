
$(document).ready(function() {

$('.edit_user').click(function (){
	$(this).hide();
	$(this).prev('.user_info').find('input').removeAttr('readonly')
	$(this).prev('.user_info').find('.user_edit_btn').show()
	$(this).prev('.user_info').find('.success_msg').hide()
	$this.parents().find('.edit_user').show();

})

	$('.user_edit_btn input[type="button"]').click(function (){
		$this= $(this)
		$this.parents().find('.user_info input[type="text"]').attr('readonly','readonly')
		$this.parents().find('.user_info .success_msg').hide()
		$this.parent().hide()
		$this.parents().find('.edit_user').show();

		if($this.hasClass('btn-primary')){

			$('.success_msg').show().addClass('bounceOut');
		}
		else{
			return false

		}

	})



});// document ready end




