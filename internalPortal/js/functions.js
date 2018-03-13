$(function (){
    //fake loader
    setTimeout(function () {
        $('body').addClass('open');
    }, 100);
    
    // add sub
    $('.sidebar .nav ul li').each(function(){
        if ( $('.submenu', this).length ) $(this).addClass('sub');
    });
    
    // open menu
    $('.sidebar ul li.sub').on('click', function(){
        $('.submenu', this).slideToggle();
        $(this).toggleClass('open-menu');
    });    
    
    //open account list
    $(document).on('click', function(e){
        $('header .ctrl .account').removeClass('open-list');
    });
    $('header .ctrl .account .details').on('click', function(e){
        $(this).parent().toggleClass('open-list');
        e.stopPropagation();
        e.preventDefault();    
    });    
    $('header .ctrl .account .account-list').on('click', function(e){
        e.stopPropagation();
        e.preventDefault();
    });
    
    //datepicker
    $('.input-daterange input').each(function () {
        $(this).datepicker('clearDates');
    });
    
    // add scroll
    $(window).on("load",function(){
        $(".nav").mCustomScrollbar({
            theme:"minimal-dark"
        });
    });    
    
    //datatable
    

    
    var table = $('.datatable').DataTable({
        paging: true,
        pageLength: 50,
        bFilter: false,
        bLengthChange: false,
        info: false,
        oLanguage: {
            oPaginate: {
                sNext: '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>',
                sPrevious: '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>'
            },
            buttons: {
                colvis: '<i class="icon-settings" aria-hidden="true"></i>'
            }            
        },
        responsive: {
            details: {
                type: 'column', 
                target: -1
            }
        },
        columnDefs: [{
            className: 'control', 
            orderable: false, 
            targets: -1
        }, {
            orderable: false, 
            targets: 0
        }],
        dom: 'Brt<"bottom"p<"tableInfo">>',
        buttons:        [ 'colvis' ],
        order: [[1, 'asc']],
        initComplete: function () {
            $('.selectpicker').each(function(){
                $(this).selectpicker();
            });
        }
    });
    var info = table.page.info();
    $('.tableInfo').html(
        'Total: '+info.pages+''
    );        
    
});