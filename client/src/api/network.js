import axios from 'axios'

// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style

// 基于axios的二次封装
function myaxios(options) {
    const instance = axios.create({
        // baseURL: 'http://www.localhost:8885/',
        baseURL: 'http://www.timecrush.cn:8885/',
        timeout: 999999,
    })

    // 请求拦截器
    instance.interceptors.request.use(config => {
        // NProgress.start()
        // 发送请求前需要携带token
        config.headers.authorization = localStorage.getItem('token')
        return config 
    })

    // 响应拦截器
    instance.interceptors.response.use(response => {
        // NProgress.done()
        return response.data 
    })

    return instance(options)
}


export {
    myaxios
}