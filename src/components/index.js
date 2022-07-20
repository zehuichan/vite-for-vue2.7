import Vue from 'vue'

const components = []

export function registerComponents() {
  components.map((item) => {
    if (item.install) {
      Vue.use(item)
    } else if (item.name) {
      Vue.component(item.name, item)
    }
  })
}
