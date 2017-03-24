import scss from './assets/stylesheets/app.scss';

import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';

Vue.use(Router);
Vue.use(Resource);

import AppComponent from './components/app.vue';
import HomeComponent from './components/home/home.vue';
import UserComponent from './components/user/user.vue';

const routes = [
    {
        path: '/',
        name: 'root',
        component: HomeComponent
    },
    {
        path: '/user',
        name: 'user',
        component: UserComponent
    }
];

const router = new Router({
    routes: routes
});

new Vue({
    router: router,
    render: h => h(AppComponent)
}).$mount('#app');