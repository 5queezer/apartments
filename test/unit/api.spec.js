import flushPromises from 'flush-promises'
import api from '@/assets/api.faker'

describe('Api', () => {
  it('fetches the data', async () => {
    // act
    const result = await api.getApartments()
    await flushPromises()

    // assert
    expect(result.length).toEqual(10)
  })

  it('matches the snapshot', async () => {
    // act
    const result = await api.getApartments()
    await flushPromises()

    // assert
    expect(result).toMatchSnapshot()
  })
})
