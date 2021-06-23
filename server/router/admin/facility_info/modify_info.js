let { sqlQuery } = require('../../../model/dataBase')
let { resultData } = require('../../../tool/resultData')

module.exports = async (req, res, next) => {
    let id = req.params.id
    let { facility_name, facility_phone, facility_place, facility_email, facility_principal } = req.body
    // console.log(id, name, amount);

    let editSQL = `update facility_info set facility_name = '${facility_name}', facility_phone = '${facility_phone}', facility_place = '${facility_place}', facility_email = '${facility_email}', facility_principal = '${facility_principal}' where id = ${id}`

    sqlQuery(editSQL)
        .then(data => {
            res.send(resultData('修改成功', 200))
        })

        .catch(err => {
            console.log(err);
            next('修改失败')
        })
}