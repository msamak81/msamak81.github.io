
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



    console.log(currentReleaseMonths);



    // Custom bar chart function
        var chart_val= [378500000, 416000000, 357000000 ],
         payment_val= [56700000, 58900000, 561000000 ],
         users_val_ios= [2500000, 2600000, 2300000 ],
         users_val_android= [1300000, 1500000, 1300000 ],

            chart_label = currentReleaseMonths,
        // sum = chart_val.reduce(function(a, b) { return a + b; }, 0);
            current = chart_val[2],
            currentMonth = chart_label[2],
            currentMonthShort=  String(currentMonth).substring(0, 3);

        // console.log(sum.toFixed(0).replace(/\B(?=(?:\d{3})+(?!\d))/g, ','))


    $('.current_release .month').text(currentMonth);
    $('.current_release .year').text(year);


    $('.charts').each(function(i,e){
        var data_src = eval($(this).data('source')),
            id = $(this).attr('id'),
             max_val = Math.max.apply(Math,data_src),
            compare_val = max_val + .5 * max_val;

        $.each(data_src, function(key, value) {
            var val_percentage = value / compare_val * 100;

            setTimeout(function(){
                var difference,
                    diff_icon,
                    diff_status,
                    currentMonth = String(chart_label[key]).substring(0, 3);

                if (key == 0){
                    difference = relDiff(data_src[key], data_src[key+1]).toFixed(2);

                }
                else{
                    difference = relDiff(data_src[key], data_src[key-1]).toFixed(2);
                }

                if (difference > 0){
                    diff_icon = "fa-arrow-up";
                    diff_status = "positive";
                }
                else {
                    diff_icon = "fa-arrow-down";
                    diff_status = "negative";
                }

           var bar_chart_html ='<div class="chart_item animated fadeIn" data-month="'+currentMonth+'">'+
                                '<span class="compare_chart '+diff_status+'">'+
                                '<i class="fa '+diff_icon+'"></i>'+
                                '<i class="compare_percent">'+ difference +'% </i>'+
                                '</span>'+
                                '<span class="chart_bg animated expandInUp" style="height:'+val_percentage+'%;--delay:400ms;--duration:.8s;">'+MoneyFormat(value)+'</span>' +
                                '<span class="chart_label animated slideInUp" style="--delay:450ms;--duration:.8s">'+currentMonth+'</span>' +
                                '</div>';

                $('#'+ id).append(bar_chart_html);

            },1000)
        });

        var parents =  $('#'+ id).parents('.section');
        parents.find('.charts_options').append('<ul/>')
        $.each(chart_label, function(key, value) {
            parents.find('.charts_options ul').append('<li class="chart_label"><a href="#" data-key="'+key+'" data-month="'+String(chart_label[key]).substring(0, 3)+'"><i class="fa fa-calendar-o"></i><span>'+String(value).substring(0, 3) +'</span></a></li>');
            parents.find('.chart_label a').on('click', function(){

                parents.find('.chart_label a').removeClass('active');
                $(this).addClass('active');
                var key = $(this).data('key'),
                    month = $(this).data('month'),
                    currentNumber =  0;

                currentNumber=  data_src[key];

                parents.find('.chart_item').removeClass('current').addClass('faded');
                parents.find('.chart_item[data-month ="'+month+'"]').removeClass('faded').addClass('current');


                parents.find('.total_revenue').prop('Counter',0).animate({
                    Counter: currentNumber
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now).toLocaleString('en'));
                    }
                });
                return false

            })

        });

    });




    // Reveal pages effect

    $('.start_view').bind('click', function(event){
        $('body').addClass('dark switch-Layout');
        reveal('bottom');
        setTimeout(function () {
            $('.sections .section:first-child').addClass('current');
            $('.nav_holder, header.ip-header').addClass('current');

            // highlight the current release month on load
            $('.chart_label a[data-month="'+currentMonthShort+'"]').addClass('active');
            $('.chart_item[data-month ="'+currentMonthShort+'"]').addClass('current');
            // Animate Statistics Numbers
            $('.count').each(function () {
                $(this).parent().addClass('filled');
                $(this).prop('Counter',0).animate({
                    Counter: current
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now).toLocaleString('en'));
                    }
                });


            });

        }, 1000); // Execute something() 1 second later.

        return false;

    });
    $('.back_home').bind('click', function(event){
        $('.sections .section:first-child').removeClass('current');
        $('.nav_holder, header.ip-header').removeClass('current');
        // highlight the current release month on load
        $('.chart_label a').removeClass('active');
        $('.chart_item').removeClass('current');

        setTimeout(function () {

            $('body').removeClass('dark switch-Layout');
            reveal('top');


        }, 500); // Execute something() 1 second later.

        return false;

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




    // Star background parallax
    var i,
        size,
        color,
        width = $(window).width(),
        height = $(window).height();

    for (i = 1; i <= 350; i++) {
        size = Math.ceil(3*Math.random());
        $('#stars').append('<div class="star" data-parallaxify-range="' + Math.round(100*Math.random()) + '" style="top: ' + Math.round(height*Math.random()) + 'px; left: ' + Math.round(width*Math.random()) + 'px; width: ' + size + 'px; height: ' + size + 'px;"></div>');
    }

    for (i = 1; i <= 30; i++) {
        size = Math.ceil(5*Math.random()) + 2;
        $('#stars').append('<div class="star" data-parallaxify-range="' + Math.round(400*Math.random()) + '" style="top: ' + Math.round(height*Math.random()) + 'px; left: ' + Math.round(width*Math.random()) + 'px; width: ' + size + 'px; height: ' + size + 'px;"></div>');
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



}(jQuery));






