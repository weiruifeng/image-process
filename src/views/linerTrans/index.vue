<template>
    <section class="homepage">
        <div class="row-box">
            <div class="enter-box">
                <label class="enter-title">
                    fA：
                </label>
                <input type="number" v-model.number="queryObj.fA">
            </div>
            <div class="enter-box">
                <label class="enter-title">
                    fB：
                </label>
                <input type="number" v-model.number="queryObj.fB">
            </div>
        </div>
        <ul class="row-box">
            <li>
                当fA > 1时，输出图像当对比度将增大；当fA < 1时，输出图像当对比度将减小；
            </li>
            <li>
                当fA = 1且fB不等于0时，操作仅使所有像素当灰度值上移或下移，其效果是使整个图像更暗或更亮；
            </li>
            <li>
                如果fA < 0，暗区域将变亮，亮区域将变暗，点运算完成了图像求补运算；
            </li>
            <li>
                如果fA = 0，fB = 0时，输出图像和输入图像相同；如果fA = 1，fB = 255时，输出图像的灰度正好反转；
            </li>
        </ul>
        <div class="button-box">
            <button class="button" @click="invertEvent">反色处理</button>
            <button class="button" @click="grayEvent">灰度处理</button>
            <button class="button" @click="linerTransEvent">线性变换</button>
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
