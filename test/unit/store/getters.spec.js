import { getters, state as initialState } from '@/store/apartments'

describe('Getters', () => {
  let state

  beforeEach(() => {
    const apartment = {
      title: 'Distributed hybrid middleware',
      price: 418000,
      bedrooms: 4,
      bathrooms: 3,
      picture: 'http://lorempixel.com/300/200/city?78535',
      address: {
        city: 'Satterfieldhaven',
        zip: '12188',
        street: 'Terry Ville',
        lat: '-69.0952',
        long: '-51.1858'
      },
      id: 0
    }
    state = {
      ...initialState,
      list: [apartment]
    }
  })

  it('gets Apartments', () => {
    // act
    const apartments = getters.list(state)
    // assert
    expect(apartments.length).toBe(1)
  })
})
