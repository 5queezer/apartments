import api from '@/store/api.kasaz'

describe('Api', () => {
  it('getApartments function exists', () => {
    expect(typeof api.getApartments).toEqual('function')
  })

  it('can fetch', async () => {
    const results = await api.getApartments()
    expect(results).toEqual([])
  })

  it('can fetch with parameters', async () => {
    const params = {
      'location[city]': 'Barcelona',
      'filters[price][min]': 1.5e6
    }
    const results = await api.getApartments(params)
    expect(results.length > 1).toBeTruthy()
  })
})
