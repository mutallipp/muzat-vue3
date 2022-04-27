import { IRootState } from '@/store/types'
import { GetterTree } from 'vuex'
import { SettingGetterType } from './constants/getter'
import { SettingGetters } from './types/getter'
import { ISettingState, ITabBarItem } from './types/state'

/**
 * 用户应用的 getters
 */
export const settingGetters:GetterTree<ISettingState, IRootState> &SettingGetters = {
  [SettingGetterType.BASE_COLOR] (state:ISettingState):string {
    return state?.baseConfig?.baseColor || 'red'
  },
  [SettingGetterType.TAB_BAR_LIST] (state:ISettingState): Array<ITabBarItem> {
    return state?.tabBarOption.tabBarList || []
  },
  [SettingGetterType.ACTIVE_TAB_BAR] (state:ISettingState): number {
    return state?.tabBarOption.active || 0
  },
}
