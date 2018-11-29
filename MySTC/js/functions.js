
// START of document.ready() function
$(document).ready(function(){
    "use strict";

    // just for Front end including the header and footer templates
    $("header").load("../../templates/templates.html #header");
    $("footer").load("../../templates/templates.html #footer");
    $("#panel").load("../../templates/templates.html #widgetspanel");
    $(window).on('load',function(){
        if ( $('.dounghtcanvas').length ) generateDounght();

    })

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


    var chartcolors =['#977aa8','#712b81', '#da3f7b', '#fadf46', '#fab53c', '#977aa8'];
    var packages = ['#712c81', 'rgba(242, 242, 242, 0.1)'];
    var freebies = ['#d73474', 'rgba(242, 242, 242, 0.1)'];
    var localinternet =  [40, 60 ];
    var piecharts_val =  [63.08, 32.19, 3.68, 0.92, 0.12 ];
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

    var pieDate =[{
        data: [
            63.08, 32.19, 3.68, 0.92, 0.12
        ],
        backgroundColor: [
            '#977aa8','#712b81', '#da3f7b', '#fadf46', '#fab53c'
        ],
    }];
    var pie_labels= [
        'مكالمة داخل شبكة الجوال',
        'صوتية',
        'رسالة صوتية',
        'هاتف ثابت',
        'الهاتف الثابت (شبكة اخري)'
    ];

    // change the z-index of bootstrap select parent
    $('.selectpicker').each(function(){
        $(this).parents('.widgetcontainer').css('z-index','1')
    })

    /*
    = COMMON FUNCTION TO CALL WHEN NEEDED AT THE PAGE BASED ON IF THE ELEMENT IS INCLUDED AT THE PAGE OR NOT.
    = ADDED BY MOHAMMAD SAMAK
*/

// Owl carousel functions
    function generateCarousel(){
        var carouselItem = $('.owl-carousel');
        carouselItem.each(function(index,ele) {
            var $this = $(ele),
                id = $this.attr('id'),
                desktop = $this.data('items-desktop'),
                tablet = $this.data('items-tablet'),
                mobile = $this.data('items-mobile'),
                nav = $this.data('nav');

               if(nav== undefined){
                    nav = false;
                }
                else{
                    nav = true;
               }

               console.log(nav)

            var carousel = $("#"+id).owlCarousel({
                loop:false,
                margin:10,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:eval(mobile),
                        nav:nav,
                        loop:false
                    },
                    600:{
                        items:eval(tablet),
                        nav:nav,
                        loop:false
                    },
                    1000:{
                        items:eval(desktop),
                        nav:nav,
                        loop:false
                    }
                }
            });

        });
    }

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

    // Pie charts configuration
    function generatePie(){
        var pieItem = $('.piecharts');
        pieItem.each(function(index,ele){
            var $this = $(ele),
                id = $this.attr('id'),
                src = $this.data('source'),
                labels = $this.data('labels');
            var ctx =$('#'+id);
            var myPie = new Chart(ctx, {
                type: 'pie',
                data: {
                    datasets:eval(src),
                    labels: eval(labels)
                },
                options:{
                    responsive: true,
                    maintainAspectRatio:true,
                    aspectRatio:6,
                    legend: {
                        display: false,
                        position: "right",
                        fullWidth: false,
                        labels: {
                            boxWidth:13,
                            fontColor: '#712c81',
                            fontFamily :'Open Sans'
                        },
                    },
                    title: {
                        display: true,
                    },
                    tooltips:{
                        enabled:true,
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    },
                    layout: {
                        padding: {
                            left: 20,
                            right: 20,
                            top: 0,
                            bottom: 0
                        }
                    }

                },
            });

            $this.parents('.piechartsholder').append('<div class="chart_legend"/>')
            $(pieItem).parents('.piechartsholder').find('.chart_legend').html( myPie.generateLegend())
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
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: false,
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

            $this.parents('.barcharts_holder').append('<div class="chart_legend"/>')
            $(barchartItem).parents('.barcharts_holder').find('.chart_legend').html( myBarChart.generateLegend())

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
                item.removeClass('active');
                $(this).addClass('active');
                if (toHide == undefined){
                    item.parents().eq(3).find('.hiddenContent').hide();
                    item.parents().find('.hiddenContent').hide();
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

//add new credit card function
    function addNewCC(){
        $('.add_card').on('click', function(){
            $('.modal_payment_btn').hide();
            $('.payment_cancel_btn').addClass('floated_btns_space')

        })

        $('.cc_options').on('click',function(){
            $('.select_payment_method').prop('disabled','');
          });

        $('.select_payment_method').on('click',function(){
            $('.newcc_no').payment('formatCardNumber');
            $('.newcc_expiry').payment('formatCardExpiry');
            $('.newcc_ccv').payment('formatCardCVC');
        })

        $('.newCC_added_btn').on('click',function(){
            console.log('show summary')
        })

    }

// accordion function
    function accordions(){
        var accordion= $('.accordion_parent');
        accordion.each(function (index, ele) {
            var $this = $(ele);
            $this.attr('id', 'accordion_parent_'+index);
            var id = $this.attr('id');

            $('#'+id).find('.accordion_item').each(function(i, e){
                var $this = $(e);
                $this.find('.accordion_body').attr('id', id+ '_accordion_body_' + i);
                $this.find('.accordion_header[data-toggle="collapse"]').attr('data-target', '#'+id+ '_accordion_body_' + i )
            })
        })
    }

    // datatables common function

    function generateTables(){
        var tables = $('.data_tables');
        tables.each(function(i,e){
            var $this = $(this),
                grouping = $this.data('row-grouping'),
                groupColumn=  $this.data('grouping-column'),
                records_label  = $this.data('records-label'),
                groupOrder = $this.data('grouping-order'),
                resultsCount= $this.data('results-count'),
                lengthArray = [10, 25, 50, 75, 100];

            if(resultsCount == undefined){
                resultsCount = 10;
            }
            else{

                resultsCount = resultsCount;
                lengthArray.push(resultsCount);
                lengthArray.sort((a, b) => a - b);
            }

            var table = $this.DataTable({
                "lengthChange": false,
                "lengthMenu":lengthArray,
                "displayLength": eval(resultsCount),
                'responsive': {
                    details: {
                        type: 'column'
                    }
                },
                "language": {
                    "lengthMenu": "Display _MENU_ "+ records_label,
                    "zeroRecords": "Nothing found - sorry",
                    "info": "Showing page _PAGE_ of _PAGES_",
                    "infoEmpty": "No records available",
                    "infoFiltered": "(filtered from _MAX_ total records)",
                    "search":  "Filter : ",
                },
                rowGroup: {
                    enable: eval(grouping),
                    dataSrc: groupColumn

                }
            } );

            if (grouping == true){
                table
                    .order( [[ groupColumn, groupOrder ]])
                    .columns( [groupColumn] ).visible( false)
                    .draw();
            }
        })

        // filter table actions

        $('.filter_table .action_btn').click(function(){
            var $parent= $(this).parents('.filter_table');

            if($parent.hasClass('open')){
                $parent.removeClass('open');
            }
            else{
                $('.filter_table').removeClass('open');
                $parent.addClass('open');
            }

            // check all and uncheck all checkboxes when selecting
            var $select_all_checkbox =  $('.open .filter-table-options input:checkbox[value="all"]'),
                $other_checkboxes = $('.open .filter-table-options input:checkbox');

            $select_all_checkbox.change(function(){
                $other_checkboxes.prop('checked', $(this).prop("checked"));
            });

            $other_checkboxes.not('input:checkbox[value="all"]').change(function(){
                if(false == $(this).prop("checked")){
                    $select_all_checkbox.prop('checked', false);
                }
                if ( $('.open .filter-table-options input:checkbox:checked').not('input:checkbox[value="all"]').length == $other_checkboxes.not('input:checkbox[value="all"]').length ){
                    $select_all_checkbox.prop('checked', true);
                }
            });
            return false;
        })

        $(document).click(function(){
            $('.filter_table').removeClass('open');
        })

        $('.filter-table-options').click(function (e) {
            e.stopPropagation();

         })


        // filter table based on filteration options

        $('.filter-table-options input:checkbox').click(function(){
                console.log($(this).val());
        });
   }

   // calling bootstrap modal content from Ajax
    $("#modal").on("show.bs.modal", function(e) {
        var link = $(e.relatedTarget);
        console.log(link.attr("href"))
        $(this).find(".modal-body").load(link.attr("href"));
        if ( $('.showContent').length ) showContent();
    });


        // call the functions only if the item is placed in the page
        if ( $('.owl-carousel').length ) generateCarousel();
        if ( $('.dounghtcanvas').length ) generateDounght();
        if ( $('.piecharts').length ) generatePie();
        if ( $('.barcharts').length ) generateBar();
        if ( $('.showContent').length ) showContent();
        if ( $('.add_card').length )  addNewCC();
        if ( $('.accordion_parent').length ) accordions();
        if ( $('.data_tables').length ) generateTables();








});
// END of document.ready() function


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

    $('.mainsection, footer, header').on('click', function(){
        $('body').removeClass('open_widgets');
        $('.profile').removeClass('open');
    });
    $('.widgets_btn, .profile, .account .dropdown_list').on('click', function(e){
            e.stopPropagation();
    });
    // $('#panel').on('click', function(event){
    //     if(!$(event.target).is('.addwidget')){
    //         event.stopPropagation()
    //     }
    // });



    // $('#panel .form-input').on('click', function(event){
    //     event.P
    // });
});