import { MutationTree } from 'vuex'
import { SettingMutationTypes } from './constants/mutations'
import { SettingMutations } from './types/mutations'
import { ISettingState } from './types/state'

/**
 * 用户 mutations
 */
export const settingMutations:MutationTree<ISettingState> &SettingMutations = {
  [SettingMutationTypes.SET_ACTIVE_TAB_BAR] (state:ISettingState, index:number) {
    const newState = {
      active: index,
    }
    Object.assign(state.tabBarOption, newState)
  },
  [SettingMutationTypes.SET_DATA_PROMISE] (state:ISettingState) {
    const newState = {

    }
    Object.assign(state, newState)
  },
}
