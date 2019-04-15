
(function($){
    'use strict'


    function relDiff(a, b) {
        return  100 * ( ( a - b ) / ( (a+b)/2 ) );
    }

    function MoneyFormat(labelValue, type)
    {
        if (type == "full" || type == undefined){
            // Nine Zeroes for Billions

            return Math.abs(Number(labelValue)) >= 1.0e+9

                ? Math.abs(Number(labelValue)) / 1.0e+9 + '<span class="abbr">B</span>'
                // Six Zeroes for Millions
                : Math.abs(Number(labelValue)) >= 1.0e+6

                    ? Math.abs(Number(labelValue)) / 1.0e+6 + '<span class="abbr">M</span>'
                    // Three Zeroes for Thousands
                    : Math.abs(Number(labelValue)) >= 1.0e+3

                        ? Math.abs(Number(labelValue)) / 1.0e+3 + '<span class="abbr">K</span>'

                        : Math.abs(Number(labelValue));
        }
        else if(type == "num"){

            // Nine Zeroes for Billions
            return Math.abs(Number(labelValue)) >= 1.0e+9

                ? Math.abs(Number(labelValue)) / 1.0e+9
                // Six Zeroes for Millions
                : Math.abs(Number(labelValue)) >= 1.0e+6

                    ? Math.abs(Number(labelValue)) / 1.0e+6
                    // Three Zeroes for Thousands
                    : Math.abs(Number(labelValue)) >= 1.0e+3

                        ? Math.abs(Number(labelValue)) / 1.0e+3

                        : Math.abs(Number(labelValue));
        }
        else if(type == "str"){

            // Nine Zeroes for Billions
            return Math.abs(Number(labelValue)) >= 1.0e+9

                ? 'B'
                // Six Zeroes for Millions
                : Math.abs(Number(labelValue)) >= 1.0e+6

                    ? 'M'
                    // Three Zeroes for Thousands
                    : Math.abs(Number(labelValue)) >= 1.0e+3

                        ? 'K'

                        : '';
        }




    }


    var date= new Date(),
        year = date.getFullYear(),
        prev_year = year - 1,
        months = date.getMonth(),
        monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        releases = ['Altair', 'Birdun', 'Capella' , 'Dorado' , 'Enif' , 'Fornax'],
        currentReleaseMonths,
        currentReleaseName,
        chart_label = [];




    // getting current release name and months
    console.log(months, year);

    if ((months > 0) && (months < 2)) {
        currentReleaseName = String(releases[0]).toLowerCase();
        currentReleaseMonths = monthsArr.slice(0,3);
    }

    else if ((months > 1) && (months < 4)) {
        currentReleaseName = String(releases[1]).toLowerCase();
        currentReleaseMonths = monthsArr.slice(1,4);
    }

    else if ((months > 3) && (months < 6)) {
        currentReleaseName = String(releases[2]).toLowerCase();
        currentReleaseMonths = monthsArr.slice(3,6);
    }

    else if ((months > 5) && (months < 8)) {
        currentReleaseName = String(releases[3]).toLowerCase();
        currentReleaseMonths = monthsArr.slice(5,8);
    }

    else if ((months > 7) && (months < 10)) {
        currentReleaseName = String(releases[4]).toLowerCase();
        currentReleaseMonths = monthsArr.slice(7,10);
    }

    else if ((months > 9) && (months < 12)) {
        currentReleaseName = String(releases[5]).toLowerCase();
        currentReleaseMonths = monthsArr.slice(9,12);
    }


    // adding active class to releases based on the month

    $('.title .releases a ').removeClass('active');
    $('.title .releases a[data-release ="'+currentReleaseName+'"]').addClass('active');





    // Custom bar chart function
    var revenue_new= [378500000, 416000000, 358000000 ],
        revenue_last= [343000000, 374000000, 279000000 ],

        payment_val= [56700000, 58900000, 56100000 ],
        payment_last= [31990000, 33060000, 25070000 ],


        ios= [2500000, 2600000,2300000],
        android=[1300000, 1500000, 1300000],

          activeUsers = [{
                    ios: 2600000,
                    android: 1560000,

                }, {
                    ios: 2450000,
                    android: 1500000,
                }, {
                    ios: 2340000,
                    android: 1740000,
                }];

        chart_label  = currentReleaseMonths;

    // Adding current release name and year
    var currentMonth = chart_label[2],
        currentMonthShort=  String(currentMonth).substring(0, 3);

    $('.current_release .release_name').text(currentReleaseName);
    $('.current_release .month').text(currentMonth);
    $('.current_release .year').text(year);


    $('.charts').each(function(i,e){
        var data_src = eval($(this).data('source')),
            data_src_last = eval($(this).data('past')),
            id = $(this).attr('id'),
            max_val = Math.max.apply(Math,data_src),
            preVal =$(this).data('prev') ,
            compare_val = max_val + .5 * max_val,
            bar_chart_new,
            sum = data_src.reduce(function(a, b) { return a + b; }, 0);



        $.each(data_src, function(key, value) {
            var val_percentage = Math.round(value / compare_val * 100);

            setTimeout(function(){
                var difference,
                    diff_icon,
                    diff_status,
                    currentMonth =  String(chart_label[key]).substring(0, 3),
                    prevMonth;

                if (preVal == undefined ){

                    preVal = data_src[key + 1];
                }

                if (key == 0){
                    difference = relDiff(data_src[key], preVal).toFixed(2);
                    preVal = preVal;
                    prevMonth = monthsArr[key];

                }
                else{
                    difference = relDiff(data_src[key], data_src[key-1]).toFixed(2);
                    preVal = data_src[key-1];
                    prevMonth = chart_label[key - 1];
                }

                if (difference > 0){
                    diff_icon = "fa-arrow-up";
                    diff_status = "positive";
                    difference = "+" + difference;

                }
                else {
                    diff_icon = "fa-arrow-down";
                    diff_status = "negative";
                }
            if ($(e).hasClass('users')){

                $(e).parents('.user_div').find('.users_count').data('count', MoneyFormat(sum, "num") )
                $(e).parents('.user_div').find('.users_count').next('.abbr').text(MoneyFormat(sum, "str") )

                bar_chart_new = '<div class="stat animated fadeIn" style="--val:'+val_percentage+'%;--delay:400ms;--duration:.8s;"><div class="stat_heading"><h4>'+chart_label[key]+'</h4>' +
                                '<span class="diff '+diff_status+'"><i class="fa '+diff_icon+'"></i>'+difference+'%</span><span class="val">'+ MoneyFormat(value, "full")+'</span></div>'+
                                '<div class="stat_graph"><span class="bg animated" style="--val:'+val_percentage+'%;--delay:460ms;--duration:.8s;"></span></div></div>';

            }
            else{
                bar_chart_new = '<div class="chart_item" data-month="'+currentMonth+'" style="--val:'+val_percentage+'%;--delay:400ms;--duration:.8s;">'+
                    '<div class="chart_bg animated expandInUp" style="--val:'+val_percentage+'%;--delay:400ms;--duration:.8s;">'+
                    '<div class="values"><h3><span class="year">'+year+'</span> <span class="month">'+chart_label[key]+'</span></h3>'+
                    '<h2><span class="abbr">sar</span><span class="count total_revenue" data-count="'+ MoneyFormat(value, "num")+'"></span><span class="abbr">'+MoneyFormat(value, 'str')+'</span></h2>'+
                    '</div>'+
                    '<div class="diff_val '+diff_status+'"><i class="fa '+diff_icon+'"></i><i class="compare_percent">'+difference+'%</i></div>'+
                    '<div class="second_value"><h3><span class="year">'+prev_year+'</span><span class="month">'+chart_label[key]+'</span></h3>'+
                    ' <h2><span class="abbr">sar</span><span class="count ">'+Math.ceil(data_src_last[key]).toLocaleString('en')+'</span></h2>' +
                    '</div>'+
                    '</div>'+
                    '<div class="chart_icons"></div></div>';
            }



                $('#'+ id).append(bar_chart_new);

            },1000)
        });

    });

    $(window).on('load',function()
    {
        var width = $(this).width();
        if(width < 993)
        {
            console.log('Responsive Mode')
            $('.stars1, .stars2, .stars3').remove();

        }
        else{

            $('.stars_bg .stars_holder').append('<div class="stars1"/><div class="stars2"/><div class="stars3"/>')

            var i,
                size,
                color,
                width = $(window).width(),
                height = $(window).height();

            for (i = 1; i <= 100; i++) {
                size = Math.ceil(3*Math.random());
                $('.star_parallax').append('<div class="star" data-parallaxify-range="' + Math.round(100*Math.random()) + '" style="top: ' + Math.round(height*Math.random()) + 'px; left: ' + Math.round(width*Math.random()) + 'px; width: ' + size + 'px; height: ' + size + 'px;"></div>');
            }

            for (i = 1; i <= 30; i++) {
                size = Math.ceil(5*Math.random()) + 2;
                $('.star_parallax').append('<div class="star" data-parallaxify-range="' + Math.round(400*Math.random()) + '" style="top: ' + Math.round(height*Math.random()) + 'px; left: ' + Math.round(width*Math.random()) + 'px; width: ' + size + 'px; height: ' + size + 'px;"></div>');
            }

            for (i = 1; i <= 15; i++) {
                size = Math.ceil(5*Math.random()) + 5;
                color = 'rgba(' + Math.round(256*Math.random()) + ', ' + Math.round(256*Math.random()) + ', ' + Math.round(256*Math.random()) + ', ' + (Math.round(100*Math.random())/100) + ')';
                $('.star_parallax').append('<div class="star" data-parallaxify-range="' + Math.round(600*Math.random()) + '" style="top: ' + Math.round(height*Math.random()) + 'px; left: ' + Math.round(width*Math.random()) + 'px; width: ' + size + 'px; height: ' + size + 'px; background: ' + color + '; box-shadow: 0px 0px 10px ' + color + ';"></div>');
            }

            $.parallaxify({
                positionProperty: 'transform',
                responsive: true,
                motionType: 'natural',
                mouseMotionType: 'gaussian',
                motionAngleX: 70,
                motionAngleY: 70,
                alphaFilter: 0.5,
                adjustBasePosition: true,
                alphaPosition: 0.025,
            });

        }

    });

    // Fake loader function
    var  container = $('#wrap' );
    window.addEventListener( 'scroll', noscroll );
    container.addClass( 'loading' );

    setTimeout(function () {
        container.removeClass('loading' );
        container.addClass('loaded' );
        window.removeEventListener( 'scroll', noscroll );
    }, 2000); // Execute something() 1 second later.

    function noscroll() {
        window.scrollTo( 0, 0 );
    }

    function PathLoader( el ) {
        this.el = el;
        // clear stroke
        this.el.style.strokeDasharray = this.el.style.strokeDashoffset = this.el.getTotalLength();
    }
    PathLoader.prototype._draw = function( val ) {
        this.el.style.strokeDashoffset = this.el.getTotalLength() * ( 1 - val );
    }

    PathLoader.prototype.setProgress = function( val, callback ) {
        this._draw(val);
        if( callback && typeof callback === 'function' ) {
            // give it a time (ideally the same like the transition time) so that the last progress increment animation is still visible.
            setTimeout( callback, 200 );
        }
    }
    PathLoader.prototype.setProgressFn = function( fn ) {
        if( typeof fn === 'function' ) { fn( this ); }
    }


    var loader = new PathLoader( document.getElementById( 'ip-loader-circle' ) );

    // simulate loading something..
    var simulationFn = function(instance) {
        var progress = 0,
            interval = setInterval( function() {
                progress = Math.min( progress + Math.random() * 0.1, 1 );

                instance.setProgress( progress );

                // reached the end
                if( progress === 1 ) {

                    clearInterval( interval );
                }
            }, 80 );
    };

    loader.setProgressFn( simulationFn );




    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        longSwipes:true,
        shortSwipes:true,
        followFinger:true,
        keyboard: {
            enabled: true,
        },
        preventInteractionOnTransition: false,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


    swiper.on('slideNextTransitionEnd', function () {
        reveal('bottom');
        // ReloadVideo()

    });
    swiper.on('slidePrevTransitionEnd', function () {
        reveal('top');
        // ReloadVideo()

    });
    swiper.on('slideChange',function(e){
        setTimeout(function () {
            $('.section').removeClass('current');

            if($('.swiper-slide-active').find(' .swiper-container-features').length){

                setTimeout(function () {
                    $('.swiper-container-features .swiper-slide-active .section').addClass('current');
                },1000);
            }
            else{
                $('.swiper-container').find('.swiper-slide-active .section').addClass('current');
                $('.swiper-container-features .swiper-slide-active .section').removeClass('current');
            }
        }, 1000); // Execute something() 1 second later.


        var currentindex = swiper.realIndex;
        $('.menu_items nav .nav_item').removeClass('active');
        $('.menu_items nav .nav_item[data-slide='+currentindex+']').addClass('active');


        console.log(currentindex)
        if( currentindex > 0){
            $('body').addClass('switch-Layout');


            setTimeout(function () {
                $('header.ip-header').addClass('current');

                // Animate Statistics Numbers
                $('.count').each(function () {
                    $(this).parent().addClass('filled');
                    var counter  = $(this).data('count');
                    $(this).prop('Counter',0).animate({
                        Counter: counter
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function (now) {

                            if (now == Math.floor(now)) {
                                now = Math.ceil(now);

                            } else {
                                now= now.toFixed(1);
                            }

                            $(this).text(now);


                        }
                    });

                     playVideo();




                });

            }, 2200); // Execute something() 1 second later.


            return false;

        }

        else{

            $('body').removeClass('switch-Layout');
            $('header.ip-header').removeClass('current');

        }
    });

    var swiperFeatures = new Swiper('.swiper-container-features', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination-features',
            dynamicBullets: true,
        },

    });

    swiperFeatures.on('slideChange',function(e){
        setTimeout(function () {
            $('.swiper-container-features .section').removeClass('current');
            $('.swiper-container-features .swiper-slide-active .section').addClass('current');
        }, 10); //

        playVideo();
    });


