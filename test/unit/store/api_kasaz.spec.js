import api from '@/store/api.kasaz'

describe('Api', () => {
  it('getApartments function exists', () => {
    expect(typeof api.getApartments).toEqual('function')
  })
})
