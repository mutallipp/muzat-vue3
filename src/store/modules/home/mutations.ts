import { MutationTree } from 'vuex'
import { HomeMutationTypes } from './constants/mutations'
import { HomeMutations } from './types/mutations'
import { IHomeState } from './types/state'

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
