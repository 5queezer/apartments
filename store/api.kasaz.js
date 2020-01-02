import { setup } from 'axios-cache-adapter'

const api = setup({
  baseURL: 'https://www.kasaz.com/api/v1',
  cache: {
    maxAge: 15 * 60 * 1000
  }
})

function format (d) {
  const item = {}
  item.id = d.id
  item.title = d.t
  item.price = d.p
  item.sqm = d.s
  item.bedrooms = d.r
  item.bathrooms = d.b
  item.picture = d.i.map(element => element.imageUrl)
  item.address = {
    city: d.cn,
    street: d.dn,
    lat: d.l,
    long: d.g
  }
  return item
}

function getApartments (params) {
  return api.get('/search/update_map_results', { params })
    .then(function (response) {
      const data = response.data.markers.map(format)
      return data
    })
}

export default {
  getApartments
}
