import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Settings from '../views/Settings.vue';
import Game from '../views/Game.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/',
    name: 'Game',
    component: Game,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
