var pages, pageNo = 0, section_title;

$(function () {
    'use strict';
    // General Variables definitions
    var pages_class;
    pages = $('.page').not('.brief');


    $('.questions_numbers .all').text(pages.length)

    // show first question and add last class to the last question
    $('.page').eq(0).show();
    $('.page').last().addClass('last');
    $('.other, .questions_numbers').hide()

    $('.question_holder').each(function (index, ele) {
        // adding special class to each question
        pages_class = 'q' + (index - 0)
        $(ele).addClass(pages_class + ' animated fadeInRight').attr('id', pages_class );
        $(ele).find('h3').prepend('<span class="question_count">' + (index - 0) + '</span>');

        //adding special class to each question option to group every question answers together to check all the conditions
        $(ele).find('.survey_options').each(function (i, e) {
            $(e).attr({
                'name': pages_class,
                'id': pages_class + "_" + i
            })

            var options_name = $(e).attr('name'),
                id = $(e).attr('id')
            $(e).addClass(options_name + '_options')

            $(e).next('label').attr('for', id)
        })
        $(ele).find('label').wrapInner("<span></span>");

        $(ele).find('.conditions_divs').each(function (i, e) {

            var c = i;

            $(e).find('.survey_options').each(function(i,e){
                $(e).attr({
                    'name': pages_class + "_sub_"+ c,
                    'id': pages_class + "_sub_" + c + '_'+ i
                });
                var options_name = $(e).attr('name'),
                    id = $(e).attr('id')
                $(e).addClass(options_name + '_options')

                $(e).next('label').attr('for', id)

            })
        });



    });



    // show other text input
    $('.conditions_divs .survey_options').click(function(){

        $(this).parents('p').find('.other').hide();

        if ($(this).hasClass('other_option') && $(this).is(':checked')){
            console.log('Other Cliked')

            $(this).parents('p').find('.other').fadeIn();
        }
        else {
            $(this).parents('p').find('.other').hide();
        }

    });






    if ($('.brief').is(':visible')) {
        $('.next_btn').prop('disabled', false);
        $('.prev_btn').hide()
    }



    // Next Button Functions
    $('.next_btn').click(function () {

        btn_disables ('.page:visible')

        var $this = $(this);

        survey_nav('next');
        survey_progress();
        checkChecked('.current_page')


        if ($('.last').is(':visible')) {
            $this.hide().next('.submit').show();

        }





    });

    // Previous button
    $('.prev_btn').click(function () {

        survey_nav('prev');
        survey_progress();
        checkChecked('.current_page')
        // required_textboxs('.current_page')

        if ($('.brief').is(':visible')) {
            $('.next_btn').prop('disabled', false);
            $('.prev_btn').hide()
        }

        if (!$('.last').is(':visible')) {

            $('.submit').hide().parents().find('.next_btn').show();

        }

        if ($('.brief').is(':visible')) {
            $('.next_btn').click(function () {
                checkChecked('.page:visible')
            });

        }
    })

    // Comments textarea countdown

    $('.comments_textarea').each(function (i,e) {
        var max = $(this).attr('maxlength');
        $(this).next('.char_counter').find('.total, .current').text(max);

        $(e).keyup(function () {
            var len = $(this).val().length;

            if (len >= max) {
                $(this).next('.char_counter').find('.current').text('0');
            } else {
                var char = max - len;
                $(this).next('.char_counter').find('.current').text(char);
            }

            // validate that the textarea has value to enable the next button
            if ($(this).hasClass('required')){

                required_textboxs('.page:visible')

            }
        });




    });


    // yes and no conditions

    $('.conditions_inputs input').each(function(i,e){

        $(e).on('click', function(){
            var $this = $(this),
                val = $this.val();
            $this.parents('.question_holder').find('.conditions_divs').hide().removeClass('cols');
            $this.parents('.question_holder').find('.conditions_divs').find('input').prop('checked', false);
            $this.parents('.question_holder').find('.conditions_divs').find('.other').hide();


            if(val == "yes"){
                $this.parents('.question_holder').find('.yes_answers').show().addClass('cols');
            }
            else if(val == "no"){
                $this.parents('.question_holder').find('.no_answers').show().addClass('cols');
            }
            else{
                $this.parents('.question_holder').find('.conditions_divs').hide().removeClass('cols');
            }


        })
    })
    $(".survey_options").click(function(){
        checkChecked('.current_page')

        // validate that the textarea has value to enable the next button
        $('.required').change(function () {
            required_textboxs('.page:visible')
        });
    })
    // submit Button Functions


    $('.submit_btn').on('click', function () {

        $('.btns-bg,  .questions_numbers').hide()
        $('.page:visible').hide().next().show().addClass('cols');


        user_device_info();

        function getFormData($form) {
            var unindexed_array = $form.serializeArray();
            var indexed_array = {};
            console.log(JSON.stringify(unindexed_array));
            $.map(unindexed_array, function (n, i) {
                if (indexed_array.hasOwnProperty(n['name'])) {
                    indexed_array[n['name']] += " / " + n['value'];
                } else {
                    indexed_array[n['name']] = n['value'];
                }

            });
            console.log(JSON.stringify(indexed_array));
            return indexed_array;
        }

        var $form = $("form");
        var formData = getFormData($form);


        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: 'https://script.google.com/macros/s/AKfycbxbPI2PjoDT_GViRw2O9ELYA93VBW2MSaWLjqa4dlljtmCbVOs/exec',
            data: formData,
            success: function (data, status, error) {
                console.log('success', data);
            },
            error: function (data, status, error) {
                console.log('error', data, status, error);
            }
        });

    });


