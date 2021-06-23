import { myaxios } from '../network'

// 删除用户
function deleteCargo(id) {
    return myaxios({
        method: 'delete',
        url: `admin/cargo/info/${id}`,
    })
}

 
export {
    deleteCargo,
}
