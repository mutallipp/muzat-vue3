import { IResult } from '@/defineds/utils/rest'
import rest from '@utils/rest'
import { ILoginCodeResult, ILoginResult } from './types'
import LoginUri from './uri'

/**
 * 获取code
 */
export const getLoginCodeApi = ():Promise<IResult<ILoginCodeResult>> => {
  return new Promise((resolve) => {
    const resultData:IResult<{code:string}> = {
      code: -100,
      data: {
        code: '',
      },
      msg: '',
    }
    // 获取code 小程序专有，用户登录凭证。
    uni.login({
      provider: 'weixin',
      success (res:any) {
        resultData.data.code = res.code
        resultData.code = 100
        resolve(resultData)
      },
      fail (err:any) {
        console.log('code获取失败', err)
        resultData.msg = err
        resolve(resultData)
      },
    })
  })
}

/**
 * 登录
 */
export const loginApi = async ():Promise<IResult<ILoginResult>> => {
  // 获取 code
  const { code, data, msg } = await getLoginCodeApi()
  if (code !== 100) return Promise.resolve({ code: -100, data: { token: '' }, msg })
  return rest.post(LoginUri.USER_LOGIN, { code: data.code })
}
