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
  tabBarList: [],
}
