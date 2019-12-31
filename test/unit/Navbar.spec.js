import { createLocalVue, mount } from '@vue/test-utils'
import Bootstrap from 'bootstrap-vue'
import Navbar from '@/components/Navbar.vue'
import Search from '@/components/Search.vue'

const localVue = createLocalVue()
localVue.use(Bootstrap)

describe('Page Elements', () => {
  let navbar
  const options = { localVue }

  test('Navbar', () => {
    navbar = mount(Navbar, options)
    expect(navbar.isVueInstance()).toBeTruthy()
  })

  test('Search field exists', () => {
    const search = navbar.find(Search)
    expect(search.is(Search)).toBe(true)
  })

  test('price range matches', () => {
    const range = navbar.vm.$props.priceRange
    expect(range).toMatchSnapshot()
  })

  test('area range matches', () => {
    const range = navbar.vm.$props.areaRange
    expect(range).toMatchSnapshot()
  })
})
