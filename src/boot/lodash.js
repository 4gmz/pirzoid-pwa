// import something here
import lodash from 'lodash'

// "async" is optional
export default async ({ Vue/* app, router, Vue, ... */ }) => {
  // something to do
  Object.defineProperty(Vue.prototype, '_', {
    value: lodash
  })
}
