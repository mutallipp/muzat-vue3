import { IAnyObj } from '@/defineds'
import { ActualTypeElementType, FilterNullable, StringToType } from '@/defineds/utils'

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
/**
 * 判断元素的真实类型与传入的值是否相等
 * 该函数相较于getElementActualType增加了类型保护
 * 用法: if (actualTypeIsEqual(time, 'date')) { console.log('time是Date类型') }
 * @param {element} element
 * @param type 要判断的类型
 * @returns boolean
 */
export function actualTypeIsEqual<T extends ActualTypeElementType> (element:any, type:T):element is StringToType<T> {
  return getElementActualType(element) === type
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
/**
 * 睡眠函数
 * @param wait 睡眠时间
 */
export function sleep (wait:500):Promise<void> {
  return new Promise(resolve => setTimeout(resolve, wait))
}

/**
 * 防抖
 */
export function debounce<T extends (...args: any) => any>(fun: T, wait = 500, immediately = true): T | ((...args: Parameters<T>) => void) {
  let timer: NodeJS.Timeout | null = null
  return function (...rest: any[]) {
    if (timer) {
      // console.log(`函数${fun.name}处于防抖时间中，${wait}ms后可再次执行`)
      clearTimeout(timer)
    }

    if (immediately) {
      // 立即执行版本
      if (!timer) {
        fun.apply(this, rest)
      }
      timer = setTimeout(() => {
        timer = null
      }, wait)
    } else {
      // 非立即执行版本
      timer = setTimeout(() => {
        fun.apply(this, rest)
        timer = null
      }, wait)
    }
  }
}
