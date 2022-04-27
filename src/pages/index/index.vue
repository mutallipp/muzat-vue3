<template>
  <m-layout>
    <view class="content">
      <image
        class="logo"
        src="/static/logo.png"
      />
      <view class="text-area">
        <text class="title">
          {{ title }}
        </text>
      </view>
      <van-button
        type="primary"
        @click="btnClickHandle"
      >
        vant
      </van-button>
    </view>
  </m-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import store from '@/store'
import { useSharePage } from '@hooks/share'

function useHomePage () {
  const { onShareAppMessage, onShareTimeline } = useSharePage()

  const title = ref('muzat')
  const btnClickHandle = () => {
    uni.navigateTo({
      url: '/pages/test/test',
    })
  }

  onMounted(() => {
    store.state.user.dataPromise?.then(() => {
      console.log('index promise')
    })
  })
  return {
    title,

    onShareAppMessage,
    onShareTimeline,
    btnClickHandle,
  }
}

export default defineComponent({
  components: {},
  setup () {
    return {
      ...useHomePage(),

    }
  },
})
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
