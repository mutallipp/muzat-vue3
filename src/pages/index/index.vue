<template>
  <Layout>
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
  </Layout>
</template>

<script lang="ts">
import store from '@/store'
import { defineComponent, onMounted, ref } from 'vue'
import Layout from '@layout/index.vue'
// import rest from '@/utils/rest'

export default defineComponent({
  components: {
    Layout,
  },
  setup () {
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

      btnClickHandle,
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
