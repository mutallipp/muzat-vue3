<template>
  <m-layout
    navigation-bar-title-text="我的"
  >
    <div>me</div>
  </m-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

function useMe () {
  return {}
}
export default defineComponent({
  components: {},
  props: {},
  setup () {
    return {
      ...useMe(),
    }
  },
})

</script>

<style lang="scss" scoped>

</style>
