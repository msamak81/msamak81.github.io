//Check responsive

$(window).on('load',function()
{
    var width = $(this).width();
    //     var menuCont =$('<div class="action-sheet-btn added_js"/>')
    //     .append('<a class="action_btn" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="icon-ellipsis-v"></i></a>')
    //     .append('<div class="dropdown-menu"/>');
    //
    if(width < 993)
    {
        // $('.widgetbtns.col-sm-hidden').parents('.widgetcontainer').find('h1').append(menuCont);
        // $('.widgetcontainer').find('.widgetbtns.col-sm-hidden').each(function(index,ele){
        //     var ele= $(this),
        //         id=  ele.parents('.widgetcontainer').attr('id');
        //     ele.parents('.widgetcontainer')
        //         .find('.dropdown-menu')
        //         .append(ele.html())
        //         .find('.btns')
        //         .removeClass()
        //         .addClass('btns dropdown-item');
        // })

        console.log('Responsive Mode')

        // bill details accordion to be closed on mobile by defualt
        $('.bill_details').find('.accordion_body').removeClass('show');
        $('.bill_details').find('.accordion_header[data-toggle="collapse"]').attr('aria-expanded','false');


    }
    else{

        // bill details accordion to be open on desktop by defualt
        $('.bill_details').find('.accordion_body').addClass('show');
        $('.bill_details').find('.accordion_header[data-toggle="collapse"]').attr('aria-expanded','true');

    }

});
