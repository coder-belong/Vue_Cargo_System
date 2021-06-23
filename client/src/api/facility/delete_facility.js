import { myaxios } from '../network'

// 删除设备
function deleteFacility(id) {
    return myaxios({
        method: 'delete',
        url: `admin/facility/info/${id}`,
    })
}

 
export {
    deleteFacility,
}
