/* eslint-disable no-undef */
export default {
    data() {
        return {
            myCanvas: '',
            width: '',
            height: '',
            context: '',
            fileName: '',
            data: [],
            imgData: {}
        };
    },
    mounted() {
        setTimeout(() => {
            this.drawCanvas(this.$store.getters.imageObj.dataUrl);
        }, 500);
    },
    methods: {
        handleFileChange(e) {
            const inputDOM = this.$refs.inputer;
            const selectedFile = inputDOM.files[0];
            this.fileName = selectedFile.name;
            const reader = new FileReader();
            reader.onload = this.putImage2Canvas;
            reader.readAsDataURL(selectedFile);
        },
        putImage2Canvas(event) {
            this.drawCanvas(event.target.result, true);
        },
        drawCanvas(url, setFlag = false) {
            if (url) {
                this.myCanvas = document.getElementById('myCanvas');
                const img = new Image();
                img.src = url;
                img.onload = () => {
                    this.width = this.myCanvas.width = img.width;
                    this.height = this.myCanvas.height = img.height;
                    this.context = this.myCanvas.getContext('2d');
                    this.context.drawImage(img, 0, 0);
                    this.imgData = this.context.getImageData(0, 0, img.width, img.height);
                    this.setDate(this.imgData.data);
                    if (setFlag) {
                        this.$store.commit('setImageData', {
                            fileName: this.fileName,
                            imgData: this.imgData,
                            dataUrl: this.toDataUrl()
                        });
                    }
                };
            }
        },
        /**
         * 保存原始图片数据
         * @param data
         */
        setDate(data) {
            for (let i = 0, len = data.length; i < len; i += 4) {
                this.data[i] = data[i];
                this.data[i + 1] = data[i + 1];
                this.data[i + 2] = data[i + 2];
                this.data[i + 3] = data[i + 3];
            }
            this.$store.commit('setInitData', this.data);
        },
        toDataUrl() {
            return this.myCanvas.toDataURL();
        }
    }
};