// mobile number nunmbers onlu validation
    $('.number_only').keyup(function (e) {
        if (/\D/g.test(this.value)) {
            // Filter non-digits from input value.
            this.value = this.value.replace(/\D/g, '');
        }

    })


})


function btn_disables(ele) {

    if ($(ele).is(':visible')) {
        $('.next_btn').prop('disabled', true)

    }

}

// Survey navigation functions

function survey_nav(item) {


    if (item == 'next') {
        $('.page:visible').hide().removeClass('current_page').next().show().addClass('current_page').find('.question_holder').show();
        pageNo = pageNo + 1;


    } else {
        $('.page:visible').hide().removeClass('current_page').prev().show().addClass('current_page').find('.question_holder').show();
        pageNo = pageNo - 1;
    }

    $('.questions_numbers .current').text(pageNo);
    section_title = $('.page:visible').data('section');
    $('.questions_numbers .section_name').text(section_title);


    if (!$('.brief').is(':visible')) {
        $('.prev_btn, .questions_numbers').show()
    } else {
        $('.prev_btn, .questions_numbers').hide()
    }


}

// function to validate that at least one option is selected
function checkChecked(item){
    var check = true;
    $(item).find("p:visible .survey_options").each(function(){

        var name = $(this).attr("name");

        if($("p:visible .survey_options[name="+name+"]:checked").length == 0){
            check = false;
        }

        var option_count = $(item).find("p:visible .survey_options").length,
            required_count = $(item).find('.required').length;

        if( option_count == 0 && required_count == 0){
            check=true
        }

        // console.log(option_count, required_count)
    });

    if(check){
        $('.next_btn').prop('disabled',false)
    }else{
        $('.next_btn').prop('disabled',true)
    }

}

function required_textboxs(item){
    var valid= true

    $(item).find(".required").each(function(){
        var value = $(this).val();
        // console.log(name)

        if(value.length == 0){
            valid = false;
        }
    });

    if(valid){
        $('.next_btn').prop('disabled',false)
    }else{
        $('.next_btn').prop('disabled',true)
    }

}


// funcgtion to create progress bar
function survey_progress() {

    var percentage = (pageNo / pages.not('.brief').length)*100;
    console.log(percentage)
    $('.survey_progress .section span').css('width', percentage +'%');

    // if (percentage > 33  && percentage < 40 ) {
    //
    //     $('.survey_progress .sec_1').addClass('active');
    //
    //     $(".notifications").show().find(".notification_part_1").fadeIn();
    //     setTimeout(function () {
    //         $(".notifications").fadeOut().find(".notification_part_1").fadeOut();
    //     }, 2000);
    // }
    // else if (percentage >60 && percentage < 70) {
    //     $('.survey_progress .sec_2').addClass('active');
    //     $(".notifications").show().find(".notification_part_2").fadeIn();
    //     setTimeout(function () {
    //         $(".notifications").fadeOut().find(".notification_part_2").fadeOut();
    //     }, 2000);
    //
    // } else if (percentage == 100) {
    //     $('.survey_progress .section').addClass('active');
    // }
    // else if ($('.thanks_msg').is(':visible')) {
    //     $('.survey_progress .section ').addClass('active');
    // }

}


// getting date and browser info
function user_device_info() {

    // Get Submitted survey time and date
    var tdate = new Date(Date.now());
    var dd = tdate.getDate(); //yields day
    var MM = tdate.getMonth(); //yields month
    var yyyy = tdate.getFullYear(); //yields year
    var currentDate = dd + "-" + (MM + 1) + "-" + yyyy;
    var currentTime = tdate.getHours() + ":" + tdate.getMinutes() + ":" + tdate.getSeconds();

    var submitted_dt = currentDate + " | " + currentTime
    console.log(submitted_dt)
    $('.submitted_date').val(submitted_dt);

}





