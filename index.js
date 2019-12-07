function createChart() {

    Highcharts.stockChart('container', {
		title: {
          text: 'Wins by Games Played'
        },
        rangeSelector: {
            enabled: false
        },
        navigator: {
            enabled: false
        },
        scrollbar: { enabled: false },

		xAxis: {
          labels: {
           	formatter: function() {
              return 'Game ' + this.value;
            }
          },
          title: {
          	text: ''
          },
          scrollbar: {
           enabled: false
         },
          navigator: {
            enabled: false,
            scrollbar: {
             enabled: false
           },
          },
          tickInterval: 1
        },
        yAxis: {
          	allowDecimals: false,
          	tickInterval: 1,
            scrollbar: {
           enabled: false
       },
            labels: {
                formatter: function () {
                    return this.value;
                },
              	step: 1
            },
            plotLines: [{
                value: 0,
                width: 2,
                color: 'silver'
            }]
        },

        plotOptions: {
            series: {
                //compare: 'percent',
                showInNavigator: true,
                step: true
            }
        },

        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
            valueDecimals: 2,
            split: true
        },

        series: [
          {name: "Cardinals", data: [0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3], color:'red'},
          {name: "Niners", data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 10], color: '#a89332'},
          {name: "Rams", data: [0, 1, 2, 3, 3, 3, 3, 4, 5, 5, 6, 6, 7], color: 'blue'},
          {name: "Seahawks", data: [0, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10], color: '#32a885'}
        ]
    });
}

createChart();

var categories = ["QB", "RB", "WR", "OL", "CB", "S", "DL", "LB"];
Highcharts.chart('container1', {

    chart: {
        polar: true
    },

    title: {
        text: 'Average PFF Grade By Position Group'
    },

    pane: {
        startAngle: 0,
        endAngle: 360
    },

    xAxis: {
        tickInterval: 45,
        min: 0,
        max: 360,
        labels: {
            formatter: function () {
                return categories[this.value/45];
            },
            step: 1
        }
    },

    yAxis: {
        min: 0
    },

    plotOptions: {
        series: {
            pointStart: 0,
            pointInterval: 45
        },
        column: {
            pointPadding: 0,
            groupPadding: 0
        }
    },

    series: [ {
        type: 'area',
        name: 'Cardinals',
        data: [67, 64.9, 63.4, 61.4, 55.7, 62.7, 69.2, 56.3], //Scores
        color: 'red'
    }, {
        type: 'area',
        name: 'Niners',
        data: [73.1, 72.7, 78, 70.5, 79.5, 77.8, 83.8, 65.9],
        color: '#a89332'
    }, {
        type: 'area',
        name: 'Rams',
        data: [71.5, 68.3, 75, 59.3, 73.1, 73.6, 69.9, 70.8],
        color: 'blue'
    }, {
        type: 'area',
        name: 'Seahawks',
        data: [91.1, 74, 69.4, 60.1, 60.2, 65.9, 72.8, 67.8],
        color: '#32a885'
    }]
});

Highcharts.chart('container2a', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Cardinals Salary Cap Breakdown'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Percent of Cap',
        colorByPoint: true,
        data: [
{name: 'DB',y:    16.005981},
{name: 'DL',y:    8.193882},
{name: 'LB',y:    18.617038},
{name: 'OL',y:    20.601616},
{name: 'QB',y:    12.878986},
{name: 'RB',y:    6.520394},
{name: 'ST',y:    1.967772},
{name: 'WR',y:    15.214331}
      ]
    }]
});

Highcharts.chart('container2b', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Niners Salary Cap Breakdown'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Percent of Cap',
        colorByPoint: true,
        data: [
{name: 'DB',y:    12.184489},
{name: 'DL',y:    20.791680},
{name: 'LB',y:    15.408584},
{name: 'OL',y:    17.449796},
{name: 'QB',y:    8.606498},
{name: 'RB',y:    7.837018},
{name: 'ST',y:    2.634287},
{name: 'WR',y:    15.087648}
      ]
    }]
});

Highcharts.chart('container2c', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Rams Salary Cap Breakdown'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Percent of Cap',
        colorByPoint: true,
        data: [
{name: 'DB',y:    15.445247},
{name: 'DL',y:    17.251978},
{name: 'LB',y:    14.993614},
{name: 'OL',y:    18.227291},
{name: 'QB',y:    6.496866},
{name: 'RB',y:    6.865916},
{name: 'ST',y:    3.319782},
{name: 'WR',y:    17.399306}
      ]
    }]
});

Highcharts.chart('container2d', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Seahawks Salary Cap Breakdown'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Percent of Cap',
        colorByPoint: true,
        data: [
{name: 'DB',y:    14.180107},
{name: 'DL',y:    20.791680},
{name: 'LB',y:    15.323638},
{name: 'OL',y:    18.609248},
{name: 'QB',y:    14.727625},
{name: 'RB',y:    3.441502},
{name: 'ST',y:    2.513092},
{name: 'WR',y:    15.050407}
      ]
    }]
});
Highcharts.chart('container4', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Point Differential 2018 and 2019 Seasons'
    },
    xAxis: {
        categories: ['Cardinals', 'Niners', 'Rams', 'Seahawks']
    },
    yAxis: {
    	title: null
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '2018 Season',
        data: [-12.5, -5.8, 7.6, 4.6]
    }, {
        name: '2019 Season',
        data: [-8, 13.8, 2.8, 3]
    }]
});
