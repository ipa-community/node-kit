import { describe, expect, it } from 'bun:test'

import { resolveCssVar } from '@/browser/index'

describe('browser', () => {
  it('resolveCssVar', () => {
    expect(resolveCssVar('var(--a-undefined-css-variable)')).toBe('')
  })
})
