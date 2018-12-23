$(".interlacing tr:even").css("background-color","#f1f8fe");
$(".zong input[type=checkbox]").click(function() {
	$('input:checkbox').attr("checked", $(this).prop("checked"));
});