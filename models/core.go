package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var (
	db *gorm.DB
)

func init() {
	var err error
	db, err = gorm.Open("mysql", "root:Wyf@1012@/patient?charset=utf8&parseTime=True&loc=Local")
	if err != nil {
		panic("failed to connect database")
	}
	db.AutoMigrate(&User{})
	var count int
	if err = db.Model(&User{}).Count(&count).Error; err == nil && count == 0 {
		db.Create(&User{
			Username: "admin",
			Password: "123456",
			Hash:     "klkl;fsk;dfk;",
			Role:     0,
			Mobile:   "15698561279",
			Email:    "wyf930102@163.com",
		})
	}
	//defer db.Close()
}
