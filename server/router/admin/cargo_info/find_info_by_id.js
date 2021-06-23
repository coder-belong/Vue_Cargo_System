let { sqlQuery } = require('../../../model/dataBase')
let { resultData } = require('../../../tool/resultData')

module.exports = (req, res, next) => {
    console.log('来到了/info/:id中间件');
    let id = req.params.id
    sqlQuery(`select * from cargo_info where id = ${id}`)
        .then(data => {
            res.send(resultData('查询成功', 200, data[0]))
        })

        .catch(err => {
            console.log(err);
            next('查询失败')
        })
}