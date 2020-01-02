import { _ } from 'underscore'
import apartmentFixture from './fixtures/apartment'
import { mutations, state as initialState } from '@/store/apartments'

describe('Mutations', () => {
  let state

  beforeEach(() => {
    // reset state with deep copy
    state = { ...JSON.parse(JSON.stringify(initialState())) }
  })

  it('adds a new apartment', () => {
    // act
    mutations.add(state, apartmentFixture)

    // assert
    expect(state.list.length).toBe(1)
    expect(state.list[0]).toEqual(apartmentFixture)
  })

  it('throws error with entry of same id', () => {
    // act
    const add = () => { mutations.add(state, apartmentFixture) }

    // first call
    expect(add).not.toThrowError()

    // second call
    expect(add).toThrowErrorMatchingSnapshot()
  })
})
