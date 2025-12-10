import packageJson from './package.json'

export function version() {
  return packageJson.version
}

console.warn(`${packageJson.name} version is ${version()}`)

export * from './src/index'
