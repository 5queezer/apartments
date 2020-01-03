import api from './api.kasaz'

export const state = () => ({
  list: [],
  id: undefined
})

export const mutations = {
  add (state, apartment) {
    if (typeof apartment.address.lat === 'undefined' || typeof apartment.address.long === 'undefined') {
      throw new TypeError(`malformed geo location { ${apartment.lat} ${apartment.long} }`)
    }
    if (typeof apartment.id === 'undefined') {
      apartment.id = Math.max(state.list.map(s => s.id)) + 1
    } else {
      for (const entry of state.list) {
        if (entry.id === apartment.id) { throw new Error('double entry') }
      }
    }

    state.list.push(apartment)
  },
  set (state, id) {
    state.id = id
  }
}

export const actions = {
  fetchAll ({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const params = {
          'location[city]': 'Barcelona',
          'filters[price][min]': 1.5e6
        }
        const apartments = await api.getApartments(params)
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
  list (state) {
    return state.list
  },
  current (state) {
    return state.list.find(apartment => apartment.id)
  }
}
