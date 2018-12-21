<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>登录</title>
    <link rel="stylesheet" href="../../css/pintuer.css" />
    <link rel="stylesheet" href="../../css/login.css">
    <script src="../../js/jquery-1.8.3.min.js"></script>
</head>
<body>
<div class="background">
    <div class="box">
        <div class="box_top">
            <img src="../../images/logo.png"/>
            <div class="box_top_title">山西水利厅协同办公系统</div>
        </div>
        <div class="box_bottom">
            <form action="" method="post" class="login_form">
                <div class="box_bottom_text">
                    <div class="text_num">
                        <img src="../../images/personal_center.png" class="num_bag1"/>
                        <input type="text" name="" id="" value="" placeholder="请输入账户" autocomplete="off" />
                    </div>
                    <div class="text_num">
                        <img src="../../images/password.png" class="num_bag1"/>
                        <input type="password" name="" id="pass" value="" placeholder="请输入密码" autocomplete="off" />
                        <div id="eye">
                            <img src="../../images/eye.png">
                            <img src="../../images/eye2.png" style="display:none;">
                        </div>
                    </div>
                </div>
                <div class="pass_box">
                    <div id="checkbox">
                        <img src="../../images/check_box.png">
                        <img src="../../images/check_box1.png" style="display:none;">
                    </div>
                    <div class="rem_text">记住密码</div>
                    <a href="javascript:;" class="forget">忘记密码?</a>
                </div>
                <button class="entry">立即登录</button>
            </form>
        </div>
    </div>
</div>
</body>
<script>
    $("#checkbox").click(function(){
        $("#checkbox>img").toggle();
    });
    $("#eye").click(function(){
        $("#eye>img").toggle();
        var a=$("#pass").attr("type");
        if(a=="password"){
            $("#pass").get(0).setAttribute("type","text");
        }else{
            $("#pass").get(0).setAttribute("type","password");
        }
    });
</script>
</html>
