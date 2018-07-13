<template>
    <section class="homepage">
        <div class="button-box-flex">
            <div class="input-upload-box">
                <input type="file" id="id" @change="handleFileChange" ref="inputer"/>
                <label for="id" class="ensure-button">选择上传文件</label>
            </div>
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
