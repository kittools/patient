package controllers

import "github.com/astaxie/beego"

type CommonController struct {
	beego.Controller
}

func (this *CommonController) Get() {
	this.TplName = "common/link.html"
}
