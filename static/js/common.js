//人员选择
$(".djxz").on("click", personnel_select)
function personnel_select() {
    //iframe层
    var id=$(this).attr("data-id");
    var num=$(this).attr("data-num");
    var name=$(this).attr("data-name");
    var role=$(this).attr("data-role");
    var top=$(this).attr("data-top");
    var parent=$(this).attr("data-parent");
    var level=$(this).attr("data-level");
    var departmentId=$(this).attr("data-department");
    if (num=="1") {
        var num_len=$("#"+id);
        var ryxz_arr=[];
        var input_id="";
        for (var i=0;i<num_len.length;i++) {
            input_id=num_len.eq(i).find("input").eq(0).val();
            if (input_id!=""&&input_id!=undefined&&input_id!=null&&input_id!=" ") {
                ryxz_arr.push(input_id);
            }
        }
    }else{
        var num_len=$("#"+id).find(".label_box");
        var ryxz_arr=[];
        var input_id="";
        for (var i=0;i<num_len.length;i++) {
            input_id=num_len.eq(i).find("input").eq(0).val();
            if (input_id!=""&&input_id!=undefined&&input_id!=null&&input_id!=" ") {
                ryxz_arr.push(input_id);
            }
        }
    }
    layer.open({
        type: 2,
        title: '选择',
        closeBtn:0,
        shadeClose: true,
        shade: 0.8,
        area: ['60%', '80%'],
        content: url+'?many='+num+'&id='+id+'&name='+name+'&ryxz_arr='+ryxz_arr+'&role_id='+role+'&level='+level+'&top='+top+'&parent='+parent+'&department_id='+departmentId //iframe的url  many=0是多选;many=1是单选
    });
}

//选择资产
$(".choice_assets").on("click",selection_assets)

function selection_assets(){
    //iframe层
    var id=$(this).attr("data-id");
    var name=$(this).attr("data-name");
    layer.open({
        type: 2,
        title: '选择资产',
        shadeClose: true,
        shade: 0.8,
        area: ['800px', '550px'],
        content: url+'?name='+name+'&id='+id //iframe的url  many=0是多选;many=1是单选
    });
}
