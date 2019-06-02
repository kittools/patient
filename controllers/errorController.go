package controllers

import "github.com/astaxie/beego"

type ErrorController struct {
	beego.Controller
}

func (e *ErrorController) Error404() {
	e.TplName = "other/404.html"
}

func (e *ErrorController) Error500() {
	e.TplName = "other/500.html"
}
