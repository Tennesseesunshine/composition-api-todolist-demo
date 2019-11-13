import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
Vue.use(VueCompositionApi)
Vue.use(ViewUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
