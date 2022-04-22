import { MutationTree } from 'vuex'
import { IHomeState } from './types'

/**
 * commit类型
 */
export enum HomeMutationTypes {
  GET_HOME_DATA = 'GET_HOME_DATA',
  CHANGE_HOME_PAGE_DATA_LOAD = 'CHANGE_HOME_PAGE_DATA_LOAD',
  CHANGE_PRODUCT_CATEGORY_LIST = 'CHANGE_PRODUCT_CATEGORY_LIST',
  GET_PRODUCT_LIST = 'GET_PRODUCT_LIST',
  SET_PRODUCT_LIST = 'SET_PRODUCT_LIST',
}
/**
 * 首页 mutations类型
 */
export type HomeMutations<S = IHomeState> ={
  [HomeMutationTypes.GET_HOME_DATA] (state:S, homeData:any):void
}
/**
 * 首页应用的 mutations
 */
export const homeMutations:MutationTree<IHomeState> &HomeMutations = {
  [HomeMutationTypes.GET_HOME_DATA] (state:IHomeState, homeData:any) {
    const newState = {
      homeData,
    }
    Object.assign(state, newState)
  },
}
