package routers

import (
	"github.com/kittools/patient/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
    beego.Router("/login",&controllers.LoginController{})
}
