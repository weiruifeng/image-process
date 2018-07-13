import { inteEqualize } from '@/algorithm/inteEqualize';
import { statistics } from '@/algorithm/statistics';
import { lineChart } from '@/utils/lineChart';
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
            return true;
        },
        inteEqualizeEvent() {
            if (this.clickFlag && this.checkQuery()) {
                inteEqualize(this.imgData.data);
                this.context.putImageData(this.imgData, 0, 0);
            }
        },
        histogramEvent() {
            if (this.clickFlag) {
                const dataSet = statistics(this.imgData.data);
                lineChart(dataSet, '#histogram');
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
