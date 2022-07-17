export function setupGuard(router) {
	router.beforeEach((to, from, next) => {
		console.log('beforeEach', to, from)
		next()
	})

	router.afterEach((to, from) => {
		console.log('afterEach', to, from)
	})
}