/**
 * 配置信息
 */
export interface IBaseConfig {
  /**
   * 环境
   * 1->dev,2->prod
   */
  env:number,
  /**
   * 主题颜色
   */
  baseColor:string
}
/**
 * 底部导航栏item
 */
export interface ITabBarItem {
  pagePath:string,
  text:string,
  icon:string,
}
/**
 * 设置相关应用状态类型
 */
export interface ISettingState {
  /**
   * 配置信息
   */
  baseConfig:IBaseConfig
  /**
   * 底部导航栏
   */
  tabBarOption:{
    /**
     * tabbarlis
     */
    tabBarList: Array<ITabBarItem>,
    /**
     * 激活选项index
     */
    active:number
  }
}
