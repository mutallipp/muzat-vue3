<template>
  <div>
    <van-tabbar
      :active="active"
      @change="onChange"
    >
      <van-tabbar-item
        v-for="tabBarItem in tabBarList"
        :key="tabBarItem.pagePath"
      >
        <!-- 位激活状态 -->
        <template #icon>
          <van-icon :name="tabBarItem.icon" />
        </template>
        <!-- 激活状态 -->
        <template #icon-active>
          <van-icon
            :color="baseColor"
            :name="tabBarItem.icon"
            size="30px"
          />
        </template>
        <div>{{ tabBarItem.text }}</div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@store/index'
import { SettingGetterType } from '@store/modules/setting/constants/getter'
import { SettingActionTypes } from '@/store/modules/setting/constants/action'

function useTabBar () {
  const store = useStore()

  const baseColor = computed(() => store.getters[SettingGetterType.BASE_COLOR])
  const tabBarList = computed(() => store.getters[SettingGetterType.TAB_BAR_LIST])
  const active = computed(() => store.getters[SettingGetterType.ACTIVE_TAB_BAR])

  const onChange = (e:any) => {
    const { detail } = e
    store.dispatch(SettingActionTypes.SET_ACTIVE_TAB_BAR, detail)
    uni.switchTab({
      url: tabBarList.value[detail].pagePath,
    })
  }
  return {
    active,
    baseColor,
    tabBarList,

    onChange,
  }
}
export default defineComponent({
  components: {},
  props: {},
  setup () {
    return {
      ...useTabBar(),
    }
  },
})

</script>

<style lang="scss" scoped>

</style>
