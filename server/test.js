const epxress = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


// 引入token相关模块
const expressJwt = require('express-jwt')
const { setToken, verify_Token } = require('./tool/token')

const jwt = require('jsonwebtoken')
const singnKey = 'zgs_first_token';  //签名

const app = epxress()

// 解决跨域
app.use(cors())

// 配置body-parser模块 解析body 请求参数
app.use(bodyParser.urlencoded({ extended: false })); // body 
// 解决json格式的请求参数
app.use(bodyParser.json())  // request payload

let token = jwt.sign(
    { name: '张三' },
    singnKey,
    { expiresIn: '1h' },
)

// console.log(token);

jwt.verify(token, singnKey, (err, data) => {
    console.log(err);
    console.log(data); 
})

// let token = setToken('张三')
// console.log(token);


// verify_Token('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi5byg5LiJIiwiaWF0IjoxNjIzNzQxNjQ3LCJleHAiOjE2MjM3NDUyNDd9.fhh8B3rdkobKP06CekNdxOwt2oVUfC9fwPZQKBd0aTw').then(data => {
//     console.log(data);
// }).catch(err => console.log(err))


app.use((req, res, next) => {
    const token = req.headers['authorization']
    console.log('来到了全局中间件');
    let path = req.originalUrl
    if (path === '/home/login' || path === '/home/register') {
        return next()
    }

    if (token === undefined) {
        console.log('没有token，需要重新获取token');
        next()
    } else {
        // 1. 校验token
        verify_Token(token).then(data => {
            console.log('token校验成功');
            next()
        }).catch(err => {
            console.log('token校验失败');
            res.send({
                meta: {msg: 'token已失效', status: 401}
            })
        })
    }
})


app.post('/home/login', (req, res, next) => {
    console.log('来到了登录中间件');
    let token = setToken('张三')
    res.send({
        meta: {
            msg: '登录成功',
            status: 200
        },
        data: [],
        token
    })
})

app.get('/admin/info', require('./router/admin/find_info'))
app.post('/admin/info', require('./router/admin/add_info'))
app.put('/admin/info/:id', require('./router/admin/modify_info'))
app.delete('/admin/info/:id', require('./router/admin/delete_info'))
app.get('/admin/info/:id', require('./router/admin/find_info_by_id'))
app.get('/admin/info_key', require('./router/admin/find_info_by_key'))



// 错误处理中间件
app.use(require('./middleware/error'))


app.listen(8009, (err) => console.log('服务器启动成功, 端口号为8009'))