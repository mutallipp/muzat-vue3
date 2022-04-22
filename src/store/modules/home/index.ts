import { IRootState } from '@/store/types'
import { DispatchOptions, Module, Store } from 'vuex'
import { homeActions, HomeActions } from './actions'
import { homeGetters, HomeGetters } from './getter'
import { homeMutations, HomeMutations } from './mutations'
import { homeState } from './state'
import { IHomeState } from './types'

/**
 * 首页应用的 仓库
 */
export type HomeStore <S = IHomeState> = Omit<Store<S>, 'getters'|'commit'|'dispatch'> & {
  commit<K extends keyof HomeMutations, P extends Parameters<HomeMutations[k]>[1]>(
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

export const homeModule:Module<IHomeState, IRootState> = {
  state: homeState,
  getters: homeGetters,
  mutations: homeMutations,
  actions: homeActions,
}
