import { SettingMutationTypes } from '../constants/mutations'
import { ISettingState } from './state'

/**
 * 设置 mutations类型
 */
export type SettingMutations<S = ISettingState> ={
  [SettingMutationTypes.SET_ACTIVE_TAB_BAR] (state:S, index:number):void
}
