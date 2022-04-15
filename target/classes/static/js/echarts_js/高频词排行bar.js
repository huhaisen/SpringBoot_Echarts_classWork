var BarChart = echarts.init(document.getElementById('chart_4'))

$.ajax({
    url: 'http://localhost:8080/queryStaWordFrequency',
    type: 'get',
    dataType: 'json',
    data: {},
    success:function (data) {
        var wordNameList = [];
        var wordNumList = [];
        for (var i = 8; i >= 0; i--){
            wordNameList.push(data[i].stawfWordName)
            wordNumList.push(data[i].stawfWordNum)
        }
        console.log(wordNameList)
        console.log(wordNumList)

        option = {
            barWidth: 16,
            xAxis: {
                type: 'value',
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(255,255,255,0.2)",
                        type: 'dashed'
                    }
                },
                axisTick: {
                    show: true
                },
                axisLine: { //  改变x轴颜色
                    show:true,
                    lineStyle: {
                        color: "rgba(255,255,255,0.8)"
                    }
                },

                axisLabel: { //  改变x轴字体颜色和大小
                    show:false,
                    textStyle: {
                        color: "rgba(250,250,250,0.6)",
                        fontSize: 16
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: wordNameList,
                splitLine: {
                    show:true,
                    lineStyle: {
                        color: "rgba(255,255,255,0.2)",
                        type: 'dashed'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: { //  改变y轴颜色
                    show:false
                },
                axisLabel: { //  改变y轴字体颜色和大小
                    textStyle: {
                        color: "rgba(250,250,250,0.6)",
                        fontSize: 15
                    }
                }
            },
            grid:{
                bottom:'30px',
                left:'75px',
                bottom:'30px'
            },
            tooltip:{},  //鼠标移到上面有提示
            series: [{
                type: 'bar',
                barWidth : 20,
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            // position:"insideRight", //在上方显示
                            textStyle: { //数值样式
                                color: "#FFFFFF",
                                fontSize: 13,
                                fontWeight: 500
                            }
                        },
                        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: 'rgba(47,248,255,.8)'
                        }, {
                            offset: 1,
                            color: 'rgba(47,248,255,0)'
                        }]),

                    }
                },
                data: wordNumList
            }
            ]
        };

        BarChart.setOption(option)
    },
    error:function (msg) {
        console.log(msg)
    }
})


// var yData = [
//     '0-9岁',
//     '10-19岁',
//     '20-29岁',
//     '30-39岁',
//     '40-49岁',
//     '50-59岁',
//     '60-69岁',
//     '70-79岁',
//     '80岁以上',
// ]
//
//
// var data = [
//     '678',
//     '345',
//     '7888',
//     '5666',
//     '4444',
//     '9999',
//     '4562',
//     '1230',
//     '785',
// ]
//
