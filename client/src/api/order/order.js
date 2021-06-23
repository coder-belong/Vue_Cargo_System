import { myaxios } from '../network'

// 订单_查询
function findOrder() {
    return myaxios({
        url: '/admin/order/find'
    })
}


// 订单_查询
function findOrder_key(key) {
    return myaxios({
        url: '/admin/order_find_key',
        params: {
            key
        }
    })
}





export {
    findOrder,
    findOrder_key
}