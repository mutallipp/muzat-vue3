import { UserMutationTypes } from '../constants/mutations'
import { IUserState } from './state'

/**
 * 用户 mutations类型
 */
export type UserMutations<S = IUserState> ={
  [UserMutationTypes.SET_TOKEN] (state:S, token:string):void
}
