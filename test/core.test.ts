import { describe, expect, it } from 'vitest'
import { parseData } from '../src/core'

describe('core test', () => {
  it('parseData function is ok', () => {
    const result = parseData([{ key: '旺柴' }], './icons')
    expect(result).toMatchSnapshot()
  })
})
