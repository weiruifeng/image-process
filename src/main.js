import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import { route } from './route/index';
import Message from './plugins/message';

import { imageModule } from './modules/imageModule';

Vue.use(VueRouter);
Vue.use(Message);
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        imageModule
    }
});

const router = new VueRouter(route);
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
