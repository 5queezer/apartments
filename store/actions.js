import api from '@/assets/api.faker'

export default {
  FETCH_APARTMENTS ({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const apartments = (await api.getApartments()) || reject(new Error('api.getApartments() result is empty'))
        commit('SET_APARTMENTS', apartments)
        resolve(apartments)
      } catch (error) {
        reject(error)
      }
    })
  }
}
