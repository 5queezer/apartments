import { mount } from '@vue/test-utils'
import Maps from '@/components/Maps.vue'

describe('Google Maps', () => {
  const locations = [
    {
      lat: 44.933076,
      lng: 15.629058
    },
    {
      lat: 45.815,
      lng: 15.9819
    },
    {
      lat: 45.12,
      lng: 16.21
    }
  ]

  test('Can mount element', () => {
    const options = { propsData: {
      locations
    } }
    const maps = mount(Maps, options)
    expect(maps.isVueInstance()).toBeTruthy()
  })
})
