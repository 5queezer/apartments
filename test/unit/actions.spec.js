import flushPromises from 'flush-promises'
import apartmentsFixture from './fixtures/apartments'
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
    expect(commit).toHaveBeenCalledTimes(10)
    expect(commit).toHaveBeenLastCalledWith('add', apartmentsFixture)
  })
})
