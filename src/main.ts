import { createSSRApp } from 'vue'
import { setupStore } from '@store/index'
// import componentRegister from '@components/register'
// import { setupComponents } from '@components/index'
import Layout from '@layout/index.vue'

import App from './App.vue'

export function createApp () {
  const app = createSSRApp(App)
  // 挂在仓库
  setupStore(app)
  // 挂在自定义全局组件
  // eslint-disable-next-line no-use-before-define
  setupComponents(app)
  return {
    app,
  }
}

// const app = createApp(App)
// setupStore(app)

function setupComponents (app:any) {
  app.component('m-layout', Layout)
}
