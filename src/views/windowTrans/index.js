import { windowTrans } from '@/algorithm/windowTrans';
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
                bLow: 48,
                bUp: 200
            }
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
        },
        checkQuery() {
            if (this.queryObj.bUp > 255 ||
                this.queryObj.bLow < 0 ||
                this.queryObj.bLow > this.queryObj.bUp) {
                this.$message('请检查输入条件');
                return false;
            }
            return true;
        },
        windowTransEvent() {
            if (this.checkQuery()) {
                windowTrans(this.imgData.data, this.queryObj.bLow, this.queryObj.bUp);
                this.context.putImageData(this.imgData, 0, 0);
            }
        },
        /**
         * 针对原图灰度化
         */
        grayEvent() {
            gray(this.imgData.data);
            this.context.putImageData(this.imgData, 0, 0);
        }
    }
};
