import { thresholdTrans } from '@/algorithm/thresholdTrans';
import { medianFilter } from '@/algorithm/medianFilter';
import { gradSharp } from '@/algorithm/gradSharp';
import { template } from '@/algorithm/template';
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
            smoothObj: {
                iTempW: 3,
                iTempH: 3,
                iTempMX: 1,
                iTempMY: 1,
                fpArray: [1, 1, 1, 1, 2, 1, 1, 1, 1],
                fCoef: 1 / 9
            },
            gossObj: {
                iTempW: 3,
                iTempH: 3,
                iTempMX: 1,
                iTempMY: 1,
                fpArray: [1, 2, 1, 2, 4, 2, 1, 2, 1],
                fCoef: 1 / 16
            },
            edgeObj: {
                iTempW: 3,
                iTempH: 3,
                iTempMX: 1,
                iTempMY: 1,
                fpArray: [0, 1, 0, 1, -4, 1, 0, 1, 0],
                fCoef: 1
            },
            laplaceObj: {
                iTempW: 3,
                iTempH: 3,
                iTempMX: 1,
                iTempMY: 1,
                fpArray: [-1, -1, -1, -1, 9, -1, -1, -1, -1],
                fCoef: 1
            },
            medianFilterObj: {
                iFilterW: 3,
                iFilterH: 3,
                iFilterMX: 1,
                iFilterMY: 1
            },
            bThre: 0,
            queryObj: {
                bthre: 128
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
        /**
         * 针对原图灰度化
         */
        grayEvent() {
            gray(this.imgData.data);
            this.context.putImageData(this.imgData, 0, 0);
        },
        checkQuery() {
            if (this.queryObj.bthre > 255 || this.queryObj.bthre < 0) {
                this.$message('请检查输入条件');
                return false;
            }
            return true;
        },
        thresholdTransEvent() {
            if (this.checkQuery()) {
                thresholdTrans(this.imgData.data, this.queryObj.bthre);
                this.context.putImageData(this.imgData, 0, 0);
            }
        },
        smoothEvent() {
            template(this.imgData.data, this.width, this.height, this.smoothObj);
            this.context.putImageData(this.imgData, 0, 0);
        },
        gossEvent() {
            console.log(this.width, this.height);
            template(this.imgData.data, this.width, this.height, this.gossObj);
            this.context.putImageData(this.imgData, 0, 0);
        },
        edgeEvent() {
            template(this.imgData.data, this.width, this.height, this.edgeObj);
            this.context.putImageData(this.imgData, 0, 0);
        },
        medianFilterEvent() {
            medianFilter(this.imgData.data, this.width, this.height, this.medianFilterObj);
            this.context.putImageData(this.imgData, 0, 0);
        },
        addNoiseEvent() {
            const len = 100;
            for (let i = 0; i < len; i++) {
                const x = Math.floor((this.width - 1) * Math.random());
                const y = Math.floor((this.height - 1) * Math.random());
                const count = (x * this.width + y) * 4;
                for (let i = 0; i < 3; i++) {
                    this.imgData.data[count + i] = 0;
                }
            }
            this.context.putImageData(this.imgData, 0, 0);
        },
        gradSharpEvent() {
            // this.test(this.imgData.data, this.width, this.height);
            gradSharp(this.imgData.data, this.width, this.height, this.bThre);
            this.context.putImageData(this.imgData, 0, 0);
        },
        laplaceEvent() {
            template(this.imgData.data, this.width, this.height, this.laplaceObj);
            this.context.putImageData(this.imgData, 0, 0);
        },
        test(data, lWidth, lHeight) {
            for (let i = 0; i < lHeight - 1; i++) {
                for (let j = 0; j < lWidth - 1; j++) {
                    const count = (i * lWidth + j) * 4;
                    for (let k = 0; k < 3; k++) {
                        data[count + k] = (i % 2) ? 255 : 0;
                        // if (i === 0) {
                        //     console.log('count: ' + (count + k) + ';  data: ' + data[count + k]);
                        // }
                    }
                }
            }
            // for (let i = 0; i < 68; i++) {
            //     if (i % 4 !== 3) {
            //         console.log('key: ' + i + ';  data: ' + data[i]);
            //     }
            // }
            // console.log(data);
        }
    }
};
