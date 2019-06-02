package controllers

import (
	"github.com/astaxie/beego"
	"github.com/kittools/patient/models"
)

const SessionUserKey = "SESSION_USER_KEY"

type BaseController struct {
	beego.Controller
	IsLogin bool        //标识 用户是否登陆
	User    models.User //登陆的用户
}

func (ctx *BaseController) Prepare() {
	// 验证用户是否登陆，判断session中是否存在用户，存在就已经登陆，不存在就没有登陆。
	ctx.IsLogin = false
	tu := ctx.GetSession(SessionUserKey)
	if tu != nil {
		if u, ok := tu.(models.User); ok {
			ctx.User = u
			ctx.Data["User"] = u
			ctx.IsLogin = true
		}
	}
	ctx.Data["IsLogin"] = ctx.IsLogin
}
