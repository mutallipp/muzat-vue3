<template>
  <div class="header-container">
    <van-nav-bar
      :custom-style="navBarStyle"
    >
      <template #left>
        <van-icon name="arrow-left" />
      </template>
      <template #title>
        <div class="nav-bar-title">
          {{ navigationBarTitleText }}
        </div>
      </template>
      <template #right>
        <van-icon
          name="search"
        />
      </template>
    </van-nav-bar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

function useHeader () {
  // const navBarStyle = `background-color: ${bgColor};`
  const navBarStyle = computed(() => {
    const bgColor = '#3366ff'
    return `background-color: ${bgColor}; color: white;`
  })
  return {
    navBarStyle,
  }
}
export default defineComponent({
  components: {},
  props: {
    navigationBarTitleText: {
      type: String,
      default: 'muzat信息平台',
    },
  },
  setup () {
    return {
      ...useHeader(),
    }
  },
})

</script>

<style lang="scss">
.nav-bar-title{
  color: white;
}
</style>
