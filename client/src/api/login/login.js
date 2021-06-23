import { myaxios } from '../network'


// 注册的网络请求
function login(username, password) {
    return myaxios({
        method: 'post',
        url: '/home/login',
        data: {
            username,
            password
        }
    })
}

export {
    login
}