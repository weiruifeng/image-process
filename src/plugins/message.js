import MessageBox from '@components/MessageBox/index.vue';
let Vue;

let Message = function() {};
function wrapper(Vue, Comp) {
    return function(option) {
        option = option || {};
        const dom = document.createElement('div');
        dom.id = 'wrapper' + new Date().getTime();
        let container = document.body;
        if (option.container) {
            container = option.container;
            if (typeof option.container === 'string') {
                container = document.querySelector(option.container);
            }
        }
        container.appendChild(dom);
        option.extends = Comp;
        let inst = {};
        if (Vue.version.charAt(0) > 0) {
            inst = new Vue(option);
            inst.$mount(dom);
        } else {
            option.el = dom;
            inst = new Vue(option);
        }
        return inst;
    };
}

const message = function(text, errorFlag = true) {
    const msg = new Message({
        data: {
            show: true,
            text: text,
            errorFlag: errorFlag
        }
    });
    setTimeout(() => {
        msg.hide();
    }, 2000);
};
function install(_Vue) {
    if (Vue) {
        console.error(
            '[dialog] already installed. Vue.use(Dialog) should be called only once.'
        );
        return;
    }
    Vue = _Vue;
    Message = wrapper(Vue, MessageBox);
    Vue.mixin({
        beforeCreate() {
            this.$message = function(text, errorFlag = true) {
               message(text, errorFlag);
            };
        }
    });
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export { message };
export default { install };
