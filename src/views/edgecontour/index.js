import { robertDIB, sobelDIB, prewittDIB, kirschDIB, GaussDIB } from '@/algorithm/edgeDetection';
import { gray } from '@/algorithm/gray';
import { util } from '@/utils/util';
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
        util.mounted(this);
    },
    methods: {
        downLoadEvent() {
            util.downloadFile(this.fileName, this.myCanvas.toDataURL());
        },
        resetEvent() {
            const imgData = util.copyData(this.imgData, this.data);
            this.context.putImageData(imgData, 0, 0);
            this.clickFlag = false;
        },
        /**
         * 针对原图灰度化
         */
        grayEvent() {
            gray(this.imgData.data);
            this.context.putImageData(this.imgData, 0, 0);
            this.clickFlag = true;
        },
        robertEvent() {
            robertDIB(this.imgData.data, this.width, this.height);
            this.context.putImageData(this.imgData, 0, 0);
        },
        slbelEvent() {
            sobelDIB(this.imgData.data, this.width, this.height);
            this.context.putImageData(this.imgData, 0, 0);
        },
        prewittEvent() {
            prewittDIB(this.imgData.data, this.width, this.height);
            this.context.putImageData(this.imgData, 0, 0);
        },
        kirschEvent() {
            kirschDIB(this.imgData.data, this.width, this.height);
            this.context.putImageData(this.imgData, 0, 0);
        },
        gaussEvent() {
            GaussDIB(this.imgData.data, this.width, this.height);
            this.context.putImageData(this.imgData, 0, 0);
        },
        houghEvent() {
            robertDIB(this.imgData.data, this.width, this.height);
            this.context.putImageData(this.imgData, 0, 0);
        },
        contourEvent() {
            robertDIB(this.imgData.data, this.width, this.height);
            this.context.putImageData(this.imgData, 0, 0);
        },
        traceEvent() {
            robertDIB(this.imgData.data, this.width, this.height);
            this.context.putImageData(this.imgData, 0, 0);
        },
        fillEvent() {
            robertDIB(this.imgData.data, this.width, this.height);
            this.context.putImageData(this.imgData, 0, 0);
        }
    }
};
