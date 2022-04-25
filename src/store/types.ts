import { HomeStore } from './modules/home/types'
import { IHomeState } from './modules/home/types/state'
import { UserStore } from './modules/user/types'
import { IUserState } from './modules/user/types/state'

/**
 * 全局状态类型
 */
export interface IRootState {
  home:IHomeState,
  user: IUserState
}

/**
 * 全局仓库类型
 */
export type RootStore =
  HomeStore<Pick<IRootState, 'home'>>
  &UserStore<Pick<IRootState, 'user'>>
