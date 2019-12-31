import api from '@/assets/api.faker'

export default {
  FETCH_APARTMENTS ({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const apartments = await api.getApartments()
        console.log(apartments)
        for (const a of apartments || []) {
          commit('SET_APARTMENT', a)
        }
        resolve(apartments)
      } catch (error) {
        reject(error)
      }
    })
  }
}
