import api from './api.kasaz'

export const state = () => ({
  list: [],
  id: undefined,
  loading: false,
  viewport: {}
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
  },
  reset (state) {
    state.list = []
  },
  loading (state, setting) {
    state.loading = !!setting
  },
  viewport (state, values) {
    Object.assign(state.viewport, values)
  }
}

export const actions = {
  fetch ({ commit }, params) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', true)
        const apartments = await api.getApartments(params)
        commit('reset')
        if (!apartments) { reject(new Error('api.getApartments() result is empty')) }
        apartments.forEach(a => commit('add', a))
        commit('loading', false)
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
