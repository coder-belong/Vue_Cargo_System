// 密码加密功能
const bcrypt = require('bcryptjs'); // 导入bcryptjs模块

let { sqlQuery } = require('../../../model/dataBase')
let { setToken, } = require('../../../tool/token')
let { resultData, } = require('../../../tool/resultData')

let tableName = 'user_info'

module.exports = async (req, res, next) => {
    console.log('register中间件');
    let { username, password } = req.body
    // console.log(typeof username, typeof password);
    try {
        // 判断数据库中是否已存在该用户名
        let find_data = await sqlQuery(`select * from ${tableName} where username = '${username}'`)
        if (find_data.length != 0) {
            return next('当前用户名已被注册，请重新输入')
        }

        // 将用户名和密码写入到数据库中
        // 查询最大的自增ID
        let maxID = await sqlQuery(`SELECT max(id) FROM ${tableName}`)
        maxID = maxID[0]['max(id)'] + 1
        // 生成随机字符串
        let salt = await bcrypt.genSalt(10);
        // 将密码进行加密
        password = await bcrypt.hash(password, salt);
        
        // 添加用户的sql语句
        let insertSQL = `insert into ${tableName}(id, username, password) value(${maxID}, '${username}', '${password}')`

        await sqlQuery(insertSQL)

        // 生成token
        let token = setToken(username)
        // console.log(token);
        let data = resultData('注册成功', 200)
        res.send({
            ...data,
            token
        })

    } catch (err) {
        console.log(err);
        next('注册失败')
    }
}