Highcharts.chart('bar-chart', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Wins through first 12 games of season'
    },
    subtitle: {
        text: null
    },
    xAxis: {
        categories: ['Cardinals', 'Niners', 'Rams', 'Seahawks'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: null,
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' wins'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '2018 Season',
        data: [3, 2, 11, 7]
    }, {
        name: '2019 Season',
        data: [3, 10, 7, 10]
    }]
});
