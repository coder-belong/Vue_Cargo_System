import { myaxios } from '../network'


// 注册的网络请求
function register(username, password) {
    return myaxios({
        method: 'post', 
        url: '/home/register',
        data: {
            username,
            password
        }
    })
}

export {
    register
}