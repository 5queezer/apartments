import api from '@/assets/api.faker'

export const state = () => ({
  apartments: []
})

export const mutations = {
  add (state, apartment) {
    for (const entry of state.apartments) {
      if (entry.id === apartment.id) { throw (new Error('double entry')) }
    }
    state.apartments.push({
      id: apartment.id,
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
  }
}

export const actions = {
  fetchAll ({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const apartments = await api.getApartments()
        if (!apartments) { reject(new Error('api.getApartments() result is empty')) }
        for (const a of apartments) { commit('add', a) }
        resolve(apartments.length)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export const getters = {
  list: (state) => {
    return state.apartments
  }
}
