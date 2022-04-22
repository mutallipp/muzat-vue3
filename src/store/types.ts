import { HomeStore } from './modules/home'
import { IHomeState } from './modules/home/types'

/**
 * 全局状态类型
 */
export interface IRootState {
  home:IHomeState
}

/**
 * 全局仓库类型
 */
export type Store =
  HomeStore<Pick<IRootState, 'home'>>
