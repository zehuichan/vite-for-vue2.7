import Vue, { effectScope, getCurrentInstance, reactive } from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'hash',
  routes: []
})

export function useRouter() {
  const vm = getCurrentInstance()
  if (!vm) throw new Error('must be called in setup')
  return vm.proxy.$router
}

let currentRoute

export function useRoute() {
  const vm = getCurrentInstance()
  if (!vm) throw new Error('must be called in setup')

  if (!currentRoute) {
    const scope = effectScope(true)
    scope.run(() => {
      const { $router } = vm.proxy
      currentRoute = reactive(Object.assign({}, $router.currentRoute))
      $router.afterEach((to) => {
        Object.assign(currentRoute, to)
      })
    })
  }

  return currentRoute
}
