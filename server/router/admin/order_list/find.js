let { sqlQuery } = require('../../../model/dataBase')
let { resultData } = require('../../../tool/resultData')


module.exports = (req, res, next) => {
    sqlQuery('select * from order_list')
        .then(data => res.send(resultData('查询成功', 200, data)))

        .catch(err => {
            console.log(err);
            next('查询失败')
        })
}