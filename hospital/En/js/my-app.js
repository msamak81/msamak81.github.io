// Initialize your app
var myApp = new Framework7({
    pushState: true,
    swipePanel: 'left',
    material : true,
    materialRipple:true,
    materialRippleElements : '.ripple, a.link, a.item-link, .button, .modal-button, .tab-link, .label-radio, .label-checkbox, .actions-modal-button, a.searchbar-clear, .floating-button',



});


// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', function(){
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true

});
mainView.router.load({
    url:'Login/splash.html'
})

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {

});

loggedin_fn(true)
myApp.onPageInit('splash-screen', function (page) {

    setTimeout(function(){
        mainView.router.load({
            url:'Login/login.html'
        })

    }, 5000);

    $$(".fullscreen").on('click', function() {
        GoInFullscreen($$(".views"));
    });

});




myApp.onPageInit('login-screen', function (page) {
    //alert('test')
    var mySwiper = myApp.swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 300,
            modifier: 3,
            slideShadows: true,
        }

        });
    loggedin_fn(false)
});


myApp.onPageInit('verification', function (page) {

// Create verification timer
    //console.log('ver')

    timer()
    loggedin_fn(false)

});
myApp.onPageInit('forget-verification', function (page) {

// Create verification timer
    //console.log('ver')

    timer()
    loggedin_fn(false)

});
myApp.onPageInit('new-account', function (page) {

// Create verification timer
    //console.log('ver')

    loggedin_fn(false)

});



myApp.onPageInit('settings', function (page) {

$$('.delete_user').on('click',function(){
    $$(this).parents('li').remove();
})

$$('.label-radio input[type="radio"]').on('change', function(){
   var  val =  $$(this).val();
    if(val == 'ar'){
        $$('link[rel=stylesheet][href~="css/my-app.css"]').remove();

        $$('head').append('<link rel="stylesheet" href="css/framework7.material.rtl.min.css">');
        $$('head').append('<link rel="stylesheet" href="../Ar/css/my-app.css">');

        $$('body').prop('dir', 'rtl');


    }
    else if ( val == 'en'){
        $$('link[rel=stylesheet][href~="../Ar/css/my-app.css"]').remove();
        $$('link[rel=stylesheet][href~="css/framework7.material.rtl.min.css"]').remove();
        $$('head').append('<link rel="stylesheet" href="css/my-app.css">');
         $$('body').prop('dir', 'ltr');

    }
})
});



myApp.onPageInit('dashboard', function (page) {
    var mySwiper = myApp.swiper('.swiper-container', {
        centeredSlides: false,
        slidesPerView: 'auto',
        pagination:'.swiper-pagination',
        paginationHide: false,
        paginationClickable: true,
    });

    loggedin_fn(true)
});

myApp.onPageInit('book-appointment', function (page) {

    createCalendar('.date_picker')
    createTimePicker('.time_picker')
    create_autocomplete('.clinics_autocomplete', 'Try "ENT"', 'clinics.json')

});

myApp.onPageInit('ask_ambulance', function (page) {
    createCalendar('.date_picker')
    createTimePicker('.time_picker')
    call_confirmationModals('.alert-text-title','would you like to submit this request', 'Confirmation','Cancel','OK','')
});
myApp.onPageInit('ask_care_provider', function (page) {    
    call_confirmationModals('.alert-text-title','would you like to submit this question', 'Confirmation','Cancel','OK','')
});
myApp.onPageInit('ovulation_period', function (page) {
    createCalendar('.date_picker')
    createTimePicker('.time_picker')
    call_confirmationModals('.alert-text-title','would you like to submit this request', 'Confirmation','Cancel','OK','')
});

myApp.onPageInit('pregenancy_due_date', function (page) {
    createCalendar('.date_picker')
    createTimePicker('.time_picker')
    call_confirmationModals('.alert-text-title','would you like to submit this request', 'Confirmation','Cancel','OK','')
});



var selectedDate;

