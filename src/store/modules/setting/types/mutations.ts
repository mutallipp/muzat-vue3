import { SettingMutationTypes } from '../constants/mutations'
import { ISettingState } from './state'

/**
 * 设置 mutations类型
 */
export type SettingMutations<S = ISettingState> ={
  [SettingMutationTypes.SET_TOKEN] (state:S, token:string):void
}
