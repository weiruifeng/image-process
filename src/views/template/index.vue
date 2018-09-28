<template>
    <section class="homepage">
        <div class="row-box">
            <div class="enter-box">
                <label class="enter-title">
                    阈值：
                </label>
                <input type="number" v-model.number="queryObj.bthre">
            </div>
            <div class="enter-box">
                <label class="enter-title">
                    梯度锐化阈值：
                </label>
                <input type="number" v-model.number="bThre">
            </div>
        </div>
        <div class="button-box pad-top">
            <button class="button" @click="grayEvent">灰度处理</button>
            <button class="button" @click="thresholdTransEvent">二值化变换</button>
            <button class="button" @click="addNoiseEvent">添加噪声</button>
            <button class="button" @click="resetEvent">恢复</button>
            <button class="button" @click="downLoadEvent">下载</button>
        </div>
        <div class="button-box">
            <button class="button" @click="smoothEvent">平均模版</button>
            <button class="button" @click="gossEvent">高斯平滑</button>
            <button class="button" @click="edgeEvent">边缘识别</button>
            <button class="button" @click="medianFilterEvent">中值滤波</button>
            <button class="button" @click="gradSharpEvent">梯度锐化</button>
            <button class="button" @click="laplaceEvent">拉普拉斯锐化</button>
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
        .pad-top {
            padding-bottom: 10px;
        }
    }
</style>
<script src="./index.js">
</script>
