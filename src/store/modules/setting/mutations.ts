import { MutationTree } from 'vuex'
import { SettingMutationTypes } from './constants/mutations'
import { SettingMutations } from './types/mutations'
import { ISettingState } from './types/state'

/**
 * 用户 mutations
 */
export const settingMutations:MutationTree<ISettingState> &SettingMutations = {
  [SettingMutationTypes.SET_TOKEN] (state:ISettingState, token:string) {
    const newState = {
      token,
    }
    Object.assign(state, newState)
  },
  [SettingMutationTypes.SET_DATA_PROMISE] (state:ISettingState) {
    const newState = {

    }
    Object.assign(state, newState)
  },
}
