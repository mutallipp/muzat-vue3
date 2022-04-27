import { SettingGetterType } from '../constants/getter'
import { ISettingState } from './state'

/**
 * 用户应用的 getters类型
 */
export type SettingGetters = {
  [SettingGetterType.BASE_COLOR] (state:ISettingState) :string
}
