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
