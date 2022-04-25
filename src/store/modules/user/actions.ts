import { IRootState } from '@store/types'
import { ActionTree } from 'vuex'
import { loginApi } from '@api/ILogin'
import { IUserState } from './types/state'
import { UserActions } from './types/actions'
import { UserActionTypes } from './constants/action'
import { UserMutationTypes } from './constants/mutations'

/**
 * 用户应用的 actions
 */
export const userActions:ActionTree<IUserState, IRootState> & UserActions = {
  /**
   *  用户登录
   */
  async [UserActionTypes.LOGIN] ({ commit }) {
    // eslint-disable-next-line no-async-promise-executor
    commit(UserMutationTypes.SET_DATA_PROMISE, new Promise(async (resolve, reject) => {
      const { code, data } = await loginApi()
      if (code !== 200) {
        reject(new Error('promise 初始化失败'))
      } else {
        const token = `${data.tokenHead} ${data.token}`
        commit(UserMutationTypes.SET_TOKEN, token)
        resolve(token)
        // 获取用户信息
        // dispatch(UserActionTypes.GET_USER_INFO)
        // // 获取系统配置信息
        // dispatch(SettingActionTypes.GET_BASE_CONFIG)
        // // 获取导航栏
        // dispatch(SettingActionTypes.GET_TAB_BAR)
        // console.log('login over')
      }
    }))
  },
}
