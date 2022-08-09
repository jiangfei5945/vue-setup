import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia, PiniaVuePlugin } from "pinia";
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);
Vue.use(PiniaVuePlugin);

const pinia = createPinia();
Vue.config.productionTip = false;

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
