/*标准——雷达图*/
var radar = echarts.init(document.getElementById('chart_1'));

$.ajax({
    url:'http://localhost:8080/queryHotTopicList',
    type:'get',
    dataType:'json',
    data:{},
    // headers:'',
    success:function(data){
        var indicator  = [];
        var positiveValue = [];
        var negativeValue = [];

        for (var i = 0; i< data.length;i++) {
            indicator.push({
                name: data[i].topicName, max: 1
            })
            positiveValue.push(data[i].positiveValue)
            negativeValue.push(data[i].negativeValue)
        }
        console.log(indicator);
        console.log(positiveValue);
        console.log(negativeValue);


        option = {
            title: {
                text: ''
            },
            tooltip: {
                position: function(point, params, dom, rect, size) {
                    //其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
                    var x = point[0];//
                    var y = point[1];
                    var viewWidth = size.viewSize[0];
                    var viewHeight = size.viewSize[1];
                    var boxWidth = size.contentSize[0];
                    var boxHeight = size.contentSize[1];
                    var posX = 0;//x坐标位置
                    var posY = 0;//y坐标位置

                    if (x < boxWidth) {//左边放不开
                        posX = 5;
                    } else {//左边放的下
                        posX = x - boxWidth;
                    }

                    if (y < boxHeight) {//上边放不开
                        posY = 5;
                    } else {//上边放得下
                        posY = y - boxHeight;
                    }
                    return [posX, posY];
                }
            },
            legend: {

                data: ['正面倾向', '负面倾向'],
                x:"center",
                y:'bottom',
                textStyle:{
                    color:"#fff"
                }
            },
            color: [ '#f6731b', '#0cc3a5'],
            radar: {
                name:{
                    textStyle: {
                        //设置颜色
                        color:'#fff'
                    },
                    formatter: function(value) {
                        let list = value.split("");
                        let result="";
                        for(let i=1;i<=list.length;i++) {
                            if(!(i%10)&&list[i]!=undefined) {
                                result += list[i-1]+'\n';
                            }else {
                                result += list[i-1];
                            }
                        }
                        return result;
                    }
                },
                indicator: indicator,
                center: ['50%','50%'],
                radius: "52%"
            },
            series: [{
                name: '',
                type: 'radar',
                itemStyle : {
                    normal : {
                        splitLine: {
                            lineStyle: {

                            }
                        },
                        label: {
                            show: false,
                            textStyle:{
                            },
                            formatter:function(params) {
                                return params.value;}
                        },
                    }
                },
                data : [
                    {
                        value : positiveValue,
                        name : '正面倾向'
                    },
                    {
                        value : negativeValue,
                        name : '负面倾向'
                    }
                ]
            }]
        };
        radar.setOption(option);
    },
    error: function(msg){
        console.log(msg)

    }
});
