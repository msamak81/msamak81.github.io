
$(document).ready(function(){
    "use strict";

    // just for Front end including the header and footer templates
    $("header").load("../../templates/templates.html #header");
    $("footer").load("../../templates/templates.html #footer");
    $("#panel").load("../../templates/templates.html #widgetspanel");

    // just for Front end including the header and footer templates
    $("header").load("../../templates/templates.html #header");
    $("footer").load("../../templates/templates.html #footer");
    $("#panel").load("../../templates/templates.html #widgetspanel");

    $(window).on('load',function(){
        if ( $(this).width() < 993 ) {
            $('.quicklinks').detach().insertAfter('.app_store');
            $('header .snav #otherswrvices').detach().appendTo('#msnav .snav');
            $('.widgets_btn').detach().appendTo('.control');
            $('.languages').detach().insertBefore('.profile .dropdown_list ul li:last');
        }
    });
    $(window).on('resize',function(){
        if ( $(this).width() < 993 ) {
            $('.quicklinks').detach().insertAfter('.app_store');
            $('header .snav #otherswrvices').detach().appendTo('#msnav .snav');
            $('.widgets_btn').detach().appendTo('.control');
            $('.languages').detach().insertBefore('.profile .dropdown_list ul li:last');
        } else {
            $('.quicklinks').detach().insertAfter('.copyrights');
            $('#msnav .snav #otherswrvices').detach().appendTo('header .snav');
            $('.widgets_btn').detach().insertAfter('.mainheader .wrapper');
            $('.languages').detach().insertBefore('.profile');
        }
    });
    // WOW animation init
    //new WOW().init();

    // Owl carousel functions
    function generateCarousel(){
        var carouselItem = $('.owl-carousel');
        carouselItem.each(function(index,ele) {
            var $this = $(ele),
                id = $this.attr('id'),
                desktop = $this.data('items-desktop'),
                tablet = $this.data('items-tablet'),
                mobile = $this.data('items-mobile');

            var carousel = $("#"+id).owlCarousel({
                loop:false,
                margin:10,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:eval(mobile),
                        nav:false
                    },
                    600:{
                        items:eval(tablet),
                        nav:false
                    },
                    1000:{
                        items:eval(desktop),
                        nav:false,
                        loop:false
                    }
                }
            });

        });
    }

    // charts init functions
    var barchartcolors =['#977aa8','#712b81', '#da3f7b', '#fadf46', '#fab53c', '#977aa8'];
    var topdialedvalues_2 =  [66, 30, 25, 95, 80, 60 ];
    var topdialednumbers =  ['0534343963', '0112345678', '0512387653', '0531234567', '0567658904', '0123456789' ];
    var packages = ['#712c81', 'rgba(242, 242, 242, 0.1)'];
    var freebies = ['#d73474', 'rgba(242, 242, 242, 0.1)'];
    var localinternet =  [40, 60 ];
    var freebiesData =  [70, 30 ];
    var topdialedvalues =[
                        {
                        label: '0534343963',
                        backgroundColor: "#977aa8",
                        data: [66]
                    }, {
                        label: '0112345678',
                        backgroundColor: "#712b81",
                        data: [30]
                    }, {
                        label: '0512387653',
                        backgroundColor: "#da3f7b",
                        data: [25]
                    }, {
                        label: '0531234567',
                        backgroundColor: "#fadf46",
                        data: [95]
                    }, {
                        label: '0567658904',
                        backgroundColor: "#fab53c",
                        data: [80]
                    }, {
                        label: '0123456789',
                        backgroundColor: "#977aa8",
                        data: [60]
                    }
                ];
    var previousbill =[
        {
            label: '01/05/2018',
            backgroundColor: "#977aa8",
            data: [230.37]
        }, {
            label: '01/06/2018',
            backgroundColor: "#712b81",
            data: [120]
        }, {
            label: '01/07/2018',
            backgroundColor: "#da3f7b",
            data: [272]
        }, {
            label: '01/08/2018',
            backgroundColor: "#fadf46",
            data: [227]
        }, {
            label: '01/09/2018',
            backgroundColor: "#fab53c",
            data: [234]
        }, {
            label: '01/10/2018',
            backgroundColor: "#977aa8",
            data: [255]
        }
    ];

    // dounght charts configuration
    function generateDounght(){
        var dounghtItem = $('.dounghtcanvas');
        dounghtItem.each(function(index,ele){
            var $this = $(ele),
                id = $this.attr('id'),
                src = $this.data('source'),
                type =$this.data('type');

            var ctx =$('#'+id);
            var myDoughnut = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: eval(src),
                        backgroundColor: eval(type),
                        borderColor: eval(type),
                        borderWidth: 0
                    }]
                },
                options:{
                    responsive: true,
                    maintainAspectRatio:true,
                    aspectRatio:6,
                    legend: {
                        display:false,
                        position: 'top',
                    },
                    title: {
                        display: false,
                    },
                    tooltips:{
                        enabled:false,
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    },
                    cutoutPercentage : 87,
                },
            });
        })
    };

    //bar charts configuration
    function generateBar() {
        var barchartItem = $('.barcharts');
        barchartItem.each(function (index, ele) {
            var $this = $(ele),
                id = $this.attr('id'),
                src = $this.data('source'),
                labels = $this.data('labels'),
                steps = $this.data('steps');

            var ctx = $('#' + id);
            var myBarChart = new Chart(ctx, {
                type: 'bar',
                data: {
                   datasets:eval(src),
                   //  datasets: [{
                   //      label:eval(labels),
                   //      data: eval(src),
                   //      fill: '#ffffff',
                   //      backgroundColor: barchartcolors,
                   //      borderColor: barchartcolors,
                   //      borderWidth: 1,
                   //
                   //  }]
                },
                options: {
                    responsive: true,
                    legend: {
                        display: true,
                        position: "bottom",
                        fullWidth: true,
                        labels: {
                            boxWidth:13,
                            fontColor: '#712c81',
                            fontFamily :'Open Sans'
                        },
                    },
                    title: {
                        display: false,
                    },

                    scales: {
                        xAxes: [{

                            maxBarThickness: 17,
                            categorySpacing: 50,
                            categoryPercentage:1,
                            display:false,
                            gridLines: {
                                display: false,
                                drawBorder: false,


                        }

                        }],
                        yAxes: [{
                            gridLines: {
                                drawBorder: false,
                            },
                            ticks: {
                                min: 0,
                                stepSize: eval(steps)
                            }
                        }]

                    },
                    layout: {
                        padding: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }
                    },
                },
            });


            $('.chart_legend').html( myBarChart.generateLegend())

        })
    }



    // common function to show divs
    function showContent(){
        var item = $('.showContent');
        item.each(function (index, ele) {
            var $this = $(ele),
                content = $this.data('show'),
                toHide = $this.data('hide');
                $this.on('click',function(){

                    if (toHide == undefined){
                        $('.hiddenContent').hide()
                    }
                    else{
                        $(toHide).hide();
                    }
                    if($this.hasClass('dropdown-item')) $this.parents('.action-sheet-btn').find('.action_btn').dropdown('toggle');
                    $(content).show();
                    return false;

                })
        });
    }

    // change the z-index of bootstrap select parent

    $('.selectpicker').each(function(){
        console.log('select')
        $(this).parents('.widgetcontainer').css('z-index','1')
    })



    // call the functions only if the item is placed in the page
    if ( $('.owl-carousel').length ) generateCarousel();
    if ( $('.dounghtcanvas').length ) generateDounght();
    if ( $('.barcharts').length ) generateBar();
    if ( $('.showContent').length ) showContent();
});
$(window).on('scroll', function(){
        if ( $(this).width() < 993 ) {
            var offset = 61;
        } else {
            var offset = 107;
        }
    
    // $(window).on('load', function(){
    //     offsetinit();
    // });
    // $(window).on('resize', function(){
    //     offsetinit();
    // });

    if (  $(this).scrollTop() > offset ) {
        $("header").addClass("sticky");
        console.log('test');
    } else {
        $("header").removeClass("sticky");
    }
});
// remove on deploy

$(window).on('load', function(){
    $('header .profile').on('click', function(){
        $('body').removeClass('open_widgets');
        $(this).toggleClass('open');
    });
    $('header .widgets_btn').on('click',function(){
        //$('.profile').removeClass('open');
        $('body').toggleClass('open_widgets');
    });

    $(document).on('click', function(){
        $('body').removeClass('open_widgets');
        $('.profile').removeClass('open');
    });
    $('#panel, .widgets_btn, .profile, .dropdown_list').on('click', function(event){
        event.stopPropagation();
    });
});