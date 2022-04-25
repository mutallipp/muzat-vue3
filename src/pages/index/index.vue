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
    <van-button type="primary">
      vant
    </van-button>
  </view>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import rest from '@/utils/rest'
import config from '@/config'

export default defineComponent({
  setup () {
    const title = ref('muzat')
    onMounted(() => {
      rest.get('http://localhost:8081/api/mina/member/login', { code: 'sdfsfsf' }, { target: 'muzat' })
      console.log('config', config)

      // fetch.post('http://localhost:8081/api/mina/member/login', { code: 'sdfsfsf' })
    })
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
