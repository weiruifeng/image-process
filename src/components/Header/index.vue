<template>
    <section class="header">
        <div class="title" @click="goHome">数字图像处理</div>
    </section>
</template>
<style lang="scss" scoped>
    @import "../../scss/_mixin.scss";
    .header {
        flex: none;
        background: #FFFFFF;
        @include heightCenter(64px);
        display: flex;
        justify-content: space-between;
        width: 100%;
        .title {
            padding-left: 20px;
            font-size: 20px;
            letter-spacing: 0.40px;
            color: #4E5D6B;
            cursor: pointer;
        }
    }
</style>
<script>
    export default {
        methods: {
            goHome() {
                this.$router.push('/homepage');
            }
        }
    };
</script>
