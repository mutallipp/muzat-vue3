import { IRootState } from '@store/types'
import { ActionTree } from 'vuex'
import { SettingActionTypes } from './constants/action'
import { ISettingState } from './types/state'
import { SettingActions } from './types/actions'
import { SettingMutationTypes } from './constants/mutations'

/**
 * 用户应用的 actions
 */
export const settingActions:ActionTree<ISettingState, IRootState> & SettingActions = {
  /**
   *  用户登录
   */
  async [SettingActionTypes.LOGIN] ({ commit }) {
    commit(SettingMutationTypes.SET_TOKEN)
  },
}
