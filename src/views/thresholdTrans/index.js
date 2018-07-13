import { thresholdTrans } from '@/algorithm/thresholdTrans';
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
            clickFlag: false
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
        }
    }
};
