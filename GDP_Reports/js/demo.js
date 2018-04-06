/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
  "use strict";
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });


    var chart = c3.generate({
        bindto: '.charts_line',
        data: {
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 50, 20, 10, 40, 15, 25]
            ],
            axes: {
                data2: 'y2'
            },
            types: {
                data2: 'bar'
            }
        }
    });

    setTimeout(function () {
        chart.transform('area', 'data1');
    }, 3000);

    setTimeout(function () {
        chart.transform('area', 'data2');
    }, 5000);

    setTimeout(function () {
        chart.transform('bar');
    }, 7000);

    setTimeout(function () {
        chart.transform('line');
    }, 9000);

    // setTimeout(function () {
    // location.reload();
    // }, 11000);


    var chart2 = c3.generate({
        bindto: '.charts_bars',
        data: {
            columns: [
                ['Q1_2016', 33100, 31351, 24881, 2815, 19305, 9267, 5288],
                ['Q1_2017', 27860, 28313, 9778, 28362, 9447, 18834, 20858 ],
                ['Q1_2018', 21860, 25313, 7778, 23362, 7447, 15834, 18858 ]
            ],
            type: 'bar'
        },
        axis: {
        x: {
            type: 'category',
                categories:['اصدار جواز', 'تجديد الجواز', 'تجديد الاقامة', 'تفعيل ابشر', 'التأشيرات', 'نقل معلومات', 'نقل كفاله (افراد)'],

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

    setTimeout(function () {
        chart2.groups([['Q1_2016', 'Q1_2017', 'Q1_2018']])
    }, 4000);

    setTimeout(function () {
        chart2.groups([['Q1_2016']])
    }, 8000);
});
