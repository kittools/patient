package controllers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
	"github.com/kittools/patient/models"
)

type LoginController struct {
	beego.Controller
}

func init() {
	orm.RegisterDriver("mysql", orm.DRMySQL)
	orm.RegisterDataBase("default", "mysql", "root:wyf930102@/patient?charset=utf8")
}

//登录
func (this *LoginController) Get() {
	this.TplName = "login/login.html"
}

func (this *LoginController) Post() {
	u := models.User{}

	//获取用户名和密码
	if err := this.ParseForm(&u); err != nil {
		this.Ctx.WriteString("用户名或密码不能为空")
	}

	o := orm.NewOrm()
	err := o.Read(&u, "Username")
	if err == orm.ErrNoRows {
		this.Ctx.WriteString("查询不到")
	} else if err == orm.ErrMissPK {
		this.Ctx.WriteString("找不到主键")
	} else {
		this.Redirect("/", 200)
	}
}
