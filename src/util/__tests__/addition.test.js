import addition from 'util/addition'

it('returns 5 when passed in 2 and 3', () => {
  let actual = addition(2, 3)

  expect(actual).toEqual(5)
})

it('returns approximately 0.3 when passed in 0.1 and 0.2', () => {
  let actual = addition(0.1, 0.2)

  expect(actual).toBeCloseTo(0.3)
})