import { createStore } from 'vuex'
import { App } from 'vue'
import { homeModule } from './modules/home'
import { IRootState, RootStore } from './types'
import { userModule } from './modules/user'

/**
 * 全局仓库
 */
const store = createStore<IRootState>({
  modules: {
    home: homeModule,
    user: userModule,
  },
})

/**
 * 获取全局仓库
 */
export function useStore ():RootStore {
  return store
}

/**
 * 挂载仓库
 * @param {App} app
 */
export function setupStore (app: App): void {
  app.use(store)
}

export default store
