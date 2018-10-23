
$(document).ready(function(){
    "use strict";

    // just for Front end including the header and footer templates
//    $("header").load("../../templates/templates.html #header");
//    $("footer").load("../../templates/templates.html #footer");
    // $("panel").load("../../templates/templates.html #panel");

    $(window).on('load',function(){

        if ( $(this).width() < 769 ) {
            $('.quicklinks').detach().insertAfter('.app_store');
            // $('header .nav').detach().appendTo('footer');
            $('header .snav').detach();
        }

        $('header .widgets_btn').on('click',function(){
            console.log('clicked');
            $('body').toggleClass('open_widgets');
        });
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
    var topdialedvalues =  [66, 30, 25, 95, 80, 60 ];
    var topdialednumbers =  ['0534343963', '0112345678', '0512387653', '0531234567', '0567658904', '0123456789' ];
    var packages = ['#712c81', 'rgba(242, 242, 242, 0.1)'];
    var freebies = ['#d73474', 'rgba(242, 242, 242, 0.1)'];
    var localinternet =  [40, 60 ];
    var freebiesData =  [70, 30 ];

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
                labels = $this.data('labels');
            var ctx = $('#' + id);
            var myBarChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: eval(labels),
                    datasets: [{
                        data: eval(src),
                        fill: '#ffffff',
                        backgroundColor: barchartcolors,
                        borderColor: barchartcolors,
                        borderWidth: 1,

                    }]
                },
                options: {
                    responsive: true,
                    legend: {
                        display: false,
                        position: 'top',
                    },
                    title: {
                        display: false,
                    },

                    scales: {
                        xAxes: [{
                            barThickness: 18,
                            maxBarThickness: 20,
                            categorySpacing: 50,
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
                                max: 100,
                                stepSize: 20
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




    // call the functions only if the item is placed in the page
    if ( $('.owl-carousel').length ) generateCarousel();
    if ( $('.dounghtcanvas').length ) generateDounght();
    if ( $('.barcharts').length ) generateBar();
    if ( $('.showContent').length ) showContent();



});









