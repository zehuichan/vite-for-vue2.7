import Vue, { getCurrentInstance, shallowRef } from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'hash',
  routes: []
})

export function useRouter() {
  const vm = getCurrentInstance()

  if (vm) {
    return router
  }

  console.warn('请在 setup 中调用。')

  return undefined
}

export function useRoute() {
  const currentRoute = shallowRef()
  if (!currentRoute.value) {
    const vm = getCurrentInstance()

    if (!vm) {
      console.warn('请在 setup 中调用。')
      return
    }

    currentRoute.value = vm.proxy.$route

    // 每次路由切换时，更新 route 参数
    const router = useRouter()
    router.afterEach((to) => (currentRoute.value = to))
  }

  return currentRoute
}
