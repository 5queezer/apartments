import flushPromises from 'flush-promises'
import apartmentsFixture from './fixtures/apartments'
import actions from '@/store/actions'

describe('Store actions', () => {
  let commit

  beforeEach(() => {
    commit = jest.fn()
  })

  it('fetches apartments', async () => {
    // act
    await actions.FETCH_APARTMENTS({ commit })
    await flushPromises()

    // assert
    expect(commit).toHaveBeenCalledWith('SET_APARTMENTS', apartmentsFixture)
  })
})
