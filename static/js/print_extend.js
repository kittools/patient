function btn_print(data) {
	var _data = data;
	$("." + _data).find(".no_print").css("display", "none");
	$(".title." + _data).css({
		"fontSize": "30px",
		"fontWeight": "bold",
		"textAlign": "center",
		"display": "block",
		"marginBottom": "15px"
	});
	$("." + _data).jqprint();
	$("." + _data).find(".no_print").css("display", "table-cell");
	$(".title." + _data).css({
		"fontSize": "30px",
		"fontWeight": "bold",
		"textAlign": "left",
		"display": "inline",
		"marginBottom": "0px"
	});
}