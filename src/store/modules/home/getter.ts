import { IRootState } from '@/store/types'
import { GetterTree } from 'vuex'
import { HomeGetterType } from './constants/getter'
import { HomeGetters } from './types/getter'
import { IHomeState } from './types/state'

/**
 * 首页应用的 getters
 */
export const homeGetters:GetterTree<IHomeState, IRootState> &HomeGetters = {
  [HomeGetterType.CATEGORY_LIST] (state:IHomeState):any {
    return state.categoriesList
  },
}
