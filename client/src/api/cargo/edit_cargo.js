import { myaxios } from '../network'

// 修改用户
function editCargo({ id, cargo_count, cargo_name, cargo_price }) {
    return myaxios({
        url: `/admin/cargo/info/${id}`,
        method: 'put',
        data: {
            cargo_count,
            cargo_name,
            cargo_price
        }
    })
}


export {
    editCargo,
}