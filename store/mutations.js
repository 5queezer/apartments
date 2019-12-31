export default {
  SET_APARTMENT (state, apartment) {
    state.apartments.push({
      id: state.apartments.length,
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
    })
  },
  SET_APARTMENTS (state, apartments) {
    for (const a of apartments) { this.SET_APARTMENT(a) }
  }
}
