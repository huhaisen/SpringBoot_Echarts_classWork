var myChart =  echarts.init(document.getElementById('chart_6'))

/*  这部分代码似乎可以不要
var yMax = 10000;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}
*/

$.ajax({
    url : 'http://localhost:8080/queryStaProvinceDistribute',
    type: 'get',
    dataType: 'json',
    data: {},
    success:function (data) {
        var provinceNameList = [];
        var sentimentNumList = [];
        for (var i = 0; i < 10; i++){
            provinceNameList.push(data[i].stapdProvinceName)
            sentimentNumList.push(data[i].stapdSentimentNum)
        }
        console.log(provinceNameList)
        console.log(sentimentNumList)
        option = {
            xAxis: {
                type: 'category',
                data: provinceNameList,
                barWidth:10,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#999'
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            grid:{
                bottom:'90px'
            },
            tooltip:{},  //鼠标移到上面有提示
            series: [
                {
                    type: 'bar',
                    showBackground: false,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#ffeaf2' },
                            { offset: 0.5, color: '#ffb4a8' },
                            { offset: 1, color: '#ff5b56' }
                        ])
                    },
                    emphasis: {
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#ffeaf2' },
                                { offset: 0.7, color: '#ffb4a8' },
                                { offset: 1, color: '#ff5b56' }
                            ])
                        }
                    },
                    data: sentimentNumList
                }
            ]
        };

        const zoomSize = 6;
        myChart.on('click', function (params) {
            console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
            myChart.dispatchAction({
                type: 'dataZoom',
                startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                endValue:
                    dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
            });
        });

        myChart.setOption(option)
    },
    error:function (msg) {
        console.log(msg)
    }
})



