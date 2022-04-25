import { DispatchOptions, Store } from 'vuex'
import { UserActions } from './actions'
import { UserGetters } from './getter'
import { UserMutations } from './mutations'
import { IUserState } from './state'

/**
 * 用户应用的 仓库
 */
export type UserStore <S = IUserState> = Omit<Store<S>, 'getters'|'commit'|'dispatch'> & {
  commit<K extends keyof UserMutations, P extends Parameters<UserMutations[K]>[1]>(
    key:K,
    payload?:P
  ): ReturnType<UserMutations[K]>
} & {
  dispatch<K extends keyof UserActions>(
    key: K,
    payload?: Parameters<UserActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<UserActions[K]>
} & {
  getters:{
    [K in keyof UserGetters] : ReturnType<UserGetters[K]>
  }
}
