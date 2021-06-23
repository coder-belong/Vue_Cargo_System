import { myaxios } from '../network'

// 添加货物
function addCargo({ cargo_count, cargo_name, cargo_price }) {
    return myaxios({
        url: '/admin/cargo/info',
        method: 'post',
        data: {
            cargo_count,
            cargo_name,
            cargo_price
        }
    })
}

export {
    addCargo,
}