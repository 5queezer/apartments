import flushPromises from 'flush-promises'
import api from '@/assets/api.faker'
import actions from '@/store/actions'

// manual mocking all api calls
jest.mock('@/assets/api.faker')

describe('Store actions', () => {
  let commit

  beforeEach(() => {
    commit = jest.fn()
  })

  test.skip('fetches apartments', async () => {
    // act
    await actions.FETCH_APARTMENTS({ commit })
    await flushPromises()

    // assert
    expect(api.getApartments).toHaveBeenCalledTimes(1)
    expect(commit).toHaveBeenCalled()
    expect(commit).toHaveBeenCalledWith('SET_APARTMENT')
  })
})
