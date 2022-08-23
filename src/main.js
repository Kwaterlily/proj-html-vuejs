import Vue from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(faPhone);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
