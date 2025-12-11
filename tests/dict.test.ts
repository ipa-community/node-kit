import { describe, expect, it } from 'bun:test'
import { dict } from '@/index'

describe('dict', () => {
  it('join', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    }
    const opts = {
      kvDelimeter: '=',
      entryDelimeter: ',',
    }
    const expected = 'a=1,b=2,c=3'
    expect(dict.join(obj, opts)).toBe(expected)
  })
  it('name', () => {
    expect(dict.name()).toBe('dict')
  })
})
