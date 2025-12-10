import { resolveCssVar } from '@ipa-community/node-kit/browser'

import { describe, expect, it } from 'bun:test'

describe('browser', () => {
  it('resolveCssVar', () => {
    expect(resolveCssVar('var(--a-undefined-css-variable)')).toBe('')
  })
})