function playVideo(){

    $('.swiper-container-features .swiper-slide').each(function(i,e){

        var id = $(e).find('.features_video ').attr('id'),
             video = document.getElementById(id);
        if( $(e).find('.features_video ').length ) {
            video.load();
            setTimeout(function () {

                video.play();

            }, 500); // Execute something() 1 seco
        }
    })






}

// function ReloadVideo(){
//         var id = $('swiper-container-features .swiper-slide-active').find('.features_video ').attr('id'),
//             video = document.getElementById(id);
//
//     if( $('swiper-container-features .swiper-slide-active').find('.features_video ').length ) {
//         video.load();
//     }
// }

// nav menu functions
    $('.menu_icon').click(function(){
        console.log('test')
        $(this).parents('.main_menu').toggleClass('current').find('.c015').toggleClass('navOpen');
    })
    $('.menu_items nav .nav_item:first').addClass('active');

    $('.menu_items nav .nav_item').click(function(){
        var $this = $(this),
            slideNum = $this.data('slide');
        $('.menu_items nav .nav_item').removeClass('active');

        swiper.slideTo(slideNum, 0);
        $this.addClass('active');
        $(this).parents('.main_menu').removeClass('current').find('.c015').toggleClass('navOpen');
        return false;

    })

}(jQuery));






