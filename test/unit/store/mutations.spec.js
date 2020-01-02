import { _ } from 'underscore'
import apartmentFixture from './fixtures/apartment'
import { mutations, state as initialState } from '@/store/apartments'

describe('Mutations', () => {
  let state
  const add = (apartment) => { mutations.add(state, apartment || apartmentFixture) }
  const deepCopy = other => JSON.parse(JSON.stringify(other))

  beforeEach(() => {
    // reset state with deep copy
    state = deepCopy(initialState())
  })

  it('adds a new apartment', () => {
    // act
    add()

    // assert
    expect(state.list.length).toBe(1)
    expect(state.list[0]).toEqual(apartmentFixture)
  })

  it('throws error with entry of same id', () => {
    // first call
    expect(add).not.toThrowError()

    // second call
    expect(add).toThrowErrorMatchingSnapshot()
  })

  it('can set an apartment with index 1', () => {
    const fixture0 = deepCopy(apartmentFixture)
    fixture0.id = 0
    add(fixture0)
    const fixture1 = deepCopy(apartmentFixture)
    fixture1.id = 1
    add(fixture1)

    mutations.set(state, 1)
    expect(state.current).toEqual(1)
  })
})
