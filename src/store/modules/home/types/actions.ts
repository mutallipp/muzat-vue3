import { IRootState } from '@/store/types'
import { ActionContext } from 'vuex'
import { HomeMutationTypes } from '../constants/mutations'
import { HomeMutations } from './mutations'
import { IHomeState } from './state'

/**
 * 首页 actions函数参数类型
 */
 type ActionAugments = Omit<ActionContext<IHomeState, IRootState>, 'commit'> & {
   commit<K extends keyof HomeMutations> (key:K, payload?:Parameters<HomeMutations[K]>[1]): ReturnType<HomeMutations[K]>,
 }

/**
 * 首页应用的 actions类型
 */
export type HomeActions = {
  [HomeMutationTypes.GET_HOME_DATA] (context:ActionAugments, data:any) :void
}
