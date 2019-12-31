import api from '@/assets/api.faker'

describe('Api', () => {
  it('fetches the data', async () => {
    // act
    const result = await api.getApartments()

    console.log(result)
    // assert
    expect(result.length).toEqual(10)
  })
})
