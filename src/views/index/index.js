import headerComponent from '@/components/Header/index.vue';
import LeftNav from '@/components/LeftNav/index.vue';
export default {
    components: {
        headerComponent,
        LeftNav
    },
    created() {
        if (~navigator.userAgent.indexOf('Windows')) {
            const css = `
            ::-webkit-scrollbar {
                width: 10px;
                height: 10px;
            }
            ::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                border-radius: 10px;
            }
            ::-webkit-scrollbar-thumb {
                border-radius: 10px;
                background: #bbb;
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
            }
            ::-webkit-scrollbar-thumb:window-inactive {
                background: rgba(0,0,0,0.4);
            }`;
            const head = document.getElementsByTagName('head')[0];
            const style = document.createElement('style');
            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            head.appendChild(style);
        }
    }
};