myApp.onPageInit('doctor_availability', function (page) {
    create_inline_calendar('.doctor_availability_cal');
    var mySwiper = myApp.swiper('.swiper-container', {
        centeredSlides: false,
        slidesPerView: 'auto',
    });
    call_confirmationModals('.book_appointment','Would you like to book this appointment', 'Confirmation','Cancel','OK','')

    $$('.time_select .swiper-slide a').on('click',function (){
        $$('.time_select .swiper-slide a').removeClass('selected');

        $$(this).addClass('selected');
        var selected_time = $$(this).text();

        // just for display time at PM and AM values
        var i = selected_time.indexOf(':');
        var selected_hour = selected_time.slice(0, i).trim();
        var selected_minutes = selected_time.slice(i + 1, selected_time.length).trim();
        var mid= "am";

        if(selected_hour==0){ //At 00 hours we need to show 12 am
            hours=12;
        }
        else if(selected_hour>12)
        {
            selected_hour = selected_hour%12;
            mid='pm';
        }
        var time = selected_hour +":"+selected_minutes;

        $$('.time_selected').html('<span class="time_hours">'+time+'</span><span class="mid">'+mid+'</span>');

    })

    $$("body").on('DOMSubtreeModified', ".picker-calendar-selected-date", function() {
        // code here
        var selectedDate =$$(".picker-calendar-selected-date").text();

        // displaying the selected date as designed on the protoype
        var selectedDay = selectedDate.substring(0, 2);
        var newselectedDate = selectedDate.substr(2);
        var selectedMonth =  newselectedDate.substr(0, newselectedDate.length-4);
        var selectedYear = selectedDate.slice(-4);

        var appointment_date = '<span class="appointment_day">'+selectedDay+'</span><span class="appintment_month"><p>'+selectedMonth+'</p><p>'+selectedYear+'</p></span>'
        $$('.date_selected').html(appointment_date);

    });


    $$("body").on('DOMSubtreeModified', ".date_selected", function() {

        $$('.book_appointment').removeAttr('disabled')
    });

});


// vital signs charts configurations
myApp.onPageInit('vital_signs_weight', function (page) {
    var ctx = document.getElementById("weight_chart");
    var myChart = new Chart(ctx, {
        type: 'line',

        data: {
            labels: ["28/10/2017", "29/10/2017", "30/10/2017", "31/10/2017", "01/11/2017", "02/11/2017", "03/11/2017", "04/11/2017", "05/11/2017", "06/11/2017"],
            datasets: [{
                data: [105, 101, 125.5, 100, 112.7, 110.1, 111.4, 109, 105.7, 99.1],
                backgroundColor: 'rgba(255,255,255,.4)',
                borderColor: '#ffffff',
                lineTension: 0,


            }],
            borderWidth: 0,

        },
        options: {
            showLines : true,
            legend: {
                display: false,

            },
            layout: {
                padding: {
                    left: 50,
                    right: 0,
                    top: 0,
                    bottom: 0
                },

            },

            scales: {
                yAxes: [{
                    display:false,
                    ticks: {
                        beginAtZero:true
                    }
                }],
                xAxes: [{
                    display:true,
                    type: 'category',
                    ticks: {
                        beginAtZero:false,
                        fontColor: "#ffffff",
                        fontSize :"10"
                    },

                }],

            },
            tooltips:{
                enabled : false,
                backgroundColor :"#ffffff",
                titleFontColor :"#3865AF",
                bodyFontColor :"#3865AF"
            }


        },


    });

});





myApp.onPageInit('request_for_referral', function (page) {
     call_confirmationModals('.alert-text-title','would you like to submit this request', 'Confirmation','Cancel','OK','')
});


myApp.onPageInit('sick_leave', function (page) {
    call_confirmationModals('.email_sickLeave','We will send the Sick Leave to your registered email (mail@mail.com). and if you need it on another email please update your account information.', 'Send Sick Leave Results','Cancel','Send','<a href="Profile/update_email.html" class="button active blue_bg white_text">Update Email</a>')
});
myApp.onPageInit('lab_details', function (page) {
    call_confirmationModals('.email_results','We will send the lab result to your registered email (mail@mail.com). and if you need it on another email please update your account information.', 'Send Lab Results','Cancel','Send','<a href="Profile/update_email.html" class="button active blue_bg white_text">Update Email</a>')
});


myApp.onPageInit('radiology_report', function (page) {
    call_confirmationModals('.email_results','We will send the radiology result to your registered email (mail@mail.com). and if you need it on another email please update your account information.', 'Send Radiology Results','Cancel','Send','<a href="Profile/update_email.html" class="button active blue_bg white_text">Update Email</a>')
});
myApp.onPageInit('medical_report_details', function (page) {
    call_confirmationModals('.email_results','We will send the medical report to your registered email (mail@mail.com). and if you need it on another email please update your account information.', 'Send Medical Report','Cancel','Send','<a href="Profile/update_email.html" class="button active blue_bg white_text">Update Email</a>')
});

