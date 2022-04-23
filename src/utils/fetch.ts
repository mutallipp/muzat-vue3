import axios, { AxiosError } from 'axios'
import qs from 'qs'
import settle from '../../node_modules/axios/lib/core/settle'

// 设置表单类型
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const fetch = axios.create({
  withCredentials: true,
  timeout: 5000,
})
const jumpLoginCount = 0

// request拦截器,在请求之前做一些处理
fetch.interceptors.request.use(
  (config) => {
    Object.assign(config.headers, {
    })
    config.data = qs.stringify(config.data)

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 配置成功后的拦截器
fetch.interceptors.response.use(
  (res) => {
    const params = qs.parse(res.config.data)

    // TODO 根据后端成功状态配置
    if (['20001'].includes(`${res.data.code}`)) {
      // 是否返回根数据
      if (params.rootResult) return res
      else return res.data
    } else {
      return Promise.reject(res.data)
    }
  },
  (error: AxiosError) => {
    console.log('error', error)

    const params = qs.parse(error.config.data)
    // 未登录 跳转登录页
    if (error.response!.status === 401) {
      return Promise.reject(error)
    }

    return Promise.reject(error)
  },
)
// 适配 小程序
fetch.defaults.adapter = function (config: any) {
  return new Promise((resolve, reject) => {
    // const settle = require('axios/lib/core/settle')
    // const buildURL = require('axios/lib/helpers/buildURL')

    uni.request({
      method: config.method.toUpperCase(),
      url: config.url,
      header: config.headers,
      data: config.data,
      dataType: config.dataType,
      responseType: config.responseType,
      sslVerify: config.sslVerify,
      complete: function complete (response: any) {
        response = {
          data: response.data,
          status: response.statusCode,
          errMsg: response.errMsg,
          headers: response.header, // 注意此处 单复数
          config,
        }
        settle(resolve, reject, response)
      },
    })
  })
}

export { fetch }
