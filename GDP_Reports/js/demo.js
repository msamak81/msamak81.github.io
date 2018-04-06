/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
  "use strict";
  $('body').addClass('opened');
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });

  var lang,months,monthsArr,transactions,services, servicesArr,demand,total='',served,nonserved,q1,q2,q3, colors=['#0b563c', '#c9a63f','#1da085'],play,pause
  ;

    if($('html').hasClass('ar')){
        lang='ar';
        months = 'الشهور'
        monthsArr = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
        transactions = 'الحركات'
        services = 'الخدمات'
        servicesArr = ['اصدار جواز', 'تجديد الجواز', 'تجديد الاقامة', 'تفعيل ابشر', 'التأشيرات', 'نقل معلومات', 'نقل كفاله (افراد)']
        demand = 'الطلبات'
        total = 'إجمالي الحركات'
        served = 'خدمات تم تقديمها'
        nonserved='خدمات لم يتم تقديمها'
        q1='الربع الاول 2016'
        q2='الربع الاول 2017'
        q3='الربع الاول 2018'
        play='نشغيل'
        pause= 'توقف'


    }
    else {
        lang = 'en'
        months = 'Months'
        monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        transactions = 'Transactions'
        services = 'Services'
        servicesArr = ['اصدار جواز', 'تجديد الجواز', 'تجديد الاقامة', 'تفعيل ابشر', 'التأشيرات', 'نقل معلومات', 'نقل كفاله (افراد)']
        demand = 'Demands'
        total = 'Total Transactions'
        served = 'Served Transactions'
        nonserved='Non Served Transactions'
        q1='Q1 2016'
        q2='Q1 2017'
        q3='Q1 2018'
        play='Play'
        pause= 'Pause'


    }


    // cahrts genertaions
    var chart = c3.generate({
        bindto: '.charts_line',
        data: {
            columns: [
                [total, 147432, 132638, 180040, 175318, 215479, 129976, 231071, 218765, 126211, 181314, 171465, 169197],
                [served, 140060, 126306, 169238, 166553, 204705, 123477, 219518, 207827, 119901, 174062, 161178, 159046],
                [nonserved, 7372, 6332, 10802, 8765, 10774, 6499, 11553, 10938, 6310, 7252, 10287, 10151]
            ],

        },
            axis: {
                x: {
                    label: {
                        text: months,
                        position: 'outer-center'
                    },
                    type: 'category',
                    categories:monthsArr,

                },
                y: {
                    label: {
                        text: transactions,
                        position: 'outer-center'

                    }
                },
        }
    });

  var chart2 = c3.generate({
        bindto: '.charts_bars',
        data: {
            columns: [
                [q1, 33100, 31351, 24881, 2815, 19305, 9267, 5288],
                [q2, 27860, 28313, 9778, 28362, 9447, 18834, 20858 ],
                [q3, 19510, 16988, 3912, 2534, 5667, 8802, 4970 ]
            ],
            type: 'bar',
        },
        axis: {
        x: {
            label: {
                text: services,
                position: 'outer-center'
            },
            type: 'category',
                categories:servicesArr,

        },
            y: {
                label: {
                    text: demand,
                    position: 'outer-center'
                },
            }
    },
        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
        }
    });

 if($('html').hasClass('ar')){
        chart.data.colors({
            'إجمالي الحركات' : colors[0],
            'خدمات تم تقديمها': colors[1],
            'خدمات لم يتم تقديمها': colors[2]
        });

        chart2.data.colors({
            'الربع الاول 2016' : colors[0],
            'الربع الاول 2017': colors[1],
            'الربع الاول 2018': colors[2]
        });

    }
    else {
        chart.data.colors({
            'Total Transactions' : colors[0],
            'Served Transactions': colors[1],
            'Non Served Transactions': colors[2]
        });

        chart2.data.colors({
            'Q1 2016' : colors[0],
            'Q1 2017': colors[1],
            'Q1 2018': colors[2]
        });
    }


    /* Pause and Play buttons*/
    var play1,play2
    $('.chart_play .chart_anim').on('click',function(){
         var item= $(this);
        if(item.hasClass('play')){
            item.removeClass('play').addClass('pause').text(pause);

            console.log('start')
            if ($('.charts_line').length){
                var i=0;
                play1 = setInterval(function() {
                    switch(i++%4) {
                        case 0: chart.transform('bar');
                            break;
                        case 1: chart.groups([[total, served, nonserved]]);
                            break;
                        case 2:   chart.transform('line');
                            break;
                        case 3:   chart.transform('area');
                            break;

                    }
                }, 4000);
            }

            if ($('.charts_bars').length){
                var i=0;

                var play2 = setInterval(function() {
                    switch(i++%5) {
                        case 0: chart2.groups([[q1, q2, q3]]);
                            break;
                        case 1: chart2.transform('area');
                            break;
                        case 2:  chart2.transform('bar'); chart2.groups([[q1]]);
                            break;
                        case 3:  chart2.groups([[q1, q2, q3]]);
                            break;
                        case 4: chart2.groups([[q1]])
                            break;
                    }

                }, 4000);
            };


        }

        else if(item.hasClass('pause')){
            item.removeClass('pause').addClass('play').text(play);
            console.log('pause')
            if ($('.charts_line').length) clearInterval(play1);
            if ($('.charts_bars').length) clearInterval(play2);

        }


        return false;


    })



});
