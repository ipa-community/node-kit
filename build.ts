/* eslint-disable antfu/no-top-level-await */
import { mkdirSync, rmSync } from 'node:fs'
import { build } from 'bun'

// 清空 dist 目录
rmSync('dist', { recursive: true, force: true })
mkdirSync('dist', { recursive: true })

for (const fmt of ['esm', 'cjs']) {
  await build({
    entrypoints: ['src/index.ts'],
    outdir: `dist/${fmt}`,
    format: fmt as any,
    sourcemap: false,
  })
}
