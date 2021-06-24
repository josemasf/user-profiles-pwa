import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'

import x5GMaps from 'x5-gmaps';

Vue.use(x5GMaps, 'AIzaSyDeaWwJwTOECEpP0I-1WIwadbI7n192g0k');

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
