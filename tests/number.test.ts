import { number } from '@ipa-community/node-kit'
import { name } from '@ipa-community/node-kit/number'

import { describe, expect, it } from 'bun:test'

describe('number', () => {
  it('name', () => {
    expect(name()).toBe('number')
  })

  it('name2', () => {
    expect(number.name()).toBe('number')
  })
})
