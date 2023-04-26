import Vue from 'vue'
import VueRouter from 'vue-router'

const modulesRoutes = import.meta.glob('./modules/**/*.js', { eager: true })

const modules = Object.keys(modulesRoutes).reduce((modules, modulePath) => {
  const value = modulesRoutes[modulePath].default
  modules.push(...value)
  return modules
}, [])

console.log(modules)

Vue.use(VueRouter)

export const constantRoutes = [
  ...modules
]

export function createRouter(routes = constantRoutes) {
  return new VueRouter({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
  })
}

export const router = createRouter()
