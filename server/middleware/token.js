// 引入token相关模块
const { verify_Token } = require('../tool/token')
const { resultData } = require('../tool/resultData')

module.exports = (req, res, next) => {
    const token = req.headers['authorization']
    console.log('来到了全局中间件');
    let path = req.originalUrl
    // 登录注册接口不需要验证token
    if (path === '/home/login' || path === '/home/register') {
        return next()
    }
    
    // 判断token是否存在或是否已过期
    if (token === undefined) {
        console.log('没有token，需要重新获取token');
        res.send(resultData('没有访问权限，请登录', 401))
    } else {
        // 1. 校验token
        verify_Token(token).then(data => {
            // token校验成功
            console.log('token校验成功');
            next()
        }).catch(err => {
            // token校验失败
            console.log('token校验失败');
            res.send(resultData('token已失效，请重新登录', 401))
        })
    }
}