import { describe, expect, expectTypeOf, it } from 'vitest'
import type { AlfredSelection } from '../src/index.d'
import { parseData, searchWithKeyword } from '../src/core'
import type { Keys } from '../src/stickersData'

describe('core test', () => {
  it('parseData function is ok', () => {
    expectTypeOf(parseData).toBeFunction()
    const result = parseData(['旺柴-wc'], './icons')
    expectTypeOf(result).toMatchTypeOf<AlfredSelection[]>()
    expect(result).toMatchSnapshot()
  })

  it('searchWithKeyword function is ok', () => {
    expectTypeOf(searchWithKeyword).toBeFunction()
    const result = searchWithKeyword('笑')
    expect(result).toMatchSnapshot()
    expectTypeOf(result).toMatchTypeOf<Keys[]>()
  })
})
