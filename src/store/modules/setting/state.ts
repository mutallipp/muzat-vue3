import { ISettingState } from './types/state'

/**
 * 用户相关应用状态
 */
export const settingState: ISettingState = {
  /**
    * 配置信息
    */
  baseConfig: {
    env: 1, // 1->dev,2->prod
    baseColor: '#3366ff',
  },
  /**
   * 底部导航栏
   */
  tabBarOption: {
    tabBarList: [
      {
        pagePath: '/pages/index/index',
        text: '首页',
        icon: 'wap-home-o',
      },
      {
        pagePath: '/pages/me/me',
        text: '我的',
        icon: 'contact',
      },
    ],
    active: 0,
  },

}
