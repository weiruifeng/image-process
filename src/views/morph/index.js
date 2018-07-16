import { thresholdTrans } from '@/algorithm/thresholdTrans';
import { erosionDIB, dilationDIB, thinDIB } from '@/algorithm/morph';
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
            structure: [
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1]
            ]
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
            }
        },
        /**
         * 针对原图灰度化
         */
        grayEvent() {
            gray(this.imgData.data);
            this.context.putImageData(this.imgData, 0, 0);
            this.clickFlag = true;
        },
        horizontalEvent() {
            erosionDIB(this.imgData.data, this.width, this.height, 0);
            this.context.putImageData(this.imgData, 0, 0);
        },
        verticalEvent() {
            erosionDIB(this.imgData.data, this.width, this.height, 1);
            this.context.putImageData(this.imgData, 0, 0);
        },
        customizeEvent() {
            erosionDIB(this.imgData.data, this.width, this.height, 2, this.structure);
            this.context.putImageData(this.imgData, 0, 0);
        },
        horizontalDilationEvent() {
            dilationDIB(this.imgData.data, this.width, this.height, 0);
            this.context.putImageData(this.imgData, 0, 0);
        },
        verticalDilationEvent() {
            dilationDIB(this.imgData.data, this.width, this.height, 1);
            this.context.putImageData(this.imgData, 0, 0);
        },
        customizeDilationEvent() {
            dilationDIB(this.imgData.data, this.width, this.height, 2, this.structure);
            this.context.putImageData(this.imgData, 0, 0);
        },
        horizontalOpenEvent() {
            erosionDIB(this.imgData.data, this.width, this.height, 0);
            dilationDIB(this.imgData.data, this.width, this.height, 0);
            this.context.putImageData(this.imgData, 0, 0);
        },
        verticalOpenEvent() {
            erosionDIB(this.imgData.data, this.width, this.height, 1);
            dilationDIB(this.imgData.data, this.width, this.height, 1);
            this.context.putImageData(this.imgData, 0, 0);
        },
        customizeOpenEvent() {
            erosionDIB(this.imgData.data, this.width, this.height, 2, this.structure);
            dilationDIB(this.imgData.data, this.width, this.height, 2, this.structure);
            this.context.putImageData(this.imgData, 0, 0);
        },
        horizontalCloseEvent() {
            dilationDIB(this.imgData.data, this.width, this.height, 0);
            erosionDIB(this.imgData.data, this.width, this.height, 0);
            this.context.putImageData(this.imgData, 0, 0);
        },
        verticalCloseEvent() {
            dilationDIB(this.imgData.data, this.width, this.height, 1);
            erosionDIB(this.imgData.data, this.width, this.height, 1);
            this.context.putImageData(this.imgData, 0, 0);
        },
        customizeCloseEvent() {
            dilationDIB(this.imgData.data, this.width, this.height, 2, this.structure);
            erosionDIB(this.imgData.data, this.width, this.height, 2, this.structure);
            this.context.putImageData(this.imgData, 0, 0);
        },
        thinEvent() {
            thinDIB(this.imgData.data, this.width, this.height);
            this.context.putImageData(this.imgData, 0, 0);
        }
    }
};
