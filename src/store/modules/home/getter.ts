import { IRootState } from '@/store/types'
import { GetterTree } from 'vuex'
import { IHomeState } from './types'

/**
 * 首页应用的 getter类型
 */
export enum HomeGetterType {
  CATEGORY_LIST = 'CATEGORY_LIST',

}

/**
 * 首页应用的 getters类型
 */
export type HomeGetters = {
  [HomeGetterType.CATEGORY_LIST] (state:IHomeState) :any
}

/**
 * 首页应用的 getters
 */
export const homeGetters:GetterTree<IHomeState, IRootState> &HomeGetters = {
  [HomeGetterType.CATEGORY_LIST] (state:IHomeState):any {
    return state.categoriesList
  },
}
