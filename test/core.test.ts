import { describe, expect, expectTypeOf, it } from 'vitest'
import type { AlfredSelection } from '../src/index.d'
import { parseData, searchWithKeyword } from '../src/core'

describe('core test', () => {
  it('parseData function is ok', () => {
    expectTypeOf(parseData).toBeFunction()
    const result = parseData(['旺柴'], './icons')
    expectTypeOf(result).toMatchTypeOf<AlfredSelection[]>()
    expect(result).toMatchSnapshot()
  })

  it('searchWithKeyword', () => {
    expectTypeOf(searchWithKeyword).toBeFunction()
    const result = searchWithKeyword('smile')
    expectTypeOf(result).toMatchTypeOf<string[]>()
  })
})
