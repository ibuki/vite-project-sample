import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory, Router } from 'vue-router'
import App from './App.vue'
import { routes } from './router/routes'

let router: Router

beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes,
  })
})

test('uses mounts', async () => {
  router.push('/')
  await router.isReady()
  const wrapper = mount(App, { global: { plugins: [router] } })

  expect(wrapper.html()).toContain('Recommended IDE setup')
  expect(wrapper.html()).toContain('count is: 0')

  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('count is: 1')
})
