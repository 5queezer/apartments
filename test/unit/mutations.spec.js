import apartments from './fixtures/apartments'
import { mutations, state as initialState } from '@/store/apartments'

describe('Mutations', () => {
  let state

  beforeEach(() => {
    // reset state with deep copy
    state = { ...JSON.parse(JSON.stringify(initialState())) }
  })

  it('adds a new apartment', () => {
    // act
    mutations.add(state, apartments[0])

    // assert
    expect(state.apartments.length).toBe(1)
    expect(state.apartments[0]).toEqual(apartments[0])
  })

  it('throws error with entry of same id', () => {
    // act
    const m = (apartment) => { mutations.add(state, apartment) }

    // first call
    expect(() => m({ ...apartments[0], id: 0 })).not.toThrowError()

    // second call
    expect(() => m({ ...apartments[1], id: 0 })).toThrowErrorMatchingSnapshot()
  })
})
