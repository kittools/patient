package controllers

import "github.com/astaxie/beego"

type CaseController struct {
	beego.Controller
}

func (this *CaseController) Get() {
	this.TplName = "case/case.html"
}