myApp.onPageInit('update_email', function (page) {

    // close modal when click on update email button on modals
    myApp.closeModal('.modal')

});

myApp.onPageInit('prescription_details', function (page) {

    $$('.search_pharmacy').click(function (e) {
        $$('.medication_search').addClass('search_in');

    });

    $$('.close_serach').click(function(e){
            $$('.medication_search').removeClass('search_in');

    });

    var mySearchbar = myApp.searchbar('.searchbar', {
        searchList: '.list-block-search',
        searchIn: '.item-title',
        customSearch : true,
        found : '.results_founded',
        onSearch :function () {
            console.log('searched');
            $$('.results_founded').show();


        },
        onEnable:function(){
            console.log('enabled')
        }
    });
    call_confirmationModals('.email_results','We will send the Prescription  to your registered email (mail@mail.com). and if you need it on another email please update your account information.', 'Send Prescription','Cancel','Send','<a href="Profile/update_email.html" class="button active blue_bg white_text">Update Email</a>')
    call_confirmationModals('.medi_doctor_notes','Doctor notes will be displayed here.', 'Doctor Notes',' ','OK','')
    call_confirmationModals('.medi_avaliability','This medicine is avaliable at the pharmacy', 'Medicine Avaliability',' ','OK','')


});
myApp.onPageInit('pharmacy_order', function (page) {

    $$('.search_pharmacy').click(function (e) {
        $$('.medication_search').addClass('search_in');

    });

    $$('.close_serach').click(function(e){
            $$('.medication_search').removeClass('search_in');

    });


    var mySearchbar = myApp.searchbar('.searchbar', {
        searchList: '.list-block-search',
        searchIn: '.item-title',
        customSearch : true,
        found : '.results_founded',
        onSearch :function () {
            console.log('searched');
            $$('.results_founded').show();


        },
        onEnable:function(){
            console.log('enabled')
        }
    });



});

// Start of BMI Calculation service


myApp.onPageInit('bmi_calculator', function (page) {

            var weight, height;

    loading_spinner();
    $$('.show_results').click(function (e) {
        height= $$('.bmi_height').val() / 100;
        weight= $$('.bmi_weight').val();
        // BMI Equation : (weight/height) / height;
        var bmi_val =  ((weight/height) /height).toFixed(1);
            $$('.result_val h3').text(bmi_val)

        // conditions of BMI values
        // BMI < 18.5 is underweight
        // BMI 18.5-24.9 is normal weight
        // BMI 25-29.9 is overweight
        // BMI 30-39.9 indicates obesity
        // BMI > 40 indicates morbid obesity

            if (bmi_val <= 18.5) {
                $$('.result_val h5').text('under weight');
                $$('.health_cal_results i').removeAttr('class').addClass('icon-underweight underweight');
            }

            else if  (bmi_val > 18.5 && bmi_val <= 24.9){
                $$('.result_val h5').text('normal weight');
                $$('.health_cal_results i').removeAttr('class').addClass('icon-normalweight normalweight');

            }
            else if  (bmi_val >= 25 && bmi_val <= 29.9) {
                $$('.result_val h5').text('over weight');
                $$('.health_cal_results i').removeAttr('class').addClass('icon-overweight overweight');

            }
            else if  (bmi_val >= 30 && bmi_val <= 39.9){
                $$('.result_val h5').text('indicates obesity');
                $$('.health_cal_results i').removeAttr('class').addClass('icon-obesity obesity');

            }
            else if (bmi_val >= 40 ){
                $$('.result_val h5').text('indicates morbid obesity');
                $$('.health_cal_results i').removeAttr('class').addClass('icon-morbidobesity morbidobesity');
            }



        $$('.loading').removeClass('hidden');
        setTimeout(function(){
            $$('.loading').addClass('hidden');
            $$('.info-card').removeClass('hidden');
        }, 3000);
    });

});

// End of BMI Calculation service


// Start of Body Fat Calculation service

