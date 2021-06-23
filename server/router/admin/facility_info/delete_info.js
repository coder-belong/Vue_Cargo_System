let { sqlQuery } = require('../../../model/dataBase')
let { resultData } = require('../../../tool/resultData')

module.exports = async (req, res, next) => {
    let id = req.params.id
    sqlQuery(`delete from facility_info where id = ${id}`)
        .then(data => {
            res.send(resultData('删除成功', 200))
        })

        .catch(err => {
            console.log(err);
            next('删除失败')
        })
}