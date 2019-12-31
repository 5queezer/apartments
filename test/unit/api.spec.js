import flushPromises from 'flush-promises'
import api from '@/assets/api.faker'

describe('Api', () => {
  const result = await api.getApartments()
  await flushPromises()

  it('fetches the data', async () => {
    expect(result.length).toEqual(10)
  })

  it('matches the snapshot', async () => {
    expect(result).toMatchSnapshot()
  })
})
