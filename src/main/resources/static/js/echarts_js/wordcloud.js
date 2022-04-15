var wordcloud_chart = echarts.init(document.getElementById('chart_3'));

$.ajax({
    url: 'http://localhost:8080/queryStaWordFrequency',
    type: 'get',
    dataType: 'json',
    data: {},
    success:function (data) {
        var dataList = [];
        for (var i = 0; i < data.length; i++){
            dataList.push({
                name: data[i].stawfWordName,
                value: data[i].stawfWordNum
            })
        }
        console.log(dataList)

        var wordcloud_option = {
            //数据项触发工具，保持默认配置
            tooltip: {},
            series: [{
                grid:{
                    top:'50px'
                },
                type: 'wordCloud',
                gridSize: 2,
                //字体大小范围
                sizeRange: [12, 50],
                //字体旋转角度范围
                rotationRange: [-90, 90],
                //词云图形状
                shape: 'pentagon',
                //词云图长宽
                width: 450,
                height: 300,
                drawOutOfBound: true,
                textStyle: {
                    emphasis: {
                        //阴影距离
                        shadowBlur: 10,
                        //阴影颜色
                        shadowColor: '#dbded3'
                    }
                },
                data: dataList
            }]
        };

        wordcloud_chart.setOption(wordcloud_option)
    },
    error:function (msg) {
        console.log(msg)
    }

})


// var data =  [
//     {
//         name: '抗疫',
//         value: 10000,
//         // textStyle: {
//         //     normal: {
//         //         color: 'black'
//         //     },
//         //     emphasis: {
//         //         color: 'red'
//         //     }
//         // }
//     },
//     {
//         name: '肺炎',
//         value: 6181
//     },
//     {
//         name: '封闭管理',
//         value: 4386
//     },
//     {
//         name: '上海',
//         value: 4055
//     },
//     {
//         name: '武汉',
//         value: 2467
//     },
//     {
//         name: '疫情',
//         value: 9999
//     },
//     {
//         name: '网课',
//         value: 1898
//     },
//     {
//         name: '北京',
//         value: 1484
//     },
//     {
//         name: '贵州',
//         value: 1112
//     },
//     {
//         name: '山东',
//         value: 965
//     },
//     {
//         name: '浙江',
//         value: 847
//     },
//     {
//         name: '江苏',
//         value: 582
//     },
//     {
//         name: '西安',
//         value: 555
//     },
//     {
//         name: '黑龙江',
//         value: 550
//     },
//     {
//         name: '吉林',
//         value: 462
//     },
//     {
//         name: '新疆',
//         value: 366
//     },
//     {
//         name: '香港',
//         value: 360
//     },
//     {
//         name: '台湾',
//         value: 282
//     },
//     {
//         name: '广西',
//         value: 273
//     },
//     {
//         name: '飞机失事',
//         value: 265
//     }
// ]



