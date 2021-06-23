let { sqlQuery } = require('../../../model/dataBase')
let { resultData } = require('../../../tool/resultData')
let { timeFommater } = require('../../../tool/tool')

module.exports = async (req, res, next) => {
    console.log('来到了add_info中间件');
    let { cargo_name, cargo_price, cargo_count } = req.body
    console.log(cargo_name, cargo_price, cargo_count);

    // 查询数据表中最大的自增ID
    let maxID = await sqlQuery(`SELECT max(id) FROM cargo_info`)
    maxID = maxID[0]['max(id)'] + 1

    // 获取当前时间
    let nowTime = timeFommater(Date.now())

    let addSQL = `insert into cargo_info(id, cargo_name, cargo_price, cargo_count, cargo_time) value('${maxID}', '${cargo_name}', ${cargo_price}, ${cargo_count}, '${nowTime}')`
    // console.log(addSQL);

    sqlQuery(addSQL)
        .then(data => {
            res.send(resultData('新增成功', 200, []))
        })

        .catch(err => {
            console.log(err);
            next('新增失败')
        })
}