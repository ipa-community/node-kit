import { describe, expect, it } from 'bun:test'

import { name } from '@/number/index'

describe('number', () => {
  it('name', () => {
    expect(name()).toBe('number')
  })
})
