(function () {
 


  // highcharts
    var chart = Highcharts.chart("container", {
      chart: {
        type: "column"
      },
      title: {
        text: " "
      },
      legend: {
        enabled: false
      },
        credits:{
            enabled: false // 禁用版权信息
        },
      xAxis: {
        categories: [
          "办公室",
          "人事处",
          "政策法规处",
          "规划计划处",
          "水资源处",
          "财务处",
          "基本建设处",
          "水利管理处",
          "农村水利处",
          "供水排水处",
          "水土保持局",
          "科技与外事处",
          "稽察处"
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: " "
        }
      },
      tooltip: {
        // head + 每个 point + footer 拼接成完整的 table
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          borderWidth: 0
        }
      },
      series: [
        {
          name: "积分",
          pointWidth:7,
          borderRadius: 5,
          data: [
            49.9,
            71.5,
            106.4,
            129.2,
            144.0,
            176.0,
            135.6,
            148.5,
            216.4,
            194.1,
            95.6,
            54.4
          ]
        }
      ]
    }, function (chart) {
      SetEveryOnePointColor(chart);
  });
    //设置每一个数据点的颜色值
    function SetEveryOnePointColor(chart) {
      //获得第一个序列的所有数据点
      var pointsList = chart.series[0].points;
      //遍历设置每一个数据点颜色
      for (var i = 0; i < pointsList.length; i++) {
        chart.series[0].points[i].update({
          color: {
            linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 }, //横向渐变效果 如果将x2和y2值交换将会变成纵向渐变效果
            stops: [
              [
                0,"#2e77f7"
              ],
              [1, "#10c2f6"]
            ]
          }
        });
      }
    }
})();
