package controllers

import "github.com/astaxie/beego"

type JieController struct {
	beego.Controller
}

func (c *JieController) Get() {
	c.TplName = "jie/index.html"
}
