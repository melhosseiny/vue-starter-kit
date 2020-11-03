import Vue from 'vue';

import router from './router';
import store from './store';

import App from './App.vue';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
  }
});
