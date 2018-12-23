//左右表格高度对齐
			$(function() {
				var x3_height = $(".line-small .x3").height();
				var x9_height = $(".line-small .x9").height();
				if(x3_height > x9_height) {
					$(".line-small .x9").css("height", x3_height + "px");
				} else {
					$(".line-small .x3").css("height", x9_height + "px");
				}
			})