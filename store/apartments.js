import api from './api.kasaz'

export const state = () => ({
  list: []
})

export const mutations = {
  add (state, apartment) {
    for (const entry of state.list) {
      if (typeof entry.lat === 'undefined' || typeof entry.lng === 'undefined') { continue }
      if (typeof entry.id === 'undefined') { entry.id = Math.max(state.list.map(s => s.id)) + 1 }
      if (entry.id === apartment.id) { throw (new Error('double entry')) }
    }
    state.list.push({
      ...apartment
    })
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
  list: (state) => {
    return state.list
  }
}
