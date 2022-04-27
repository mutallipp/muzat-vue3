import { SettingGetterType } from '../constants/getter'
import { ISettingState, ITabBarItem } from './state'

/**
 * 用户应用的 getters类型
 */
export type SettingGetters = {
  [SettingGetterType.BASE_COLOR] (state:ISettingState) :string,
  [SettingGetterType.TAB_BAR_LIST] (state:ISettingState) :Array<ITabBarItem>,
  [SettingGetterType.ACTIVE_TAB_BAR] (state:ISettingState) :number,
}
