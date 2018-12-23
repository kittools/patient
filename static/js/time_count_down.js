var maxtime = time; //一个小时，按秒计算，自己调整!
function CountDown() {
	
	if(maxtime >= 0) {
		minutes = Math.floor(maxtime / 60);
		seconds = Math.floor(maxtime % 60);
//		msg =  minutes + ":" + seconds ;//4:5
		msg =  minutes + "分" + seconds +"秒";//4分5秒
		$(".datatime").text(msg);
		
		if(maxtime <= 5 * 60) $(".datatime").css("color","red");
		--maxtime;
		
	} else {
		clearInterval(timer);
//		alert("时间到，结束!");
		$(".form").submit();
	}
}
timer = setInterval("CountDown()", 1000);