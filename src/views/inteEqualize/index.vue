<template>
    <section class="homepage">
        <ul class="row-box">
            <li>
                需要先灰度化
            </li>
            <li>
                通过点运算，使输入图像转换为在每一灰度级上都有相同的像素点数的输出图像(即输出的直方图是平的)
            </li>
            <li>
                提高图像对比度，对于在进行图像比较或分割之前将图像转化为一致的格式是十分有益的
            </li>
        </ul>
        <div class="button-box">
            <button class="button" @click="grayEvent">灰度处理</button>
            <button class="button"
                    :class="{'disable': !clickFlag}"
                    @click="inteEqualizeEvent">灰度均衡</button>
            <button class="button"
                    :class="{'disable': !clickFlag}"
                    @click="histogramEvent">直方图</button>
            <button class="button" @click="resetEvent">恢复</button>
            <button class="button" @click="downLoadEvent">下载</button>
        </div>
        <div class="body-box">
            <canvas id="myCanvas">抱歉，您的浏览器还不支持canvas。</canvas>
            <div id="histogram"></div>
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
