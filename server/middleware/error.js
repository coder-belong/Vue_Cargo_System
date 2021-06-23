const { resultData } = require('../tool/resultData')


module.exports = (err, req, res, next) => {
    console.log('来到了错误处理中间件');
    res.status(200).send(resultData(err, 401))
}