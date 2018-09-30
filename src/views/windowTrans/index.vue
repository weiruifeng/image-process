<template>
    <section class="homepage">
        <div class="row-box">
            <div class="enter-box">
                <label class="enter-title">
                    下限：
                </label>
                <input type="number" v-model.number="queryObj.bLow">
            </div>
            <div class="enter-box">
                <label class="enter-title">
                    上限：
                </label>
                <input type="number" v-model.number="queryObj.bUp">
            </div>
        </div>
        <ul class="row-box">
            <li>
                需要先灰度化
            </li>
            <li>
                小于该窗口下限对灰度值直接设置为0；大于该窗口下限对灰度值直接设置为255；
            </li>
        </ul>
        <div class="button-box">
            <button class="button" @click="grayEvent">灰度处理</button>
            <button class="button"
                    @click="windowTransEvent">窗口变换</button>
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
