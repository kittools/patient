package main

import (
	"github.com/astaxie/beego"
	_ "github.com/kittools/patient/routers"
)

func main() {
	beego.Run()
}
