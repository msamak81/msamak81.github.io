
(function($){
    'use strict'
    // Animate Statistics Numbers
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $('.titl-js').tilt({


    });



    // Custom bar chart function
    var chart_cont = $('.bar_charts'),
        chart_val= [1200000, 600000, 1900000, 2400000 ],
        chart_label = ['March', 'April', 'May', 'June'];

    $('.charts_3d').each(function(i,e){
        var data_src = eval($(this).data('source')),
            id = $(this).attr('id'),
             max_val = Math.max.apply(Math,data_src),
            compare_val = max_val + .5 * max_val;

        $.each(data_src, function(key, value) {
            console.log(value);
            var val_percentage = value / compare_val * 100;

            console.log(chart_label[key])
            chart_cont.append('<div class="chart_item" style="height:'+val_percentage+'%;">'+value +'</div>');

            setTimeout(function(){
                $('#'+ id).append('' +
                    '<div class="graphcontainer">' +
                    '   <div class="graphbackground"></div>' +
                    '   <div class="graphbar start_animation" style="bottom:'+ val_percentage+'%;"></div>' +
                    '   <div class="graphforeground"></div>' +
                    '<h1 class="label">'+chart_label[key]+'</h1>'+
                    '</div>'

                );
            },1000)
        })
    });




    // anime({
    //     targets: '.hiddenOverflow',
    //     translateX: 250,
    //     autoplay: true,
    //     easing: 'easeInOutSine',
    //     delay: 5000
    // });



    // Reveal pages effect

    $('.start_view').bind('click', function(event){

        $('body').addClass('dark switch-Layout');
        reveal('bottom');
        $('.Section_preload').removeClass('out').addClass('in');
        $('.fill').addClass('filled');

        setTimeout(function () {
            $('.Section_preload').removeClass('in').addClass('out');
            $('.animated_sections').removeClass('inRight').addClass('inLeft');
            $('.fill').removeClass('filled');
        }, 4000); // Execute something() 1 second later.

        return false;

    });
    $('.back_home').bind('click', function(event){
        $('body').removeClass('dark switch-Layout');
        reveal('top');
        $('.animated_sections').removeClass('inLeft').addClass('inRight');

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
        $('#stars').append('<div class="star" data-parallaxify-range="' + Math.round(600*Math.random()) + '" style="top: ' + Math.round(height*Math.random()) + 'px; left: ' + Math.round(width*Math.random()) + 'px; width: ' + size + 'px; height: ' + size + 'px; background: ' + color + '; box-shadow: 0px 0px 10px ' + color + ';"></div>');
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






