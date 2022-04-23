/**
 * require.context引入类型声明
 */
export interface RequireContext {
  keys(): string[];
  (id: string): any;
  <T>(id: string): T;
  resolve(id: string): string;
  id: string;
}

/**
  * 具有任意属性的对象
  */
export interface IAnyObj {
  [propName: string]: any
}

// 分页数据
export interface IPagination<T> {
  list: T,
  pageSize: number,
  totalCount: number,
}

/**
 * 剔除null 的key
 */
export type FilterNullableKey<T extends Object> = {
  [K in keyof T]: T[K] extends null ? any extends T[K] ? '' : K : ''
}[keyof T]
/**
 * 过滤对象null值
 */
export type FilterNullable<T extends Object> = Omit<T, FilterNullableKey<T>>
