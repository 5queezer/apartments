import apartmentFixture from './fixtures/apartment'
import { getters, state as initialState } from '@/store/apartments'

describe('Getters', () => {
  const deepCopy = other => JSON.parse(JSON.stringify(other))
  let state

  beforeEach(() => {
    state = deepCopy(initialState())
  })

  it('gets Apartments', () => {
    // act
    state.list = [apartmentFixture]
    const apartments = getters.list(state)
    // assert
    expect(apartments.length).toBe(1)
  })

  it('current apartment object', () => {
    state.list = [Object.assign(apartmentFixture, { id: 10 })]
    state.id = 10
    const apartment = getters.current(state)
    // assert
    expect(apartment).toEqual(apartmentFixture)
  })
})
