import { linerTrans } from '@/algorithm/linerTrans';
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
                fA: 1,
                fB: 48
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
        invertEvent() {
            linerTrans(this.imgData.data, -1, 255);
            this.context.putImageData(this.imgData, 0, 0);
        },
        linerTransEvent() {
            linerTrans(this.imgData.data, this.queryObj.fA, this.queryObj.fB);
            this.context.putImageData(this.imgData, 0, 0);
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
