<template>
  <van-nav-bar
    title="标题"
    left-text="返回"
    left-arrow
  >
    <template #right>
      <van-icon
        name="search"
      />
    </template>
  </van-nav-bar>
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
    <u-button
      type="primary"
      icon="map"
      text="图标按钮"
    >
      sdfsf
    </u-button>
    <van-button type="primary">
      vant
    </van-button>
    <van-swipe-cell
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
    >
      <div>dfsdfsd</div>
      <div>dfsdfsdsasdf</div>
    </van-swipe-cell>
  </view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const title = ref('muzat')
    return {
      title,
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
