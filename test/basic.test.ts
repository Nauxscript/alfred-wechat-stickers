import { describe, expect, it } from 'vitest'
import run from '../src/index'

describe('index entry', () => {
  it('happy path', () => {
    expect(1 + 1).toEqual(2)
  })

  it('query string is empty', () => {
    const result = run(['', true])
    expect(result).toMatchSnapshot()
  })

  it('query with keyword', () => {
    const result = run(['旺柴', true])
    expect(result).toMatchSnapshot()
  })
})
