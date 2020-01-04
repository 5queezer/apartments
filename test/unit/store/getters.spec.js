import apartmentFixture from './fixtures/apartment'
import { getters, state as initialState } from '@/store/apartments'

describe('Getters', () => {
  const deepCopy = other => JSON.parse(JSON.stringify(other))
  let state, copy

  beforeEach(() => {
    state = deepCopy(initialState())
    copy = deepCopy(apartmentFixture)
  })

  it('gets Apartments', () => {
    // act
    state.list = [copy]
    const apartments = getters.list(state)
    // assert
    expect(apartments.length).toBe(1)
  })

  it('current apartment object', () => {
    copy.id = 10
    state.list = [copy]
    state.id = 10
    const current = getters.current(state)
    // assert
    expect(current).toEqual(copy)
  })
})
