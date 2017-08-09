import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import _ from 'lodash'
import 'element-ui/lib/theme-default/index.css';

Vue.use(ElementUI, {locale});
Vue.use(VueRouter);


import routes from '../routes.js';

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes
});

Vue.router = router;

new Vue({
  el: '#app',
  render: h => h(App),
    router
})
