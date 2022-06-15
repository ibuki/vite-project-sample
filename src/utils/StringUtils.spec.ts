import { isPresent } from './StringUtils'

test('isPresent', () => {
  expect(isPresent('')).toBe(false)
  expect(isPresent(' ')).toBe(false)
  expect(isPresent(null)).toBe(false)
  expect(isPresent(undefined)).toBe(false)
  expect(isPresent('0')).toBe(true)
  expect(isPresent('0 ')).toBe(true)
})
