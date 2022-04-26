import { RegTypes, regMap } from './constants/validate'
/**
 * 正则判断
 * @param value 要判断值
 * @param type 要用的正则
 * @returns {boolean}
 */
export function validateReg (value:any, type: RegTypes):boolean {
  return regMap[type].test(value)
}
