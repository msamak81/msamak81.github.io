//Check responsive

$(window).on('load',function()
{
    var width = $(this).width(),
         menuCont =$('<div class="action-sheet-btn added_js"/>')
        .append('<a class="action_btn" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="icon-ellipsis-v"></i></a>')
        .append('<div class="dropdown-menu"/>');

    if(width < 992)
    {
        $('.widgetbtns.col-sm-hidden').parents('.widgetcontainer').find('h1').append(menuCont);
        $('.widgetcontainer').find('.widgetbtns.col-sm-hidden').each(function(index,ele){
            var ele= $(this),
                id=  ele.parents('.widgetcontainer').attr('id');

            ele.parents('#'+ id)
                .find('.dropdown-menu')
                .append(ele.html())
                .find('.btns')
                .removeClass()
                .addClass('btns dropdown-item');
        })

        console.log('Responsive Mode')
    }

});
