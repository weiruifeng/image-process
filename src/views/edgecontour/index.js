import { thresholdTrans } from '@/algorithm/thresholdTrans';
import { robertDIB, sobelDIB, prewittDIB, kirschDIB, GaussDIB, contourDIB, traceDIB, fillDIB, fill2DIB } from '@/algorithm/edgeDetection';
import { houghDIB } from '@/algorithm/hough';
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
            imgData: {},
            queryObj: {
                bthre: 128
            },
            clickFlag: false,
            thresholdFlag: false
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
        checkQuery() {
            if (this.queryObj.bthre > 255 || this.queryObj.bthre < 0) {
                this.$message('请检查输入条件');
                return false;
            }
            return true;
        },
        thresholdTransEvent() {
            if (this.clickFlag && this.checkQuery()) {
                thresholdTrans(this.imgData.data, this.queryObj.bthre);
                this.context.putImageData(this.imgData, 0, 0);
                this.thresholdFlag = true;
            }
        },
        robertEvent() {
            robertDIB(this.imgData.data, this.width, this.height);
            this.context.putImageData(this.imgData, 0, 0);
        },
        sobelEvent() {
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
            houghDIB(this.imgData.data, this.width, this.height);
            this.context.putImageData(this.imgData, 0, 0);
        },
        contourEvent() {
            if (this.thresholdFlag) {
                contourDIB(this.imgData.data, this.width, this.height);
                this.context.putImageData(this.imgData, 0, 0);
            }
        },
        traceEvent() {
            if (this.thresholdFlag) {
                traceDIB(this.imgData.data, this.width, this.height);
                this.context.putImageData(this.imgData, 0, 0);
            }
        },
        fillEvent() {
            fillDIB(this.imgData.data, this.width, this.height);
            this.context.putImageData(this.imgData, 0, 0);
        }
    }
};
