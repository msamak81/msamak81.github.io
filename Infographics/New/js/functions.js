
(function($){
    'use strict'


    function relDiff(a, b) {
        return  100 * ( ( a - b ) / ( (a+b)/2 ) );
    }

    function MoneyFormat(labelValue)
    {
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


    // Adding current release name and year

    $('.current_release .release_name').text(currentReleaseName);
    $('.current_release .year').text(year);


    // Custom bar chart function
    var revenue_new= [378500000, 416000000, 358000000 ],
        revenue_last= [278500000, 356000000, 458000000 ],
        chart_label  = currentReleaseMonths;


    $('.charts').each(function(i,e){
        var data_src = eval($(this).data('source')),
            data_src_last = eval($(this).data('past')),
            id = $(this).attr('id'),
            max_val = Math.max.apply(Math,data_src),
            preVal =$(this).data('prev') ,
            compare_val = max_val + .5 * max_val;

        console.log(preVal)

        $.each(data_src, function(key, value) {
            var val_percentage = value / compare_val * 100;


            setTimeout(function(){
                var difference,
                    diff_icon,
                    diff_status,
                    currentMonth =  String(chart_label[key]).substring(0, 3),
                    prevMonth;


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
                }
                else {
                    diff_icon = "fa-arrow-down";
                    diff_status = "negative";
                }

                var bar_chart_html ='<div class="chart_item" data-month="'+currentMonth+'">'+
                    '<span class="compare_chart '+diff_status+'">'+
                    '<i class="fa '+diff_icon+'"></i>'+
                    '<i class="compare_percent">'+ difference +'% </i>'+
                    '</span>'+
                    '<span class="chart_bg animated expandInUp" style="height:'+val_percentage+'%;--delay:400ms;--duration:.8s;">'+MoneyFormat(value)+'</span>' +
                    '<span class="chart_label animated slideInUp" style="--delay:450ms;--duration:.8s">'+currentMonth+'</span>' +
                    '</div>';



                var bar_chrs_line='<div class="chart_item" data-month="'+currentMonth+'">'+
                    // comapre div class
                    '<div class="compare_chart '+diff_status+'">'+
                    '<div class="main_value">'+
                    '<h4>'+currentMonth+'</h4>'+
                    '<h2><span class="count total_revenue">'+value+'</span>'+
                    '<span class="abbr">sar</span></h2></div>'+
                    '<div class="diff_val">'+
                    '<i class="fa '+diff_icon+'"></i>'+
                    '<i class="compare_percent">'+ difference +'% </i></div>'+
                    '<div class="second_value"><h4>FEB</h4>'+
                    '<h2><span class="count ">358,000,000</span>'+
                    '<span class="abbr">sar</span></h2></div></div>'+
                    '<div class="chart_bg animated expandInUp" style="height:'+val_percentage+'%;--delay:400ms;--duration:.8s;"><span class="value">'+MoneyFormat(value)+'</span>'+
                    '<div class="chart_label animated slideInUp" style="--delay:450ms;--duration:.8s">'+currentMonth+'</div></div></div>';







                var bar_chart_new = '<div class="chart_item" data-month="'+currentMonth+'">'+
                    '<div class="chart_bg animated expandInUp" style="height:'+val_percentage+'%;--delay:400ms;--duration:.8s;">'+
                    '<div class="values"><h3><span class="year">'+year+'</span> <span class="month">'+chart_label[key]+'</span></h3>'+
                    '<h2><span class="abbr">sar</span><span class="count total_revenue" data-count="'+value+'">'+value+'</span></h2>'+
                    '</div>'+
                    '<div class="diff_val '+diff_status+'"><i class="fa '+diff_icon+'"></i><i class="compare_percent">'+difference+'%</i></div>'+
                    '<div class="second_value"><h3><span class="year">'+prev_year+'</span><span class="month">'+chart_label[key]+'</span></h3>'+
                    ' <h2><span class="abbr">sar</span><span class="count ">'+Math.ceil(data_src_last[key]).toLocaleString('en')+'</span></h2>' +
                    '</div>'+
                    '</div>'+
                    '</div>';





                $('#'+ id).append(bar_chart_new);

            },1000)
        });

        $.each(chart_label, function(key, value) {
            $('.charts_options ul').append('<li class="chart_label"><a href="#" data-key="'+key+'" data-month="'+chart_label[key]+'"><i class="fa">0'+(key+1)+'</i><span>'+value +'</span></a></li>');

            $('.chart_label a, .chart_item').on('click', function(){

                $('.chart_label a').removeClass('active');
                $(this).addClass('active');
                var key = $(this).data('key'),
                    month = $(this).data('month'),
                    currentNumber=  0;

                currentNumber=  data_src[key];

                $('.chart_item').removeClass('current').addClass('faded');
                $('.chart_item[data-month ="'+month+'"]').removeClass('faded').addClass('current');


                $('.total_revenue').prop('Counter',0).animate({
                    Counter: currentNumber
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now).toLocaleString('en'));
                    }
                });

            })
        });

    });




    // Reveal pages effect

    $('.start_view').bind('click', function(event){
        $('body').addClass('dark ');
        reveal('bottom');
        setTimeout(function () {
            $('.sections .section:first-child').addClass('current');
            $('.nav_holder, header.ip-header').addClass('current');

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
                        $(this).text(Math.ceil(now).toLocaleString('en'));
                    }
                });


            });

        }, 2000); // Execute something() 1 second later.

        return false;

    });
    $('.back_home').bind('click', function(event){
        $('.sections .section:first-child').removeClass('current');
        $('.nav_holder, header.ip-header').removeClass('current');

        setTimeout(function () {

            $('body').removeClass('dark ');
            reveal('top');


        }, 500); // Execute something() 1 second later.

        return false;

    });

    // Star background parallax
    var i,
        size,
        color,
        width = $(window).width(),
        height = $(window).height();

    for (i = 1; i <= 350; i++) {
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








}(jQuery));






