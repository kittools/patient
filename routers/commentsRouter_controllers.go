package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

	beego.GlobalControllerRouter["github.com/kittools/patient/controllers:IndexController"] = append(beego.GlobalControllerRouter["github.com/kittools/patient/controllers:IndexController"],
		beego.ControllerComments{
			Method:           "Index",
			Router:           `/[get]`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Filters:          nil,
			Params:           nil})

}
