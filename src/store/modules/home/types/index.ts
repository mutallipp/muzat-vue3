import { DispatchOptions, Store } from 'vuex'
import { HomeActions } from './actions'
import { HomeGetters } from './getter'
import { HomeMutations } from './mutations'
import { IHomeState } from './state'

/**
 * 首页应用的 仓库
 */
export type HomeStore <S = IHomeState> = Omit<Store<S>, 'getters'|'commit'|'dispatch'> & {
  commit<K extends keyof HomeMutations, P extends Parameters<HomeMutations[K]>[1]>(
    key:K,
    payload?:P
  ): ReturnType<HomeMutations[K]>
} & {
  dispatch<K extends keyof HomeActions>(
    key: K,
    payload?: Parameters<HomeActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<HomeActions[K]>
} & {
  getters:{
    [K in keyof HomeGetters] : ReturnType<HomeGetters[K]>
  }
}
