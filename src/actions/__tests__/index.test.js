import { saveComment } from 'actions'
import { SAVE_COMMENT } from 'actions/types'

// The reason why we are using describe here is because in action/index.js, this is where all of our actions is going to be, so we would need a way to create blocks of tests specific for certain actions in this file. You can also make use of the blocks' beforeEach or afterEach if it suits your test cases. describe blocks create scopes that will limit the coverage of beforeEach and afterEach
// Note that placing a beforeEach or afterEach at the global scope of this file - outside of all describe blocks here, the earlier mentioned beforeEach and afterEach will affect each and every single tests in this file. They will execute in this order, outside => inside
describe('saveComment tests', () => {
  it('should have the correct type', () => {
    let actual = saveComment().type

    expect(actual).toEqual(SAVE_COMMENT)
  })

  it('should have the correct payload', () => {
    let actual = saveComment('Hello').payload

    expect(actual).toEqual('Hello')
  })
})
