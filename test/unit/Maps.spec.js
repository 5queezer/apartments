import { shallowMount } from '@vue/test-utils'
import Maps from '@/components/Maps.vue'

const factory = () => {
  return shallowMount(Maps, {
    stubs: ['GMap']
  })
}

describe('Google Maps', () => {
  test('Can mount element', () => {
    const maps = factory(Maps)
    expect(maps.isVueInstance()).toBeTruthy()
  })

  test.skip('Can render element', () => {
    const maps = factory(Maps)
    expect(maps.html()).toMatchSnapshot()
  })
})
