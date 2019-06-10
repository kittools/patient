package controllers

import "github.com/astaxie/beego"

type CaseController struct {
	beego.Controller
}

func (c *CaseController) Get() {
	c.TplName = "case/case.html"
}
