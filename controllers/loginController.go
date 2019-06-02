package controllers

import (
	"github.com/kittools/patient/models"
)

type LoginController struct {
	BaseController
}

func (this *LoginController) Get() {
	this.TplName = "user/login.html"
}

func (this *LoginController) Post() {
	email := this.GetString("email")
	pwd := this.GetString("pass")
	if len(email) == 0 {
		this.Data["tips"] = "邮箱居然是空的"
		this.TplName = "other/tips.html"
	} else if len(pwd) == 0 {
		this.Data["tips"] = "密码不能为空哦"
		this.TplName = "other/tips.html"
	} else {
		var (
			user models.User
			err  error
		)
		if user, err = models.QueryUser(email, pwd); err != nil {
			this.Data["tips"] = "用户名或密码错误"
			this.TplName = "other/tips.html"
		} else {
			this.SetSession(SessionUserKey, user)
			this.TplName = "index.html"
		}
	}
}
