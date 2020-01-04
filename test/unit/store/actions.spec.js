import flushPromises from 'flush-promises'
import { actions } from '@/store/apartments'

describe('Store actions', () => {
  let commit

  beforeEach(() => {
    commit = jest.fn()
  })

  it('fetches apartments', async () => {
    // act
    const params = {
      'location[city]': 'Barcelona',
      'filters[price][min]': 1.5e6
    }
    await actions.fetch({ commit }, params)
    await flushPromises()

    // assert
    expect(commit).toHaveBeenCalled()
  })
})
