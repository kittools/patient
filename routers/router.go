package routers

import (
	"github.com/astaxie/beego"
	"github.com/kittools/patient/controllers"
)

func init() {
	beego.Router("/", &controllers.IndexController{})
	beego.Router("/case", &controllers.CaseController{})
	beego.Router("/common", &controllers.CommonController{})
	beego.Router("/jie", &controllers.JieController{})
	beego.Router("/login", &controllers.LoginController{})
}
