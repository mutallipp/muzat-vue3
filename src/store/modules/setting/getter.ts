import { IRootState } from '@/store/types'
import { GetterTree } from 'vuex'
import { SettingGetterType } from './constants/getter'
import { SettingGetters } from './types/getter'
import { ISettingState } from './types/state'

/**
 * 用户应用的 getters
 */
export const settingGetters:GetterTree<ISettingState, IRootState> &SettingGetters = {
  [SettingGetterType.BASE_COLOR] (state:ISettingState):string {
    return state?.baseConfig?.baseColor || 'red'
  },
}
