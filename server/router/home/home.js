const express = require('express')
const home = express.Router()

// 注册
home.post('/register', require('./register/register'))

// 登录
home.post('/login', require('./login/login'))

module.exports = home

