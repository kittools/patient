package models

import "github.com/astaxie/beego/orm"

type User struct {
	Id        int
	Username  string
	Password  string
	Create_at orm.DateField
	Update_at orm.DateField
}

func init() {
	orm.RegisterModel(new(User))
}
