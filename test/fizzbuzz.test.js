import { describe, test, expect } from '@jest/globals'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  test('Should print an Error if the recive not a number', () => {
    const numberValue = '3'

    const fizzbuzzTest = () => {
      fizzbuzz(numberValue)
    }

    expect(fizzbuzzTest).toThrow(new Error(`"${numberValue}" not a number`))
  })

  test('should print 0 if they recive 0', () => {
    const expected = 0
    const result = fizzbuzz(0)
    expect(expected).toBe(result)
  })

  test('should print 1 if they recive 1', () => {
    const expected = 1
    const result = fizzbuzz(1)
    expect(expected).toBe(result)
  })

  test('should print "fizz" if they recive a multiple of 3', () => {
    const expected = 'fizz'
    const result = fizzbuzz(6)
    expect(expected).toBe(result)
  })

  test('should print "buzz" if they recive a multiple of 5', () => {
    const expected = 'buzz'
    const result = fizzbuzz(5)
    expect(expected).toBe(result)
  })

  test('should print "fizzbuzz" if they recive a multiple of 3 & 5', () => {
    const expected = 'fizzbuzz'
    const result = fizzbuzz(15)
    expect(expected).toBe(result)
  })
})
