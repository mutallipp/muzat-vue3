import { UserGetterType } from '../constants/getter'
import { IUserState } from './state'

/**
 * 用户应用的 getters类型
 */
export type UserGetters = {
  [UserGetterType.TOKEN] (state:IUserState) :any
}