myApp.onPageInit('Body_fat_calculator', function (page) {
    //rangeChange(80);
    var height,waist,hips,neck,gender;

    $$('.fat_gender').change(function(e){
        gender = $$(this).val();
        if (gender == "male"){
                $$('.hips').hide();
        }
        else{
            $$('.hips').show();
        }
    });
    loading_spinner();

    $$('.show_results').click(function (e) {

        height= $$('.fat_height').val()/ 2.54;
        neck= $$('.fat_neck').val() / 2.54;
        waist= $$('.fat_waist').val() /2.54 ;
        hips= $$('.fat_hips').val()/ 2.54;

        // Fat Equation in inches :
       // Men : 86.010*LOG(abdomen - neck) - 70.041*LOG(height) + 36.76
        // women  : 163.205*LOG(abdomen + hip - neck) - 97.684*LOG(height) - 78.387
        var fat_val;
        var disp_txt;
        if (gender == "male"){
            fat_val = parseInt((86.010*Math.log10(waist - neck) - 70.041*Math.log10(height) +  36.76).toFixed(1))
            console.log('male')

            // conditions of Body fat  values of Men
            // BFC  2-4 is Essential Fat
            // BFC  6 - 13 Athletes
            // BFC  14-17 is Fitness
            // BFC  18-25 Acceptable
            // BFC > 25 Obese

            console.log(fat_val)

            if (Math.sign(fat_val) === -1) {
                disp_txt = 'Error';
                $$('.result_val h5').text('Please enter valid data');
                $$('.health_cal_results i').removeAttr('class').addClass('icon-error obesity ');
            }

            else if (fat_val >= 0 && fat_val < 2) {
                disp_txt = fat_val + '%';
                $$('.result_val h5').text('Please enter valid data');
                $$('.health_cal_results i').removeAttr('class').addClass('icon-error obesity ');
            }
            else if (fat_val >= 2 && fat_val < 6) {
                disp_txt = fat_val + '%';
                $$('.result_val h5').text('Essential Fat');
                $$('.health_cal_results i').removeAttr('class').addClass('icon-underweight underweight');
            }

            else if  (fat_val >= 6 && fat_val < 14){
                disp_txt = fat_val + '%';
                $$('.result_val h5').text('Athletes');
                $$('.health_cal_results i').removeAttr('class').addClass('icon-m_athelete normalweight');

            }
            else if  (fat_val >= 14 && fat_val < 18) {
                disp_txt = fat_val + '%';
                $$('.result_val h5').text('Fitness');
                $$('.health_cal_results i').removeAttr('class').addClass('icon-m_fitness normalweight');

            }
            else if  (fat_val >= 18 && fat_val <= 25){
                disp_txt = fat_val + '%';
                $$('.result_val h5').text('Acceptable');
                $$('.health_cal_results i').removeAttr('class').addClass(' icon-overweight overweight');

            }
            else if (fat_val > 25 ){
                disp_txt = fat_val + '%';
                $$('.result_val h5').text('Obese');
                $$('.health_cal_results i').removeAttr('class').addClass('icon-obesity morbidobesity');
            }
        }
        else if (gender == "female"){

            fat_val =  parseInt((163.205*Math.log10(waist + hips - neck) - (97.684*Math.log10(height)) - 78.387).toFixed(1))
            console.log('female')

            // conditions of Body fat  values of Women
            // BFC  10-12 is Essential Fat
            // BFC  14 - 20 Athletes
            // BFC  21-24 is Fitness
            // BFC  25-31 Acceptable
            // BFC > 32 Obese
            if (fat_val <= 0 ) {
                disp_txt = 'Error';
                $$('.result_val h5').text('Please enter valid data');
                $$('.health_cal_results i').removeAttr('class').addClass('icon-error obesity ');
            }
           else if (fat_val > 0 && fat_val < 10) {
                disp_txt = fat_val + '%';
                $$('.result_val h5').text('Please enter valid data');
                $$('.health_cal_results i').removeAttr('class').addClass('icon-error obesity ');
            }

            else if (fat_val >= 10 && fat_val < 14) {
                disp_txt = fat_val + '%';
                $$('.result_val h5').text('Essential Fat');
                $$('.health_cal_results i').removeAttr('class').addClass('icon-f_essetialfat underweight');
            }

            else if  (fat_val >= 14 && fat_val < 21){
                disp_txt = fat_val + '%';
                $$('.result_val h5').text('Athletes');
                $$('.health_cal_results i').removeAttr('class').addClass('icon-f_athelete normalweight');

            }
            else if  (fat_val >= 21 && fat_val < 25) {
                disp_txt = fat_val + '%';
                $$('.result_val h5').text('Fitness');
                $$('.health_cal_results i').removeAttr('class').addClass('icon-f_fitness normalweight ');

            }
            else if  (fat_val >= 25 && fat_val <= 32){
                disp_txt = fat_val + '%';
                $$('.result_val h5').text('Acceptable');
                $$('.health_cal_results i').removeAttr('class').addClass('icon-f_acceptable overweight ');

            }
            else if (fat_val > 32 ){
                disp_txt = fat_val + '%';
                $$('.result_val h5').text('Obese');
                $$('.health_cal_results i').removeAttr('class').addClass('icon-f_obese obesity');
            }
        }

        console.log(disp_txt);

            $$('.result_val h3').text(disp_txt)


        $$('.loading').removeClass('hidden');
        setTimeout(function(){
            $$('.loading').addClass('hidden');
            $$('.info-card').removeClass('hidden');
        }, 3000);
    });


});
// End of Body Fat Calculation service


