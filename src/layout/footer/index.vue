<template>
  <div>
    <van-tabbar
      :active="active"
      @change="onChange"
    >
      <!-- <van-tabbar-item info="3">
        <image
          slot="icon"
          src="{{ icon.normal }}"
          mode="aspectFit"
          style="width: 30px; height: 18px;"
        />
        <image
          slot="icon-active"
          src="{{ icon.active }}"
          mode="aspectFit"
          style="width: 30px; height: 18px;"
        />
        自定义
      </van-tabbar-item> -->
      <van-tabbar-item>
        <template #icon>
          <van-icon name="wap-home-o" />
        </template>
        <template #icon-active>
          <van-icon
            :color="baseColor"
            name="wap-home-o"
            size="30px"
          />
        </template>
        <div>首页</div>
      </van-tabbar-item>
      <van-tabbar-item icon="search">
        标签
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o">
        标签
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '@store/index'
import { SettingGetterType } from '@store/modules/setting/constants/getter'

function useTabBar () {
  const store = useStore()

  const active = ref(0)

  const baseColor = computed(() => store.getters[SettingGetterType.BASE_COLOR])

  const onChange = (event:any) => {
    active.value = event.detail
  }
  return {
    active,
    baseColor,

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
