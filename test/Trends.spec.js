import { mount } from '@vue/test-utils'
import Trends from '@/pages/index.vue'

describe('Trends', () => {
  // Inspect the raw component options
  it('has data', () => {
    expect(typeof Trends.created).toBe('function')
  })
})

