<template>
    <section class="homepage">
        <div class="row-box">
            <div class="enter-box">
                <label class="enter-title">
                    x1：
                </label>
                <input type="number" v-model.number="queryObj.x1">
            </div>
            <div class="enter-box">
                <label class="enter-title">
                    x2：
                </label>
                <input type="number" v-model.number="queryObj.x2">
            </div>
        </div>
        <div class="row-box">
            <div class="enter-box">
                <label class="enter-title">
                    y1：
                </label>
                <input type="number" v-model.number="queryObj.y1">
            </div>
            <div class="enter-box">
                <label class="enter-title">
                    y2：
                </label>
                <input type="number" v-model.number="queryObj.y2">
            </div>
        </div>
        <ul class="row-box">
            <li>
                需要先灰度化
            </li>
            <li>
                将原图像素值在x1和x2之间的灰度拉伸到y1和y2之间
            </li>
        </ul>
        <div class="button-box">
            <button class="button" @click="grayEvent">灰度处理</button>
            <button class="button"
                    :class="{'disable': !clickFlag}"
                    @click="grayStretchEvent">灰度拉伸</button>
            <button class="button" @click="resetEvent">恢复</button>
            <button class="button" @click="downLoadEvent">下载</button>
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
    }
</style>
<script src="./index.js">
</script>
