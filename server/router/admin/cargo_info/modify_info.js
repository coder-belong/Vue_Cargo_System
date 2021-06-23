let { sqlQuery } = require('../../../model/dataBase')
let { resultData } = require('../../../tool/resultData')
let { timeFommater } = require('../../../tool/tool')

module.exports = async (req, res, next) => {
    let id = req.params.id
    let { cargo_name, cargo_price, cargo_count } = req.body
    // console.log(id, name, amount);

    // 获取当前时间
    let nowTime = timeFommater(Date.now())

    let editSQL = `update cargo_info set cargo_name = '${cargo_name}', cargo_price = ${cargo_price}, cargo_count = ${cargo_count} where id = ${id}`

    sqlQuery(editSQL)
        .then(data => {
            res.send(resultData('修改成功', 200))
        })

        .catch(err => {
            console.log(err);
            next('修改失败')
        })
}