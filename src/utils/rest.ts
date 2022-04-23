import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios'
import * as utils from '@/utils'
import store from '@/store'
import qs from 'qs'
import { IAnyObj } from '@/defineds'
import { IRestHeader, IResult, RequestMethod } from '@/defineds/rest'
import buildURL from '../../node_modules/axios/lib/helpers/buildURL'
import settle from '../../node_modules/axios/lib/core/settle'

/**
 * axios封装
 */
class Axios {
  /**
   * axios实例
   */
  _axiosCustom: AxiosInstance

  constructor () {
    // axios实例
    this._axiosCustom = axios.create({
      withCredentials: true,
      timeout: (2 * 60 * 1000),
    })
    this._init()
  }

  // 初始化模块
  _init (): void {
    // 适配 小程序
    this._axiosCustom.defaults.adapter = this._uniAppRequest.bind(this)
    this._request()
    this._response()
  }

  /**
   * post 请求
   * @param url url
   * @param params 参数
   * @param config 配置
   */
  public get (url: string, params: IAnyObj = {}, config: IAnyObj = {}) {
    console.log('get请求')
    return this._axiosCustom.get(url, {
      params,
      ...config,
    })
  }

  /**
   * get请求
   * @param url url
   * @param params 参数
   * @param config 配置
   */
  public post (url: string, params: IAnyObj = {}, config: IAnyObj = {}) {
    console.log('post请求')
    return this._axiosCustom.post(url, {
      data: params,
    })
  }

  /**
   * 请求发送之前调用
   */
  private _request () {
    this._axiosCustom.interceptors.request.use(config => {
      console.log('_request', config)

      // 自定义header，可添加项目token
      // if (store.state.app.token) {
      //   config.headers.token = store.state.app.token;
      //   config.headers.timestamp = new Date().getTime();
      // }
      return config
    }, error => {
      return Promise.reject(error)
    })
  }

  /**
   * 响应
   */
  private _response () {
    // 响应拦截
    this._axiosCustom.interceptors.response.use(response => {
      console.log('respone', response)

      const resCode = response.status
      if (resCode === 200) {
        console.log('请求成功')
        return Promise.resolve(response)
      } else {
        return Promise.reject(response)
      }
    }, error => {
      console.log('respone error', error.response)

      const resCode = error.response.status
      switch (resCode) {
        case 401:
          console.log('token-0')
          break
        case 404:
          console.log('网络请求不存在')
          break
        case 405:
          console.log('Method Not Allowed')
          break
        case 500:
          console.log('服务器连接错误')
          break
        // 其他状态码错误提示
        default:
          console.log('接口调用错误')
      }
      return Promise.reject(error)
    })
  }

  /**
   * 适配 小程序
   */
  private _uniAppRequest (config: any):AxiosPromise {
    return new Promise((resolve, reject) => {
      uni.request({
        method: config.method as any,
        url: buildURL(config.url, config.params, config.paramsSerializer),
        header: config.headers,
        data: config.data,
        dataType: config.dataType,
        responseType: config.responseType,
        sslVerify: config.sslVerify,
        complete: function complete (response: any) {
          // eslint-disable-next-line no-param-reassign
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

  // 初始化axios
  _initAxios (): void {
    this._axiosCustom = axios.create({
      timeout: (2 * 60 * 1000),
    })
  }

  // 设置公共header
  _getHeader<T> (headers: T): T {
    const globalHeaders = {}

    // token
    // if (store.state?.user?.infoMember?.token) {
    //   Object.assign(globalHeaders, {
    //     token: store.state.user.infoMember.token,
    //   })
    // }
    return Object.assign(globalHeaders, headers)
  }

  /**
   * 获取公共参数
   */
  _getParams (params: any, config: IAnyObj) {
    let newParams: FormData|null = null
    if (config.uploadFile) {
      if (utils.getElementType(config.uploadFileKey) !== 'array') throw new Error('uploadFileKey必须是一个数组')
      const form = new FormData()
      Object.entries(params).map(([key, value]: [string, any]) => {
        if (Reflect.has(params, key)) {
          if (config.uploadFileKey.includes(key) && utils.getElementType(value) === 'array') {
            value.map((item: any) => {
              form.append(key, item)
            })
          } else {
            form.append(key, value)
          }
        }
      })
      newParams = form
    } else {
      newParams = params
    }
    // formDate类型对象不做去除空值操作
    return utils.getElementActualType(newParams) !== 'formData' ? utils.pick({ ...newParams }) : newParams
  }

  /**
   *
   * @param url 计算url
   * @returns url
   */
  _getUrl (url: string, target = 'from-zeus'): string {
    if (/https?:/.test(url)) return url
    switch (target) {
      case 'apptest': {
        return `${import.meta.env.VITE_APP_testApi}${url}`
      }
      case 'muzat': {
        return `${import.meta.env.VITE_APP_Muzat}${url}`
      }
      case 'from-node': {
        return url
      }
      default: {
        return url
      }
    }
  }
}

export default new Axios()
