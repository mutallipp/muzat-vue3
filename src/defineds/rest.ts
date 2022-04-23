/**
 * 请求头部
 */
export interface IRestHeader {
  [propName: string]: string,
}

/**
 * 请求方式
 */
export enum RequestMethod {
  GET ='GET',
  POST= 'POST',
  PUT ='PUT',
  DELETE= 'DELETE'
}

/**
 * 接口响应数据
 */
export interface IResult<T> {
  code: number,
  msg: string,
  data: T,
}