myApp.onPageInit('carb_protin_calculator', function (page) {

    loading_spinner();
    $$('.show_results').click(function (e) {
        $$('.loading').removeClass('hidden');
        setTimeout(function(){
            $$('.loading').addClass('hidden');
            $$('.info-card').removeClass('hidden');
        }, 2000);
    });

});
myApp.onPageInit('ovulation_period', function (page) {

    loading_spinner();
    $$('.show_results').click(function (e) {
        $$('.loading').removeClass('hidden');
        setTimeout(function(){
            $$('.loading').addClass('hidden');
            $$('.info-card').removeClass('hidden');
        }, 3000);
    });

});
myApp.onPageInit('pregenancy_due_date', function (page) {

    loading_spinner();
    $$('.show_results').click(function (e) {
        $$('.loading').removeClass('hidden');
        setTimeout(function(){
            $$('.loading').addClass('hidden');
            $$('.info-card').removeClass('hidden');
        }, 2000);
    });

});
myApp.onPageInit('feedback', function (page) {

    $$('.upload_files').click(function (e) {
        $$('.upload_progress').removeClass('hidden');
        setTimeout(function(){
            myApp.setProgressbar($$('.upload_progress .progressbar'), 65);

        }, 1000);
    });


});
myApp.onPageInit('request_for_referral', function (page) {

    $$('.upload_files').click(function (e) {
        $$('.upload_progress').removeClass('hidden');
        setTimeout(function(){
            myApp.setProgressbar($$('.upload_progress .progressbar'), 65);

        }, 1000);
    });


});



var percent1=20;
var percent2=100;



// function  rangeChange(val){
//
//     percent1 = val;
//     percent2 = (val/100)*500;
//
//    $$(".progress li")[0].attributes[1].nodeValue=percent1+"%";
//    $$(".progress li svg path")[6].attributes[1].nodeValue=percent2;
//     $$('.rang_percent').text(percent1+'%');
//
// }

var loggedin;
// Just for prototype purpose to check if user is logged in ot not so showing the profile settings
function loggedin_fn(log){
     loggedin = log

    if (loggedin == true){
        $$('.profile_cont .profile_data h3').eq(0).html('Mohammad Ahmad');
        $$('.profile_cont .profile_data h3').eq(1).html('File Number: <span>9906631</span>');
        $$('.profile_cont .profile_img').html('<img src="img/userImg.png">');
        $$('.edit_profile').show();
        $$('.menu_login').text('Log out').show();

    }
    else {
        $$('.profile_cont .profile_data h3').eq(0).html('Welcome,..');
        $$('.profile_cont .profile_data h3').eq(1).html('SBAHC');
        $$('.profile_cont .profile_img').html('<i class="icon-SBAHC"></i>');
        $$('.edit_profile').hide();
        $$('.menu_login').text('Login').hide();
    }
}


function timer(){
    var timer2 = "10:00";
    var interval = setInterval(function() {


        var timer = timer2.split(':');
        //by parsing integer, I avoid all extra string processing
        var minutes = parseInt(timer[0], 10);
        var seconds = parseInt(timer[1], 10);
        --seconds;
        minutes = (seconds < 0) ? --minutes : minutes;
        if (minutes < 0) clearInterval(interval);
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        //minutes = (minutes < 10) ?  minutes : minutes;
        $$('.counter_holder').html(minutes + ':' + seconds);
        timer2 = minutes + ':' + seconds;
    }, 1000);
}
 function call_confirmationModals(item,mesg,header,canceltext,oktext,aftertext){
     $$(item).on('click', function () {
         myApp.modal({
             title:  header,
             icon:'<i class="icon-profile"></i>',
             text: mesg,
             afterText : aftertext,
             buttons: [
                 {
                     text: canceltext,
                     close : true
                 },
                 {
                     text: oktext,
                     onClick: function() {
                         myApp.alert('Your request sent successfully','Confirm')
                     }
                 },
             ]
         })
     });
 }

