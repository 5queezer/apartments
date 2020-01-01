import { createLocalVue, mount } from '@vue/test-utils'
import Bootstrap from 'bootstrap-vue'
import Index from '@/pages/index.vue'
import Logo from '@/components/Logo.vue'
import Navbar from '@/components/Navbar.vue'

const localVue = createLocalVue()
localVue.use(Bootstrap)

describe('Page Elements', () => {
  let page
  const options = { localVue }

  test.skip('Can mount Index page', () => {
    page = mount(Index, options)
    expect(page.isVueInstance()).toBeTruthy()
  })

  test.skip('Logo exists', () => {
    const logo = page.find(Logo)
    expect(logo.is(Logo)).toBe(true)
  })

  test.skip('Navbar exists', () => {
    const navbar = page.find(Navbar)
    expect(navbar.is(Navbar)).toBe(true)
  })
})
