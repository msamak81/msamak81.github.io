'use strict'
$(function(){

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

        var mousePos = {};

        function getRandomInt(min, max) {
            return Math.round(Math.random() * (max - min + 1)) + min;
        }

        $(window).mousemove(function(e) {
            mousePos.x = e.pageX;
            mousePos.y = e.pageY;
        });

        $(window).mouseleave(function(e) {
            mousePos.x = -1;
            mousePos.y = -1;
        });

        var draw = setInterval(function(){
            if(mousePos.x > 0 && mousePos.y > 0){

                var range = 0;

                var color = "fill: rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+");";

                var sizeInt = getRandomInt(10, 30);
                var size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";

                var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range + 10) + "px;";

                var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range + 10) +  "px;";

                var style = left+top+color+size;
                $("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();});
            }
        }, 50);


});