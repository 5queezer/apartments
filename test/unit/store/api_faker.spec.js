import flushPromises from 'flush-promises'
import api from '@/store/api.faker'

describe('Api', () => {
  let result
  beforeEach(async () => {
    result = await api.getApartments()
    await flushPromises()
  })

  it('fetches the data', () => {
    expect(result.length).toEqual(10)
  })

  it('matches the snapshot', () => {
    expect(result).toMatchSnapshot()
  })
})
