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


    var chart = c3.generate({
        bindto: '.charts_line',
        data: {
            columns: [
                ['Total', 147432, 132638, 180040, 175318, 215479, 129976, 231071, 218765, 126211, 181314, 171465, 169197],
                ['Served', 140060, 126306, 169238, 166553, 204705, 123477, 219518, 207827, 119901, 174062, 161178, 159046],
                ['NonServed', 7372, 6332, 10802, 8765, 10774, 6499, 11553, 10938, 6310, 7252, 10287, 10151],


            ],
            colors: {
                Total: '#0b563c',
                Served: '#c9a63f',
                NonServed: '#1da085'
            },
        },
            axis: {
                x: {
                    label: {
                        text: 'Months',
                        position: 'outer-center'
                    },
                    type: 'category',
                    categories:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

                },
                y: {
                    label: {
                        text: 'Transactions',
                        position: 'outer-center'

                    }
                },

        }
    });

    function changeCharts() {
        var listItems = 3;
        var count = 0;

        setInterval(function() {
            setTimeout(function () {
                chart.transform('bar');
            }, 4000);

            setTimeout(function () {
                chart.groups([['Total', 'Served', 'NonServed']])
            }, 8000);

            setTimeout(function () {
                chart.transform('line');
            }, 12000);

            setTimeout(function () {
                chart.transform('area');
            }, 16000);

            count += 1;
            if (count >= listItems) {
                count = 0;
            }
        }, 24000);

    }


    setTimeout(function () {
        chart.transform('bar');
    }, 4000);

    setTimeout(function () {
        chart.groups([['Total', 'Served', 'NonServed']])
    }, 8000);

    setTimeout(function () {
        chart.transform('line');
    }, 12000);

    setTimeout(function () {
        chart.transform('area');
    }, 16000);

    changeCharts();
  // setTimeout(function () {
  //   location.reload();
  //   }, 24000);


    var chart2 = c3.generate({
        bindto: '.charts_bars',
        data: {
            columns: [
                ['Q1_2016', 33100, 31351, 24881, 2815, 19305, 9267, 5288],
                ['Q1_2017', 27860, 28313, 9778, 28362, 9447, 18834, 20858 ],
                ['Q1_2018', 19510, 16988, 3912, 2534, 5667, 8802, 4970 ]
            ],
            type: 'bar',
            colors: {
                Q1_2016: '#0b563c',
                Q1_2017: '#c9a63f',
                Q1_2018: '#1da085'
            },
        },
        axis: {
        x: {
            label: {
                text: 'Services',
                position: 'outer-center'
            },
            type: 'category',
                categories:['اصدار جواز', 'تجديد الجواز', 'تجديد الاقامة', 'تفعيل ابشر', 'التأشيرات', 'نقل معلومات', 'نقل كفاله (افراد)'],

        },
            y: {
                label: {
                    text: 'Demand',
                    position: 'outer-center'
                },
            }
    },
        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px

        }
    });


    function changeCharts_2() {
        var listItems = 4;
        var count = 0;

        setInterval(function() {
            setTimeout(function () {
                chart2.groups([['Q1_2016', 'Q1_2017', 'Q1_2018']])
            }, 4000);

            setTimeout(function () {
                chart2.transform('area');
            }, 8000);

            setTimeout(function () {
                chart2.transform('bar');
                chart2.groups([['Q1_2016']])
            }, 12000);

            setTimeout(function () {
                chart2.groups([['Q1_2016', 'Q1_2017', 'Q1_2018']])
            }, 16000);

            setTimeout(function () {
                chart2.groups([['Q1_2016']])
            }, 20000);

            count += 1;
            if (count >= listItems) {
                count = 0;
            }
        }, 24000);

    }

    setTimeout(function () {
        chart2.groups([['Q1_2016', 'Q1_2017', 'Q1_2018']])
    }, 4000);

    setTimeout(function () {
        chart2.transform('area');
    }, 8000);

    setTimeout(function () {
        chart2.transform('bar');
        chart2.groups([['Q1_2016']])
    }, 12000);

    setTimeout(function () {
        chart2.groups([['Q1_2016', 'Q1_2017', 'Q1_2018']])
    }, 16000);

    setTimeout(function () {
        chart2.groups([['Q1_2016']])
    }, 20000);

    changeCharts_2()


});
