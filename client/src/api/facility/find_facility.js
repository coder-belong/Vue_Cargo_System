import { myaxios } from '../network'

// 设备_查询
function findFacility() {
    return myaxios({
        url: '/admin/facility/info'
    })
}

// 查询id查询设备数据
function findFacility_by_id(id) {
    return myaxios({
        url: `/admin/facility/info/${id}`
    })
}


// 根据关键字查询设备
function findFacility_by_key(key) {
    return myaxios({
        url: `/admin/facility/info_key`,
        params: {
            key
        }
    })
}

export {
    findFacility_by_key,
    findFacility,
    findFacility_by_id
}