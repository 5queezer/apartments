import flushPromises from 'flush-promises'
import { actions } from '@/store/apartments'

describe('Store actions', () => {
  let commit

  beforeEach(() => {
    commit = jest.fn()
  })

  it('fetches apartments', async () => {
    // act
    await actions.fetchAll({ commit })
    await flushPromises()

    // assert
    expect(commit).toHaveBeenCalled()
  })
})
