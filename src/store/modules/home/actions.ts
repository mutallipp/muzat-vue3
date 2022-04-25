import { IRootState } from '@store/types'
import { ActionTree } from 'vuex'
import { HomeActionTypes } from './constants/action'
import { HomeMutationTypes } from './constants/mutations'
import { HomeActions } from './types/actions'
import { IHomeState } from './types/state'

/**
 * 首页应用的 actions
 */
export const homeActions:ActionTree<IHomeState, IRootState> & HomeActions = {
  [HomeActionTypes.GET_HOME_DATA] ({ commit }, data) {
    commit(HomeMutationTypes.GET_HOME_DATA, data)
  },
}
