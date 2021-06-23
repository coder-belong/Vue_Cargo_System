const bcrypt = require('bcryptjs'); // 导入bcryptjs模块

let { sqlQuery } = require('../../../model/dataBase')
let { setToken, } = require('../../../tool/token')
let { resultData, } = require('../../../tool/resultData')

// 当前接口要操作的数据表名
let tableName = 'user_info'

module.exports = async (req, res, next) => {
    let { username, password } = req.body
    // console.log(username, password);

    try {
        // 1. 根据用户名查询相关用户数据
        let userInfo = await sqlQuery(`select * from ${tableName} where username = '${username}'`)
        // 2. 数据库中是否有该用户名
        if (userInfo.length == 0) {
            return next('用户名或密码不正确，请重新输入')
        }

        // 3. 比对密码是否正确 （加密后的密码与原始密码进行比对）
        let isEqual = await bcrypt.compare(password, userInfo[0].password);
        // isEqual为true则比对正确 否则不比对
        if (isEqual) {
            // 生成token
            let token = setToken(username)
            let data = resultData('登录成功', 200)
            res.send({
                ...data,
                token
            })

        } else {
            next('用户名或密码不正确，请重新输入')
        }


    } catch (error) {
        console.log(error);
        next('登录失败')
    }
}