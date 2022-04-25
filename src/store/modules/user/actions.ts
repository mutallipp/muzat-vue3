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
    const { code, data } = await loginApi()
    if (code !== 200) return
    const { token } = data
    commit(UserMutationTypes.SET_TOKEN, token)
  },
}