function createCalendar(id){
    var myCalendar = myApp.calendar({
        input: id,
        onOpen:function (){
            $$(id).focus().addClass('filled');
        },
        onClose :function (){
            $$(id).focus().addClass('filled')
        },
        weekendDays:[5],
        firstDay:6,

    });
}

function createTimePicker(input){
    var today = new Date();

    var pickerInline = myApp.picker({
        input: input,
        toolbar: true,
        rotateEffect: false,
        convertToPopover:true,
        onlyOnPopover: true,
        onOpen:function (){
            $$(input).focus().addClass('filled');
        },

        onChange: function (picker, values, displayValues) {
            var daysInMonth = new Date(picker.value[2], picker.value[0]*1 + 1, 0).getDate();
            if (values[1] > daysInMonth) {
                picker.cols[1].setValue(daysInMonth);
            }
        },

        formatValue: function (p, values, displayValues) {
            return displayValues[0] + ': ' + values[1] + ': ' + values[2] ;
        },

        cols: [

            // Hours
            {
                values: (function () {
                    var arr = [];
                    for (var i = 0; i <= 23; i++) { arr.push(i); }
                    return arr;
                })(),
            },
            // Divider
            {
                divider: true,
                content: ':'
            },
            // Minutes
            {
                values: (function () {
                    var arr = [];
                    for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
                    return arr;
                })(),
            },
            // ampm
            {
                values: ['AM','PM'],
            }
        ]
    });
};
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September' , 'October', 'November', 'December'];

function create_inline_calendar(item){

    var calendarInline = myApp.calendar({
        container: item,
        value: [new Date()],
        toolbar:true,
        weekHeader: true,
        dateFormat: 'dd MM yyyy',
        disabled:[new Date(2017, 25, 12), new Date(2017, 12, 24)],
        weekendDays:[5],
        firstDay:6,
        toolbarTemplate:
        '<div class="toolbar calendar-custom-toolbar">' +
        '<div class="toolbar-inner">' +
        '<div class="left">' +
        '</div>' +
        '<div class="right">' +
        '<a href="#" class="link prev-month icon-only"><i class="icon-back"></i></a>' +
        '<a href="#" class="link next-month icon-only"><i class="icon-arrow-right"></i></a>' +
        '</div>' +
        '</div>' +
        '</div>',
        onOpen: function (p) {
            $$('.calendar-custom-toolbar .left').html('<span>'+ monthNames[p.currentMonth] +'</span><span>' + p.currentYear +'</span>');
            $$('.calendar-custom-toolbar .right .prev-month').on('click', function () {
                calendarInline.prevMonth();
            });
            $$('.calendar-custom-toolbar .right .next-month').on('click', function () {
                calendarInline.nextMonth();
            });
        },
        onMonthYearChangeStart: function (p) {
            $$('.calendar-custom-toolbar .left').html('<span>'+ monthNames[p.currentMonth] +'</span><span>' + p.currentYear +'</span>');
           // alert($$('.picker-calendar-selected-date').text())

        }

    });
}

function create_autocomplete(input, placeholder, urls){
    var autocompleteDropdownAjax = myApp.autocomplete({
        input: input,
        openIn: 'dropdown',
        preloader: true, //enable preloader
        valueProperty: 'id', //object's "value" property name
        textProperty: 'name', //object's "text" property name
        limit: 20, //limit to 20 results
        dropdownPlaceholderText: placeholder ,
        expandInput: true, // expand input
        source: function (autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            // Show Preloader
            autocomplete.showPreloader();
            // Do Ajax request to Autocomplete data
            $$.ajax({
                url: urls ,
                method: 'GET',
                dataType: 'json',
                //send "query" to server. Useful in case you generate response dynamically
                data: {
                    query: query
                },
                success: function (data) {
                    // Find matched items
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
                    }
                    // Hide Preoloader
                    autocomplete.hidePreloader();
                    // Render items by passing array with result items
                    render(results);
                }
            });
        }
    });
}

// loading spinner creation
function loading_spinner (ele){
    var i;
    for(i=1;i<= 12; i++){
        var circle = '<div class="sk-circle'+i+' sk-child"></div>';
        $$('.loading').addClass('sk-circle').append(circle);
    }

}



function GoInFullscreen(element) {
    if(element.requestFullscreen)
        element.requestFullscreen();
    else if(element.mozRequestFullScreen)
        element.mozRequestFullScreen();
    else if(element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
    else if(element.msRequestFullscreen)
        element.msRequestFullscreen();
}



// Generate dynamic page

  