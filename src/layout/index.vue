<template>
  <div class="layout">
    <m-header>
    <!-- 我们希望把页头放这里 -->
    </m-header>
    <slot>
    <!-- 我们希望把主要内容放这里 -->
    </slot>
    <m-footer>
    <!-- 我们希望把页脚放这里 -->
    </m-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './header/index.vue'
import Footer from './footer/index.vue'

function useLayout () {
  return {}
}
export default defineComponent({
  name: 'Layout',
  components: {
    'm-header': Header,
    'm-footer': Footer,
  },
  props: {},
  setup () {
    return {
      ...useLayout(),
    }
  },
})

</script>

<style lang="scss" scoped>

</style>
