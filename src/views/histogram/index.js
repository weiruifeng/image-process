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
            histogramFlag: false
        };
    },
    mounted() {
        util.mounted(this);
    },
    methods: {
        grayEvent() {
            gray(this.imgData.data);
            this.context.putImageData(this.imgData, 0, 0);
            this.histogramFlag = true;
        },
        histogramEvent() {
            if (this.histogramFlag) {
                const dataSet = statistics(this.imgData.data, 1);
                lineChart(dataSet, '#histogram', 1);
            }
        }
    }
};
