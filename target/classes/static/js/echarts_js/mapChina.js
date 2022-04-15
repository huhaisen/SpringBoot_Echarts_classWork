var myChart = echarts.init(document.getElementById('chart_map'));

$.ajax({
    url : 'http://localhost:8080/queryStaProvinceDistribute',
    type: 'get',
    dataType: 'json',
    data: {},
    success:function (data) {
        var dataList = [];
        for (var i = 0; i < data.length; i++){
            dataList.push(
                {
                    "name": data[i].stapdProvinceName,
                    "value": data[i].stapdSentimentNum
                }
            )
        }
        console.log(dataList)

        // 指定图表的配置项和数据
        option = {
            tooltip: {
                trigger: 'item',    //鼠标移动到有提示
                formatter: '{b}舆情数量是{c}条'    //{a}{b}{c}具体含义看文档
            },
            visualMap: {
                min: 0,
                max: 1000,
                left: 26,
                bottom: 60,
                showLabel: !0,
                pieces: [
                    {min: 2000, max: 1000000, label: '大于等于2000条', color: 'rgba(237,100,16,0.8)'},
                    {min: 1500, max: 1999, label: '1500-1999条', color: '#ffb058'},
                    {min: 1000, max: 1499, label: '1000-1499条', color: 'rgba(248,193,113,0.93)'},
                    {min: 500, max: 999, label: '500-999条', color: '#ffd897'},
                    {min: 0, max: 499, label: '0-499条', color: '#ffeecd'},
                ],
                textStyle:{
                    color:['white','red']
                }
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},   //数据视图
                }
            },
            series: [
                {
                    name: '确诊人数',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label: {
                        show: true,
                        color: '#696a6c'
                    },
                    data: dataList,
                    joinBy: 'name' // 根据 name 属性进行关联
                }
            ]
        };

// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    },
    error:function (msg) {
        console.log(msg)
    }

})

// var data = [{"name": "北京", "value": 1767}, {"name": "天津", "value": 1786}, {"name": "河北", "value": 1952}, {
//     "name": "山西",
//     "value": 78
// }, {"name": "内蒙古", "value": 1683}, {"name": "辽宁", "value": 1580}, {"name": "吉林", "value": 29063}, {
//     "name": "黑龙江",
//     "value": 2407
// }, {"name": "上海", "value": 6087}, {"name": "江苏", "value": 0}, {"name": "浙江", "value": 2682}, {
//     "name": "安徽",
//     "value": 1037
// }, {"name": "福建", "value": 2778}, {"name": "江西", "value": 1036}, {"name": "山东", "value": 2577}, {
//     "name": "河南",
//     "value": 2830
// }, {"name": "湖北", "value": 68391}, {"name": "湖南", "value": 1324}, {"name": "广东", "value": 6586}, {
//     "name": "广西",
//     "value": 1479
// }, {"name": "海南", "value": 197}, {"name": "重庆", "value": 691}, {"name": "四川", "value": 1732}, {
//     "name": "贵州",
//     "value": 174
// }, {"name": "云南", "value": 2066}, {"name": "西藏", "value": 1}, {"name": "陕西", "value": 3221}, {
//     "name": "甘肃",
//     "value": 681
// }, {"name": "青海", "value": 32}, {"name": "宁夏", "value": 122}, {"name": "新疆", "value": 997}, {
//     "name": "台湾",
//     "value": 23393
// }, {"name": "香港", "value": 285786}, {"name": "澳门", "value": 82}, {"name": "南海诸岛", "value": 0}, {
//     "name": "南海诸岛",
//     "value": 0
// }];






