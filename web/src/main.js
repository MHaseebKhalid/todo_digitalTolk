import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faClipboardList,
  faLocationDot,
  faArrowRightFromBracket,
  faMapPin,
  faPlus,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faClipboardList);
library.add(faLocationDot);
library.add(faArrowRightFromBracket);
library.add(faMapPin);
library.add(faPlus);
library.add(faClock);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// const router = createRouter({ ... })

// router.afterEach((to) => {
//   if (to.name == "home") {
//     store.dispatch("set_searchBar", true);
//   } else {
//     store.dispatch("set_searchBar", false);
//   }
// });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
