let { sqlQuery } = require('../../../model/dataBase')
let { resultData } = require('../../../tool/resultData')


module.exports = (req, res, next) => {
    console.log('来到了"/info"中间件');
    sqlQuery('select * from cargo_info')
        .then(data => res.send(resultData('查询成功', 200, data)))

        .catch(err => {
            console.log(err);
            next('查询失败')
        })
}