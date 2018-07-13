import { routerArr } from './routerConfig';
const route = {
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'homepage',
            component: resolve => {
                require.ensure([], () => resolve(require('@views/index/index.vue').default), 'index');
            },
            children: [
                {
                    path: '/homepage',
                    name: 'homepage',
                    component: resolve => {
                        require.ensure([], () => resolve(require(`@views/homepage/index.vue`).default), 'homepage');
                    }
                }
            ]
        }
    ]
};
for (let i = 0, len = routerArr.length; i < len; i++) {
    route.routes[0].children.push({
        path: routerArr[i].path,
        component: routerArr[i].component
    });
}

export { route };
