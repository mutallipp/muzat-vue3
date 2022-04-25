import { MutationTree } from 'vuex'
import { UserMutationTypes } from './constants/mutations'
import { UserMutations } from './types/mutations'
import { IUserState } from './types/state'

/**
 * 用户 mutations
 */
export const userMutations:MutationTree<IUserState> &UserMutations = {
  [UserMutationTypes.SET_TOKEN] (state:IUserState, token:string) {
    const newState = {
      token,
    }
    Object.assign(state, newState)
  },
  [UserMutationTypes.SET_DATA_PROMISE] (state:IUserState, dataPromise:Promise<any>) {
    const newState = {
      dataPromise,
    }
    Object.assign(state, newState)
  },
}
