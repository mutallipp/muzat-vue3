/**
 * 用户相关应用状态类型
 */
export interface IUserState {
  /**
  * 用户token
  */
  token:string,
  /**
   * dataPromise
   */
  dataPromise?:Promise<any>
}
