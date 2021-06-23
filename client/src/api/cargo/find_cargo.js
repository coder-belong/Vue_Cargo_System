import { myaxios } from '../network'

// 货物_查询
function findCargo() {
    return myaxios({
        url: '/admin/cargo/info'
    })
}

// 查询id查询用户数据
function findCargo_by_id(id) {
    return myaxios({
        url: `/admin/cargo/info/${id}`
    })
}


// 根据关键字查询用户
function findCargo_by_key(key) {
    return myaxios({
        url: `/admin/cargo/info_key`,
        params: {
            key
        }
    })
}

export {
    findCargo_by_key,
    findCargo,
    findCargo_by_id
}