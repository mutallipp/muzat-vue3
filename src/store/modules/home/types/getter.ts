import { HomeGetterType } from '../constants/getter'
import { IHomeState } from './state'

/**
 * 首页应用的 getters类型
 */
export type HomeGetters = {
  [HomeGetterType.CATEGORY_LIST] (state:IHomeState) :any
}
