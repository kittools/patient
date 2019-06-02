package main

import (
	"encoding/gob"
	"github.com/astaxie/beego"
	"github.com/kittools/patient/controllers"
	"github.com/kittools/patient/models"
	_ "github.com/kittools/patient/models"
	_ "github.com/kittools/patient/routers"
)

func main() {
	initSession()
	beego.ErrorController(&controllers.ErrorController{})
	beego.Run()
}

func initSession() {
	gob.Register(models.User{})
	beego.BConfig.WebConfig.Session.SessionOn = true
	beego.BConfig.WebConfig.Session.SessionName = "liteblog-key"
	beego.BConfig.WebConfig.Session.SessionProvider = "file"
	beego.BConfig.WebConfig.Session.SessionProviderConfig = "data/session"
}
