/* eslint-disable no-undef */
const util = {
    /**
     * mounted初始化
     * @param that
     */
    mounted(that) {
        const imageObj = that.$store.getters.imageObj;
        that.fileName = imageObj.fileName;
        that.data = that.$store.getters.initData;
        if (that.data && that.data.length) {
            setTimeout(() => {
                that.myCanvas = document.getElementById('myCanvas');
                const img = new Image();
                img.src = that.$store.getters.imageObj.dataUrl;
                img.onload = () => {
                    that.width = that.myCanvas.width = img.width;
                    that.height = that.myCanvas.height = img.height;
                    that.context = that.myCanvas.getContext('2d');
                    that.context.drawImage(img, 0, 0);
                    that.imgData = that.context.getImageData(0, 0, img.width, img.height);
                };
            }, 500);
        } else {
            that.$router.replace('/homepage');
        }
    },
    /**
     * 从原始图片数据获取数据
     * @param imgData
     * @param data
     * @returns {*}
     */
    copyData(imgData, data) {
        for (let i = 0, len = data.length; i < len; i += 4) {
            imgData.data[i] = data[i];
            imgData.data[i + 1] = data[i + 1];
            imgData.data[i + 2] = data[i + 2];
            imgData.data[i + 3] = data[i + 3];
        }
        return imgData;
    },
    /**
     * 下载图片
     * @param fileName
     * @param url
     */
    downloadFile(fileName, url) {
        const aLink = document.createElement('a');
        aLink.download = fileName;
        aLink.href = url;
        aLink.click();
    },
    /**
     * 获取图片宽度和高度上的像素数
     * @param data
     * @param width
     * @param height
     */
    pixelsEvent(data, width, height) {
        const cardinalNumber = Math.sqrt(data.length / (width * height));
        return {
            width: cardinalNumber * width,
            height: cardinalNumber * height
        };
    }
};
export { util };
