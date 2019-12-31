import apartments from './fixtures/apartments'
import mutations from '@/store/mutations'
import initialState from '@/store/state'

describe('Mutations', () => {
  let state
  const apartment = apartments[0]
  const expectedApartment = {
    id: 0,
    title: apartment.title,
    price: apartment.price,
    bedrooms: apartment.bedrooms,
    bathrooms: apartment.bathrooms,
    picture: apartment.picture,
    address: {
      city: apartment.address.city,
      zip: apartment.address.zip,
      street: apartment.address.street,
      lat: apartment.address.lat,
      long: apartment.address.long
    }
  }

  beforeEach(() => {
    state = { ...initialState }
  })

  it('adds a new apartment', () => {
    // act
    mutations.SET_APARTMENT(state, apartment)

    // assert
    expect(state.apartments.length).toBe(1)
    expect(state.apartments[0]).toEqual(expectedApartment)
  })

  it('throws error with entry of same id', () => {
    // act
    const mutation = () => { mutations.SET_APARTMENT(state, apartment) }

    // second call
    expect(mutation).toThrowErrorMatchingSnapshot()
  })
})
