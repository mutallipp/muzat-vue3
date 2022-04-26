/**
 * 正则类型
 */
export enum RegTypes {
  /**
   * 判读是否为外链
   */
  IS_EXTERNAL = 'IS_EXTERNAL',
  /**
   * 判断是否为数字
   */
  IS_NUMBER = 'IS_NUMBER',
  /**
   * 判断是否是名称
   */
  IS_NAME = 'IS_NAME',
  /**
   * 判断是否为IP
   */
  IS_IP = 'IS_IP',
  /**
   * 判断是否是小写字母
   */
  IS_LOWER_CASE = 'IS_LOWER_CASE',
  /**
   * 判断是否是大写字母
   */
  IS_UPPER_CASE = 'IS_UPPER_CASE',
  /**
   * 判断是否是大写字母开头
   */
  IS_ALPHABETS = 'IS_ALPHABETS',
  /**
   * 判断是否是端口号
   */
  IS_PORT = 'IS_PORT',
  /**
   * 判断是否是手机号
   */
  IS_PHONE = 'IS_PHONE',
  /**
   * 判断是否是身份证号(第二代)
   */
  IS_ID_CARD = 'IS_ID_CARD',
  /**
   * 判断是否是邮箱
   */
  IS_EMAIL = 'IS_EMAIL',
  /**
   * 判断是否中文
   */
  IS_CHAINA = 'IS_CHAINA',
  /**
   * 判断是否为固话
   */
  IS_TEL = 'IS_TEL',
  /**
   * 判断经度 -180.0～+180.0（整数部分为0～180，必须输入1到5位小数）
   */
  IS_LONGITUDE = 'IS_LONGITUDE',
  /**
   * 判断纬度 -90.0～+90.0（整数部分为0～90，必须输入1到5位小数）
   */
  IS_LATITUDE = 'IS_LATITUDE',
}
/**
 * 正则集合
 */
export const regMap: Record<RegTypes, RegExp> = {
  IS_EXTERNAL: new RegExp('^(https?:|mailto:|tel:)'),
  IS_NUMBER: new RegExp('^[0-9]*$'),
  IS_NAME: new RegExp('^[\u4e00-\u9fa5a-zA-Z0-9]+$'),
  IS_IP: /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,
  IS_LOWER_CASE: new RegExp('[a-z]+$'),
  IS_UPPER_CASE: new RegExp('^[A-Z]+$'),
  IS_ALPHABETS: new RegExp('^[A-Za-z]+$'),
  IS_PORT: /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/,
  IS_PHONE: /^1\d{10}$/,
  IS_ID_CARD: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  IS_EMAIL: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  IS_CHAINA: new RegExp('^[\u4E00-\u9FA5]{2,4}$'),
  IS_TEL: new RegExp('^(400|800)([0-9\\-]{7,10})|(([0-9]{4}|[0-9]{3})([- ])?)?([0-9]{7,8})(([- 转])*([0-9]{1,4}))?$'),
  IS_LONGITUDE: /^[-|+]?(0?\d{1,2}\.\d{1,5}|1[0-7]?\d{1}\.\d{1,5}|180\.0{1,5})$/,
  IS_LATITUDE: /^[-|+]?([0-8]?\d{1}\.\d{1,5}|90\.0{1,5})$/,
}
