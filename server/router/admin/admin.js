const epxress = require('express')

// 创建二级路由
const admin = epxress.Router()


// -------------------- 货物相关接口 ------------------------------
// 货物_查询
admin.get('/cargo/info', require('./cargo_info/find_info'))

// 货物_新增
admin.post('/cargo/info', require('./cargo_info/add_info'))

// 货物_修改
admin.put('/cargo/info/:id', require('./cargo_info/modify_info'))

// 货物_删除
admin.delete('/cargo/info/:id', require('./cargo_info/delete_info'))

// 货物_查询 by id
admin.get('/cargo/info/:id', require('./cargo_info/find_info_by_id'))

// 货物_查询 by key
admin.get('/cargo/info_key', require('./cargo_info/find_info_by_key'))


// ------------------------- 订单接口 ---------------------------
// 订单_查询
admin.get('/order/find', require('./order_list/find'))

// 订单_查询 by key
admin.get('/order_find_key', require('./order_list/find_by_key'))



// --------------------  设备相关接口 -----------------------------
// 设备_查询
admin.get('/facility/info', require('./facility_info/find_info'))

// 设备_新增
admin.post('/facility/info', require('./facility_info/add_info'))

// 设备_修改
admin.put('/facility/info/:id', require('./facility_info/modify_info'))

// 设备_删除
admin.delete('/facility/info/:id', require('./facility_info/delete_info'))

// 设备_查询 by id
admin.get('/facility/info/:id', require('./facility_info/find_info_by_id'))

// 设备_查询 by key
admin.get('/facility/info_key', require('./facility_info/find_info_by_key'))


module.exports = {
    admin
}


