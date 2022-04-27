import { DispatchOptions, Store } from 'vuex'
import { SettingActions } from './actions'
import { SettingGetters } from './getter'
import { SettingMutations } from './mutations'
import { ISettingState } from './state'

/**
 * 设置应用的 仓库
 */
export type SettingStore <S = ISettingState> = Omit<Store<S>, 'getters'|'commit'|'dispatch'> & {
  commit<K extends keyof SettingMutations, P extends Parameters<SettingMutations[K]>[1]>(
    key:K,
    payload?:P
  ): ReturnType<SettingMutations[K]>
} & {
  dispatch<K extends keyof SettingActions>(
    key: K,
    payload?: Parameters<SettingActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<SettingActions[K]>
} & {
  getters:{
    [K in keyof SettingGetters] : ReturnType<SettingGetters[K]>
  }
}
