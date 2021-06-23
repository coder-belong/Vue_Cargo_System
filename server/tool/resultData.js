// 统一接口返回的数据
function resultData(msg, status, data) {
    return {
        meta: {
            msg,
            status
        },
        data: data || [],
    }
}

module.exports = {
    resultData
}