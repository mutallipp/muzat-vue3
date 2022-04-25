import { createSSRApp } from 'vue'
import { setupStore } from '@store/index'
import config from '@/config'
import App from './App.vue'

export function createApp () {
  const app = createSSRApp(App)
  setupStore(app)
  app.use(config)
  return {
    app,
  }
}

// const app = createApp(App)
// setupStore(app)
