package controllers

import "github.com/astaxie/beego"

type JieController struct {
	beego.Controller
}

func (this *JieController) Get() {
	this.TplName = "jie/index.html"
}
