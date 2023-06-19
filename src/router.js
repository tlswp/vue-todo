import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import MainPage from './pages/MainPage';
import TasksPage from './pages/TasksPage';

const routes = [
  { path: '/', component: MainPage },
  {
    path: '/tasks/:id',
    component: TasksPage,
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
