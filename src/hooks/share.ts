import { onShareTimeline, onShareAppMessage } from '@dcloudio/uni-app'
import { ISharePageProps } from './types/share'

/**
 * 分享页面hook
 * @param option 分享配置
 */
export const useSharePage = (option:ISharePageProps = {}) => {
  const shareOption = {
    title: '木扎提Muzat',
    path: '/pages/index/index',
    imageUrl: 'http://qiniu.mutallip.cn/bay-mia-logo.JPG',
    desc: 'Muzat',
    content: '木扎提Muzat信息平台',
  }
  Object.assign(shareOption, option)
  onShareTimeline(() => {
    return {
      title: shareOption.title,
      path: shareOption.path,
      imageUrl: shareOption.imageUrl,
      success (res:any) {
        console.log(res)
        uni.showToast({
          title: '分享成功',
        })
      },
      fail (err:any) {
        console.log(err)
        uni.showToast({
          title: '分享失败',
          icon: 'none',
        })
      },
    }
  })
  onShareAppMessage(() => {
    return {
      title: shareOption.title,
      path: shareOption.path,
      imageUrl: shareOption.imageUrl,
      desc: shareOption.desc,
      content: shareOption.content,
      success (res:any) {
        console.log(res)
        uni.showToast({
          title: '分享成功',
        })
      },
      fail (err:any) {
        console.log(err)
        uni.showToast({
          title: '分享失败',
          icon: 'none',
        })
      },
    }
  })
  return {
    onShareTimeline,
    onShareAppMessage,
  }
}
