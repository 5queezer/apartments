export default {
  SET_APARTMENT (state, apartment) {
    state.apartments.push({
      title: apartment.title,
      price: apartment.price,
      bedrooms: apartment.bedrooms,
      bathrooms: apartment.bathrooms,
      picture: apartment.picture,
      geo: {
        lat: apartment.geo.lat,
        long: apartment.get.long
      }
    })
  },
  SET_APARTMENTS (state, apartments) {
    for (const a of apartments) { this.SET_APARTMENT(a) }
  }
}
