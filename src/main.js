import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './date.filter'
import messagePlugin from './utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// eslint-disable-next-line no-unused-vars
const firebaseConfig = {
  apiKey: 'AIzaSyAvpISZ9M5eNCywnkjnMVN_HhHnlKDNMvg',
  authDomain: 'vue-crm-8452d.firebaseapp.com',
  databaseURL: 'https://vue-crm-8452d.firebaseio.com',
  projectId: 'vue-crm-8452d',
  storageBucket: 'vue-crm-8452d.appspot.com',
  messagingSenderId: '264745925203',
  appId: '1:264745925203:web:a5ccd95457db75f6dba4a6',
  measurementId: 'G-Y3D6HYP8MS'
}

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.config.productionTip = false

let app

firebase.initializeApp(firebaseConfig)
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
