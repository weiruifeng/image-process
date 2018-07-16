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
                    自定义模版：
                </label>
                <div class="tem-box">
                    <div>
                        <input type="number" v-model.number="structure[0][0]">
                        <input type="number" v-model.number="structure[0][1]">
                        <input type="number" v-model.number="structure[0][2]">
                    </div>
                    <div>
                        <input type="number" v-model.number="structure[1][0]">
                        <input type="number" v-model.number="structure[1][1]">
                        <input type="number" v-model.number="structure[1][2]">
                    </div>
                    <div>
                        <input type="number" v-model.number="structure[2][0]">
                        <input type="number" v-model.number="structure[2][1]">
                        <input type="number" v-model.number="structure[2][2]">
                    </div>
                </div>
                <div class="tem-box">
                    -1为忽略
                </div>
            </div>
        </div>
        <ul class="row-box">
            <li>
                开运算为先腐蚀后膨胀
            </li>
            <li>
                闭运算为先膨胀后腐蚀
            </li>
        </ul>
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
                    @click="horizontalEvent">水平腐蚀</button>
            <button class="button"
                    @click="verticalEvent">垂直腐蚀</button>
            <button class="button"
                    @click="customizeEvent">自定义腐蚀</button>
            <button class="button"
                    @click="horizontalDilationEvent">水平膨胀</button>
            <button class="button"
                    @click="verticalDilationEvent">垂直膨胀</button>
            <button class="button"
                    @click="customizeDilationEvent">自定义膨胀</button>
        </div>
        <div class="button-box">
            <button class="button"
                    @click="horizontalOpenEvent">水平开运算</button>
            <button class="button"
                    @click="verticalOpenEvent">垂直开运算</button>
            <button class="button"
                    @click="customizeOpenEvent">自定义开运算</button>
            <button class="button"
                    @click="horizontalCloseEvent">水平闭运算</button>
            <button class="button"
                    @click="verticalCloseEvent">垂直闭运算</button>
            <button class="button"
                    @click="customizeCloseEvent">自定义闭运算</button>
            <button class="button"
                    @click="thinEvent">细化</button>
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
