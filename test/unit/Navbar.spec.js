import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Bootstrap from 'bootstrap-vue'
import Logo from '@/components/Logo.vue'
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
})
