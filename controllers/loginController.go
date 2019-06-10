package controllers

import (
	"github.com/kittools/patient/models"
)

type LoginController struct {
	BaseController
}

func (c *LoginController) Get() {
	c.TplName = "user/login.html"
}

func (c *LoginController) Post() {
	email := c.GetString("email")
	pwd := c.GetString("pass")
	if len(email) == 0 {
		c.Data["tips"] = "邮箱居然是空的"
		c.TplName = "other/tips.html"
	} else if len(pwd) == 0 {
		c.Data["tips"] = "密码不能为空哦"
		c.TplName = "other/tips.html"
	} else {
		var (
			user models.User
			err  error
		)
		if user, err = models.QueryUser(email, pwd); err != nil {
			c.Data["tips"] = "用户名或密码错误"
			c.TplName = "other/tips.html"
		} else {
			c.SetSession(SessionUserKey, user)
			c.TplName = "index.html"
		}
	}
}
