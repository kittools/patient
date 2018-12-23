//文件上传
//$(".file_upload").on("click", file_upload)
function file_upload() {
	//iframe层
	var id=$(this).attr("data-file-id");
	var multiple=$(this).attr("data-file-multiple");
	layer.open({
		type: 2,
		title: '文件上传',
		closeBtn:1,
		shadeClose: true,
		shade: 0.8,
		area: ['65%', '85%'],
		content: path+'?file-id='+id+'&multiple='+multiple //iframe的url  many=0是多选;many=1是单选
	});
}
