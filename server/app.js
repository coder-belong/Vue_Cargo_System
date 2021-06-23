const epxress = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// 引入二级路由
const { admin } = require('./router/admin/admin')
const home = require('./router/home/home')

const app = epxress()

// 解决跨域
app.use(cors())

// 配置body-parser模块 解析body 请求参数
app.use(bodyParser.urlencoded({ extended: false })); // body 
// 解决json格式的请求参数
app.use(bodyParser.json())  // request payload

// 校验token是否过期
app.use(require('./middleware/token'));

// 配置二级路由
app.use('/admin', admin)
app.use('/home', home)


// 错误处理中间件
app.use(require('./middleware/error'))


app.listen(8009, (err) => console.log('服务器启动成功, 端口号为8009'))