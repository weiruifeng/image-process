import { grayStretch } from '@/algorithm/grayStretch';
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
                x1: 48,
                y1: 30,
                x2: 200,
                y2: 220
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
            if (this.queryObj.x1 < 0 ||
                this.queryObj.x1 > this.queryObj.x2 ||
                this.queryObj.x2 > 255 ||
                this.queryObj.y1 < 0 ||
                this.queryObj.y1 > this.queryObj.y2 ||
                this.queryObj.y2 > 255) {
                this.$message('请检查输入条件');
                return false;
            }
            return true;
        },
        grayStretchEvent() {
            if (this.clickFlag && this.checkQuery()) {
                grayStretch(this.imgData.data, this.queryObj.x1, this.queryObj.y1, this.queryObj.x2, this.queryObj.y2);
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
