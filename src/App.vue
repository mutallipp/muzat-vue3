<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
// import { useStore } from '@store/index'
import { ref } from 'vue'

const title = ref('')
onLaunch(() => {
  // const store = useStore()
  // console.log('store:', store)

  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
  title.value = 'hello uni-app-vue3 setup'
})
onHide(() => {
  console.log('App Hide')
  title.value = 'see you'
})
</script>
<style lang="scss">
  @import "@/wxcomponents/vant/dist/common/index.wxss";
</style>
