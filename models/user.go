package models

import (
	"github.com/jinzhu/gorm"
)

type User struct {
	gorm.Model
	Username string
	Password string
	Hash     string
	Role     int
	Mobile   string
	Email    string
}

func QueryUser(email, password string) (user User, err error) {
	return user, db.Model(&User{}).Where("email = ? and Password = ?", email, password).Take(&user).Error
}
