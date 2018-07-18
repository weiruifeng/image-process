const routerArr = [
    {
        path: '/histogram',
        name: '直方图',
        component: resolve => {
            require.ensure([], () => resolve(require('@views/histogram/index.vue').default), 'histogram');
        }
    },
    {
        path: '/linerTrans',
        name: '灰度的线性变换',
        component: resolve => {
            require.ensure([], () => resolve(require('@views/linerTrans/index.vue').default), 'linerTrans');
        }
    },
    {
        path: '/thresholdTrans',
        name: '灰度的阈值变换',
        component: resolve => {
            require.ensure([], () => resolve(require('@views/thresholdTrans/index.vue').default), 'thresholdTrans');
        }
    },
    {
        path: '/windowTrans',
        name: '灰度对窗口变换',
        component: resolve => {
            require.ensure([], () => resolve(require('@views/windowTrans/index.vue').default), 'windowTrans');
        }
    },
    {
        path: '/grayStretch',
        name: '灰度拉伸',
        component: resolve => {
            require.ensure([], () => resolve(require('@views/grayStretch/index.vue').default), 'grayStretch');
        }
    },
    {
        path: '/inteEqualize',
        name: '灰度均衡 ',
        component: resolve => {
            require.ensure([], () => resolve(require('@views/inteEqualize/index.vue').default), 'inteEqualize');
        }
    },
    {
        path: '/template',
        name: '图像增强',
        component: resolve => {
            require.ensure([], () => resolve(require('@views/template/index.vue').default), 'template');
        }
    },
    {
        path: '/morph',
        name: '图像形态学',
        component: resolve => {
            require.ensure([], () => resolve(require('@views/morph/index.vue').default), 'morph');
        }
    },
    {
        path: '/edgecontour',
        name: '边缘检测',
        component: resolve => {
            require.ensure([], () => resolve(require('@views/edgecontour/index.vue').default), 'edgecontour');
        }
    }
];
export { routerArr };
