import { myaxios } from '../network'

// 修改设备
function editFacility({ id, facility_name, facility_phone, facility_place, facility_email, facility_principal }) {
    return myaxios({
        url: `/admin/Facility/info/${id}`,
        method: 'put',
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
    editFacility,
}