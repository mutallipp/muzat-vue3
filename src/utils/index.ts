import { FilterNullable, IAnyObj } from '@/defineds'

/**
 * 获取元素大概类型(时间、正则等对象视为object类型)
 * @param {element} element
 */
export function getElementType (element: any): string {
  const type = new Map([
    ['[object String]', 'string'],
    ['[object Number]', 'number'],
    ['[object Boolean]', 'boolean'],
    ['[object Null]', 'null'],
    ['[object Undefined]', 'undefined'],
    ['[object Symbol]', 'symbol'],
    ['[object Bigint]', 'bigint'],
    ['[object Function]', 'function'],
    ['[object Array]', 'array'],
    ['[object Object]', 'object'],
    ['[object Map]', 'map'],
    ['[object Set]', 'set'],
    ['[object Date]', 'object'],
    ['[object RegExp]', 'object'],
    ['[object Error]', 'object'],
    ['[object Math]', 'object'],
    ['[object JSON]', 'object'],
  ])
  const elementType = type.get(Object.prototype.toString.call(element))
  if (!elementType) {
    console.warn('没有找到元素类型，请完善getElementType')
    return ''
  }
  return elementType
}
/**
 * 获取元素实际类型
 * @param {Any} element
 */
export function getElementActualType (element: any): string {
  const type = new Map([
    ['[object String]', 'string'],
    ['[object Number]', 'number'],
    ['[object Boolean]', 'boolean'],
    ['[object Null]', 'null'],
    ['[object Undefined]', 'undefined'],
    ['[object Symbol]', 'symbol'],
    ['[object Bigint]', 'bigint'],
    ['[object Function]', 'function'],
    ['[object Array]', 'array'],
    ['[object Object]', 'object'],
    ['[object Map]', 'Map'],
    ['[object Set]', 'set'],
    ['[object Date]', 'date'],
    ['[object RegExp]', 'regexp'],
    ['[object Error]', 'error'],
    ['[object Math]', 'math'],
    ['[object JSON]', 'json'],
    ['[object FormData]', 'formData'],
  ])
  const elementType = type.get(Object.prototype.toString.call(element))
  if (!elementType) {
    console.warn('没有找到元素类型，请完善getElementType')
    return ''
  }
  return elementType
}
/**
 * 过滤对象的空值
 * @param {Object}
 * @return {Object}
 */
export function pick (obj: FilterNullable<IAnyObj> = {}) {
  if (getElementType(obj) !== 'object') return obj
  const newParams = {} as FilterNullable<IAnyObj>
  for (const [key, value] of Object.entries(obj)) {
    if (obj[key] != null) {
      newParams[key] = value
    }
  }
  return newParams
}
type toastType = '' | 'success' | 'warning' | 'info' | 'error'

/**
 * toast提示框
 */
export const toast = (
  msg: string,
  type: toastType = 'success',
  option: IAnyObj = {},
):void => {
  console.log(msg, type, option)
}
