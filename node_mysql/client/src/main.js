import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

store.dispatch("loginUser/whoAmI");//在网站被访问时需要用token去换取用户的身份
// import * as loginServ from "./service/loginService"

// loginServ.login("wk", "123456").then((resp) => {
//   console.log(resp)
// })
// loginServ.whoAmI().then((resp) => {
//   console.log(resp)
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
