import apartments from './fixtures/apartments'
import mutations from '@/store/mutations'
import initialState from '@/store/state'

describe('Mutations', () => {
  let state

  beforeEach(() => {
    state = { ...initialState }
  })

  it('adds a new apartment', () => {
    // arrange
    const expectedApartment = {
      title: apartments[0].title,
      price: apartments[0].price,
      bedrooms: apartments[0].bedrooms,
      bathrooms: apartments[0].bathrooms,
      picture: apartments[0].picture,
      address: {
        city: apartments[0].address.city,
        zip: apartments[0].address.zip,
        street: apartments[0].address.street,
        lat: apartments[0].address.lat,
        long: apartments[0].address.long
      },
      id: 0
    }

    // act
    mutations.SET_APARTMENT(state, apartments[0])

    // assert
    expect(state.apartments.length).toBe(1)
    expect(state.apartments[0]).toEqual(expectedApartment)
  })
})
