import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { settingActions } from './actions'
import { settingGetters } from './getter'
import { settingMutations } from './mutations'
import { settingState } from './state'
import { ISettingState } from './types/state'

/**
 * store 用户模块
 */
export const settingModule:Module<ISettingState, IRootState> = {
  state: settingState,
  getters: settingGetters,
  mutations: settingMutations,
  actions: settingActions,
}
