package controllers

import "github.com/astaxie/beego"

type CommonController struct {
	beego.Controller
}

func (c *CommonController) Get() {
	c.TplName = "common/link.html"
}
