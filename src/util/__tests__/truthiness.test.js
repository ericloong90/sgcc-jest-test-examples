import * as truthiness from 'util/truthiness'

it('should be null', () => {
  let actual = truthiness.simpleNull()

  expect(actual).toBeNull()
})

it('should be undefined', () => {
  let actual = truthiness.simpleUndefined()

  expect(actual).toBeUndefined()
})

it('should be defined', () => {
  let actual = truthiness.simpleDefined()

  expect(actual).toBeDefined()
})

it('should be truthy', () => {
  let actual = truthiness.simpleTruthy()

  expect(actual).toBeTruthy()
})

it('should be falsy', () => {
  let actual = truthiness.simpleFalsy()

  expect(actual).toBeFalsy()
})

it('should return the same string as passed in', () => {
  let actual = truthiness.simpleString('Hello World')

  // Comparing a direct match if the strings are equal or not
  expect(actual).toEqual('Hello World')
  // toMatch takes in a REGEX to find a match
  expect(actual).toMatch(/World/)
  // You can also use .not to check for non matches
  expect(actual).not.toMatch(/People/)
})

it('should return the same array when passed with an array', () => {
  let actual = truthiness.simpleArray(['s', 'g', 'c', 'c', 2018])

  // Check for membership
  expect(actual).toContain('s')
  // Also works for other integers
  expect(actual).toContain(2018)
  // You can also use not to check for non-memberships
  expect(actual).not.toContain(2019)
})

it('should throw an error', () => {
  // To test for whether a function is throwing an error, execute the function in a callback
  // toThrow checks for when a function is throwing an error
  expect(() => {
    truthiness.simpleError()
  }).toThrow()
})