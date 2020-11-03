import Vue from 'vue';
import Router from 'vue-router';

const Hello = () => import("@/components/Hello.vue");

Vue.use(Router);

export const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  }
];

export default new Router({
  mode: 'history',
  routes
})
