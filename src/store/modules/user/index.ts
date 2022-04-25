import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { userActions } from './actions'
import { userGetters } from './getter'
import { userMutations } from './mutations'
import { userState } from './state'
import { IUserState } from './types/state'

/**
 * store 用户模块
 */
export const userModule:Module<IUserState, IRootState> = {
  state: userState,
  getters: userGetters,
  mutations: userMutations,
  actions: userActions,
}
