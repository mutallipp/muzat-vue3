import { IRootState } from '@store/types'
import { ActionContext, ActionTree } from 'vuex'
import { HomeMutations, HomeMutationTypes } from './mutations'
import { IHomeState } from './types'

/**
 * 首页 dispatch类型
 */
export enum HomeActionTypes {
  GET_HOME_DATA ='GET_HOME_DATA',
  CHANGE_HOME_PAGE_DATA_LOAD = 'CHANGE_HOME_PAGE_DATA_LOAD',
  CHANGE_PRODUCT_CATEGORY_LIST = 'CHANGE_PRODUCT_CATEGORY_LIST',
  GET_PRODUCT_LIST = 'GET_PRODUCT_LIST',
}

/**
 * 首页 actions函数参数类型
 */
type ActionAugments = Omit<ActionContext<IHomeState, IRootState>, 'commit'> & {
  commit<K extends keyof HomeMutations> (key:K, payload?:Parameters<HomeMutations[K]>[1]): ReturnType<HomeMutations[K]>,
}

/**
 * 首页应用的 actions类型
 */
export type HomeActions = {
  [HomeMutationTypes.GET_HOME_DATA] (context:ActionAugments, data:any) :void
}

/**
 * 首页应用的 actions
 */
export const homeActions:ActionTree<IHomeState, IRootState> & HomeActions = {
  [HomeActionTypes.GET_HOME_DATA] ({ commit }, data) {
    commit(HomeMutationTypes.GET_HOME_DATA, data)
  },
}
