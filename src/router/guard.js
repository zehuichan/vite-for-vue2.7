export function setupGuard(router) {
  router.beforeEach((to, from, next) => {
    next()
  })

  router.afterEach((to, from) => {})
}
