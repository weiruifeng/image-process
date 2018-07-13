<template>
    <section class="homepage">
        <ul class="row-box">
            <li>
                需要先灰度化
            </li>
        </ul>
        <div class="button-box">
            <button class="button" @click="grayEvent">灰度处理</button>
            <button class="button"
                    :class="{'disable': !histogramFlag}"
                    @click="histogramEvent">直方图</button>
        </div>
        <div class="body-box">
            <div id="histogram"></div>
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
