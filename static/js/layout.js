//$(function(){
//	$(".sidebar_ul .sidebar_li").on("hover",function(){
//		$(".sidebar_ul .sidebar_li").attr("class","sidebar_li");
//		$(this).attr("class","sidebar_li active");
//	})
//})
function hideSubMenu(node){
	$('#sub_menu_' + node).hide();
	$('.content').css('left', '14.4%');
}

window.onload=function(){
	var _img = $(".sidebar_ul .sidebar_li.active .li_box img").attr("src");
	if(_img != undefined){
		var _img_num=_img.lastIndexOf(".");
		var _img_active=_img.slice(0,_img_num)+"_active"+_img.slice(_img_num);
		$(".sidebar_ul .sidebar_li.active .li_box img").attr("src",_img_active);
	}
}


//调整页面logo
$(function(){
    function img_size(){
        var img=$(".header .lefter img");
        var img_w=img.width();
        var img_h=parseInt((img_w/317)*92);
        var img_m_t=(92-img_h)/2+"px";
        img.css({"height":img_h+"px","marginTop":img_m_t});
    }
    img_size();
    window.onresize=img_size;
})
