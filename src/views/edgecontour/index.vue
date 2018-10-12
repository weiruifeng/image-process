<template>
    <section class="homepage">
        <div class="row-box">
            <div class="enter-box">
                <label class="enter-title">
                    阈值：
                </label>
                <input type="number" v-model.number="queryObj.bthre">
            </div>
        </div>
        <div class="button-box pad-top">
            <button class="button" @click="grayEvent">灰度处理</button>
            <button class="button"
                    :class="{'disable': !clickFlag}"
                    @click="thresholdTransEvent">二值化变换</button>
            <button class="button" @click="resetEvent">恢复</button>
            <button class="button" @click="downLoadEvent">下载</button>
        </div>
        <div class="button-box pad-top">
            <button class="button"
                    @click="robertEvent">robert</button>
            <button class="button"
                    @click="sobelEvent">sobel</button>
            <button class="button"
                    @click="prewittEvent">prewitt</button>
            <button class="button"
                    @click="kirschEvent">kirsch</button>
            <button class="button"
                    @click="gaussEvent">gauss</button>
            <!--<button class="button"-->
                    <!--@click="houghEvent">hough平行线</button>-->
            <button class="button"
                    :class="{'disable': !thresholdFlag}"
                    @click="contourEvent">轮廓提取</button>
            <button class="button"
                    :class="{'disable': !thresholdFlag}"
                    @click="traceEvent">轮廓跟踪</button>
            <button class="button"
                    :class="{'disable': !thresholdFlag}"
                    @click="fillEvent">种子填充</button>
        </div>
        <div class="body-box">
            <canvas id="myCanvas">抱歉，您的浏览器还不支持canvas。</canvas>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    @import "../../scss/_mixin.scss";
    .homepage {
        padding: 10px;
        .button-box-flex {
            display: flex;
            .input-upload-box {
                width: 145px;
                flex: 0 0 145px;
            }
        }
        .body-box {
            padding-top: 10px;
            text-align: center;
        }
        .tem-box {
            display: inline-block;
            input {
                width: 40px;
                padding-right: 0;
            }
        }
        .pad-top {
            padding-bottom: 10px;
        }
    }
</style>
<script src="./index.js">
</script>
