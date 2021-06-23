import { myaxios } from '../network'

// 添加设备
function addFacility({ facility_name, facility_phone, facility_place, facility_email, facility_principal }) {
    return myaxios({
        url: '/admin/facility/info',
        method: 'post',
        data: {
            facility_name,
            facility_phone,
            facility_place,
            facility_email,
            facility_principal
        }
    })
}

export {
    addFacility,
}