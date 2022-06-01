import { mount } from '@vue/test-utils'
import Licenses from '@/components/Licenses.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Licenses)
    expect(wrapper.vm).toBeTruthy()
  })
})
