// import { App } from 'vue'
import CLayout from './index.vue'

CLayout.name = 'm-layout'

CLayout.install = (Vue: any) => {
  Vue.component(CLayout.name, CLayout)
}

export default CLayout
