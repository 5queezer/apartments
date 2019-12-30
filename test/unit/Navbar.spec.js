import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Bootstrap from 'bootstrap-vue'
import Logo from '@/components/Logo.vue'
import Navbar from '@/components/Navbar.vue'
import Search from '@/components/Search.vue'

const localVue = createLocalVue()
localVue.use(Bootstrap)

describe('Page Elements', () => {
  test('Logo', () => {
    const logo = shallowMount(Logo)
    expect(logo.isVueInstance()).toBeTruthy()
  })

  test('Navbar', () => {
    const options = { localVue }
    const navbar = mount(Navbar, options)
    expect(navbar.isVueInstance()).toBeTruthy()
  })

  test('Search field', () => {
    const options = { localVue }

    const navbar = mount(Navbar, options)
    const search = navbar.find(Search)
    expect(search.is(Search)).toBe(true)
  })
})
