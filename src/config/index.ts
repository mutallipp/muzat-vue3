// const dev = require('./dev/index.ts')
// const prod = require('./prod/index.ts')
// const base = require('./base/index.ts')
import dev from './dev'
import prod from './prod'
import base from './base'
// 环境配置
const configure = {}
console.log('process', import.meta.env)
const { DEV } = import.meta.env

if (DEV) {
  // 测试环境
  Object.assign(configure, dev)
} else {
  // 生产环境
  Object.assign(configure, prod)
}
// 通用配置
Object.assign(configure, base)

// 导出配置（以自定义配置为主）
export default configure
