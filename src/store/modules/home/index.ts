import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { homeActions } from './actions'
import { homeGetters } from './getter'
import { homeMutations } from './mutations'
import { homeState } from './state'
import { IHomeState } from './types/state'

export const homeModule:Module<IHomeState, IRootState> = {
  state: homeState,
  getters: homeGetters,
  mutations: homeMutations,
  actions: homeActions,
}
