var LineChart = echarts.init(document.getElementById('chart_5'))

$.ajax({
    url:'http://localhost:8080/queryStaNetizenAttention',
    type:'get',
    dataType:'json',
    data:{},
    // headers:'',
    success:function (data) {
        var stana_date_list = [];
        var attention_num_list = [];

        for(var i = 0; i < data.length; i++){
            stana_date_list.push(data[i].stanaDate)
            attention_num_list.push(data[i].attentionNum)
        }

        console.log(stana_date_list);
        console.log(attention_num_list);

        option = {
            grid: {
                left: '5%',
                right: '10%',
                top: '20%',
                bottom: '20%',
                containLabel: true,
            },
            tooltip: {
                show: true,
                trigger: 'axis',
            },
            xAxis: [
                {
                    type: 'category',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#85C1D9',
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        color: '#8BC4F2',
                        margin: 6,
                    },
                    splitLine: {
                        show: false,
                    },
                    boundaryGap: ['5%', '5%'],
                    data: stana_date_list,
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        color: '#8BC4F2',
                        margin: 6,
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#355C84',
                            type: 'dashed',
                        },
                    },
                },
            ],
            series: [
                {
                    name: '数量',
                    type: 'line',
                    symbolSize: 6,
                    itemStyle: {
                        color: '#55EFF1',
                        borderColor: '#55EFF1',
                        borderWidth: 2,
                    },
                    data: attention_num_list,
                },
            ],
        };

        LineChart.setOption(option)
    },
    error:function (msg) {
        console.log(msg)
    },
})

