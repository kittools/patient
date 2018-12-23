(function () {
  $("body").on("click", ".firstpanel-head ul li", function () {
    $(this).addClass("active");
    $(this)
      .siblings()
      .removeClass("active");
  });
  // 动态获取li 宽度
  var fenbianlv = $(window).width();

//if (fenbianlv >= 1920) {
//  console.log(fenbianlv)
//  $(".firstpanel-food").css("height", "41%");
//}
  if (fenbianlv <= 1600) {
    console.log(fenbianlv)
    $(".fistpanel-shuilizhishi .shuilizhishi .float-left p").css("width", "100%");
    $(".fistpanel-shuilizhishi .shuilizhishi .float-left span").css("width", "100%");
  }
  $(window).resize(function () {
    var width = $('.ul-riqi li').width();
    $(".ul-riqi li").css("height", width);
    $(".ul-riqi li").css("line-height", width+"px");
//  $(".ul-riqi li").css("padding-top", width / 15);
    var fenbianlv = $(window).width();

//  if (fenbianlv >= 1920) {
//    console.log(fenbianlv)
//    $(".firstpanel-food").css("height", "41%");
//  }
    if (fenbianlv <= 1600) {
      console.log(fenbianlv)
      $(".fistpanel-shuilizhishi .shuilizhishi .float-left p").css("width", "100%");
      $(".fistpanel-shuilizhishi .shuilizhishi .float-left span").css("width", "100%");
    }
  })

  // 获取当前日期
  var date = new Date();
  var jintian = date.getDate();
  var nian = date.getFullYear();
  var yue = date.getMonth() + 1;
  console.log(jintian)
  console.log(nian)
  console.log(yue)
  $("#nian").find("option:selected").text((date.getFullYear()));
  $("#yue").find("option:selected").text((date.getMonth() + 1));
  // 日历数据
  rili(date.getFullYear(),(date.getMonth() + 1));
  function rili(y, r) {
    if (r < 10) {
      r = "0" + r;
      console.log(r)
    }
    var list = [];
    $.ajax({
      url: "http://wateroa.sxjicheng.com/api/calendar/",
      type: "get",
      data: {
        year: y,
        month: r
      },
      success: function (data) {
        console.log(data)
        $(".ul-riqi").html("");
        list = data.data;
        // if (list.length == 6) {
        //   $("#firstbody").css("height", "330px")
        //   $(".ul-riqi").css("height", "313px")
        // } else {
        //   $("#firstbody").css("height", "290px")
        //   $(".ul-riqi").css("height", "260px")
        // }
        for (var i = 0; i < list.length; i++) {
          for (var j = 0; j < list[i].length; j++) {

            if (list[i] == list[0]) {

              if (parseFloat(list[i][j].day) > 8) {
                $(".ul-riqi").append("<li class='huisrshang'>" + list[i][j].day + "<span></span></li>");
              } else {
                $(".ul-riqi").append("<li>" + list[i][j].day + "<span></span></li>");
              }
            } else if (list[i] == list[(list.length - 1)]) {
              if (parseFloat(list[i][j].day) < 20) {
                $(".ul-riqi").append("<li class='huisrxia'>" + list[i][j].day + "<span></span></li>");
              } else {
                $(".ul-riqi").append("<li>" + list[i][j].day + "<span></span></li>");
              }
            } else {
              if (list[i][j].day == jintian && list[i][j].year == nian && list[i][j].month == yue) {
                $(".ul-riqi").append("<li class='jintian'>" + list[i][j].day + "<span'></span></li>");
              } else if (list[i][j].status == 1) {
                $(".ul-riqi").append("<li>" + list[i][j].day + "<span class='span1'></span></li>");
              } else {
                $(".ul-riqi").append("<li>" + list[i][j].day + "<span></span></li>");
              }
            }

          }

        }
        $(".ul-riqi li").click(function () {
          
          $.getScript("./js/jquery.xdomainrequest.min.js");  //加载js文件
         
           
         
          $(this).css("border", "1px solid #377af2")
          $(this).css("color", "#377af2")
          $(this).find('span').css("background", "#377af2")
          $(this).siblings().css("border", "1px solid #fff")
          $(this).siblings().css("color", "#8392a5")
          $(this).siblings().find('span').css("background", "#f19b57")
          if ($(this).attr("class") == "huisrshang") {
            if (r == "01") {
              rili(parseFloat(y) - 1, 12)
              $("#nian").find("option:selected").text((parseFloat(y) - 1));
              $("#yue").find("option:selected").text((12));
              $("#nian").find("option:selected").val((parseFloat(y) - 1));
              $("#yue").find("option:selected").val((12));
            } else {
              rili(y, parseFloat(r) - 1)
              $("#nian").find("option:selected").text((y));
              $("#yue").find("option:selected").text((parseFloat(r) - 1));
              $("#nian").find("option:selected").val((y));
              $("#yue").find("option:selected").val((parseFloat(r) - 1));
            }

          }
          if ($(this).attr("class") == "huisrxia") {
            if (r == "12") {
              rili(parseFloat(y) + 1, 1)
              $("#nian").find("option:selected").text((parseFloat(y) + 1));
              $("#yue").find("option:selected").text((1));
              $("#nian").find("option:selected").val((parseFloat(y) + 1));
              $("#yue").find("option:selected").val((1));
            } else {
              rili(y, parseFloat(r) + 1)
              $("#nian").find("option:selected").text((y));
              $("#yue").find("option:selected").text((parseFloat(r) + 1));
              $("#nian").find("option:selected").val((y));
              $("#yue").find("option:selected").val((parseFloat(r) + 1));
            }



          }


        })
        var w = $('.ul-riqi li').width();
        $(".ul-riqi li").css("height", w);
        $(".ul-riqi li").css("line-height", w+"px");
        var fenbianlv = $(window).width();
//      console.log(fenbianlv)
//      if (fenbianlv >= 1920) {
//        $(".firstpanel-food").css("heigth", "41%");
//      }
      },
      error: function (e) {
        // alert("错误！！");
      }
    });
  }

  $("#nian").change(function () {
    var year = $("#nian option:selected").val();
    var month = $("#yue option:selected").val();
    $.getScript("./js/jquery.xdomainrequest.min.js");  //加载js文件
    rili(year, month)
  })
  $("#yue").change(function () {
    var year = $("#nian option:selected").val();
    var month = $("#yue option:selected").val();
    $.getScript("./js/jquery.xdomainrequest.min.js");  //加载js文件
    rili(year, month)
  })

  $("#dangqian").click(function () {
    $("#nian").find("option:selected").text((date.getFullYear()));
    $("#yue").find("option:selected").text((date.getMonth() + 1));
    // 日历数据
    $.getScript("./js/jquery.xdomainrequest.min.js");  //加载js文件
    rili(date.getFullYear(), date.getMonth() + 1);

  })




})();
