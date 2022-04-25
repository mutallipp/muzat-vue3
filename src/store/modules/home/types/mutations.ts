import { HomeMutationTypes } from '../constants/mutations'
import { IHomeState } from './state'

/**
 * 首页 mutations类型
 */
export type HomeMutations<S = IHomeState> ={
  [HomeMutationTypes.GET_HOME_DATA] (state:S, homeData:any):void
}
