let { sqlQuery } = require('../../../model/dataBase')
let { resultData } = require('../../../tool/resultData')

module.exports = async (req, res, next) => {
    console.log('来到了add_info中间件');
    let { facility_name, facility_phone, facility_place, facility_email, facility_principal } = req.body

    // 查询数据表中最大的自增ID
    let maxID = await sqlQuery(`SELECT max(id) FROM facility_info`)
    maxID = maxID[0]['max(id)'] + 1


    let addSQL = `insert into facility_info(id, facility_name, facility_phone, facility_place, facility_email, facility_principal) value('${maxID}', '${facility_name}', ${facility_phone}, '${facility_place}', '${facility_email}', '${facility_principal}')`
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