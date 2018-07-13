export const imageModule = {
    state: {
        fileName: '',
        data: [],
        imgData: {},
        dataUrl: ''
    },
    getters: {
        initData(state) {
            return state.data;
        },
        imgData(state) {
            return state.imgData;
        },
        imageObj(state) {
            return {
                fileName: state.fileName,
                dataUrl: state.dataUrl
            };
        }
    },
    mutations: {
        setImageData(state, data) {
            state.fileName = data.fileName;
            state.imgData = data.imgData;
            state.dataUrl = data.dataUrl;
        },
        setInitData(state, data) {
            state.data = data;
        }
    }
};
