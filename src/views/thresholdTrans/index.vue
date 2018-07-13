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
        <ul class="row-box">
            <li>
                需要先灰度化
            </li>
            <li>
                图像中某像素的灰度值小于该阈值，则将该像素的灰度值设为0，否则设为255
            </li>
        </ul>
        <div class="button-box">
            <button class="button" @click="grayEvent">灰度处理</button>
            <button class="button"
                    :class="{'disable': !clickFlag}"
                    @click="thresholdTransEvent">阈值变换</button>
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
