import packageJson from '../package.json'

import * as browser from './browser/index'
import * as dict from './dict/index'
import * as number from './number/index'

export function version() {
  return packageJson.version
}

console.warn(`${packageJson.name} version is ${version()}`)

export {
  browser,
  dict,
  number,
}
