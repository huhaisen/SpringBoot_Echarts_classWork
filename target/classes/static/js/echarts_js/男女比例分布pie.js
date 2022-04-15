var mychart = echarts.init(document.getElementById('chart_2'))

$.ajax({
    url:'http://localhost:8080/queryStaGender',
    type:'get',
    dataType:'json',
    data:{},
    // headers:'',
    success:function (data) {
        var male_num = data[0].maleNum;
        var female_num = data[0].femaleNum;

        // console.log(male_num);
        // console.log(female_num);

        option = {
            title:{
                text:'男女比例',
                left:'50%',
                top:'50%',
                textAlign:'center',
            },
            tooltip:{},  //鼠标移到上面有提示
            series: [
                {
                    type: 'pie',
                    radius: ['40%', '70%'],
                    labelLine:{  //更改指向文字的线条的相关属性
                        show:true,
                        lineStyle:{
                            color:'white'
                        }
                    },
                    label:{      //更改文字相关属性
                        color:'white'
                    },
                    // roseType:'area',    //南丁格尔玫瑰图
                    data: [
                        {
                            name: '男生',
                            value: male_num,
                            itemStyle:{
                                color:'#6c93ff'
                            }
                        },
                        {
                            name: '女生',
                            value: female_num,
                            itemStyle:{
                                color:'#ffbba4'
                            }
                        }
                    ]
                }
            ]
        }

        mychart.setOption(option)
    },
    error: function (msg) {
        console.log(msg)
    }
})

