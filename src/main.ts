import { createSSRApp } from 'vue'
import { setupStore } from '@store/index'
import App from './App.vue'

export function createApp () {
  const app = createSSRApp(App)
  setupStore(app)
  return {
    app,
  }
}

// const app = createApp(App)
// setupStore(app)
