<template>
    <section class="main-box">
        <headerComponent></headerComponent>
        <section class="main">
            <left-nav></left-nav>
            <div class="right" id="main">
                <transition>
                    <router-view></router-view>
                </transition>
            </div>
        </section>
    </section>
</template>
<style scoped lang="scss">
    @import "../../scss/_mixin.scss";
    .main-box {
        background: #f2f3f4;
        @include size(100%, 100%);
        display: flex;
        flex-direction: column;
        .main {
            flex: auto;
            display: flex;
            font-size: 14px;
            background-color: $background-white;
            position:relative;
            margin: 28px 30px 0 30px;
            overflow:hidden;
            height:92%;
            .right {
                flex: auto;
                padding: 20px;
                position: relative;
                overflow-y: auto;
            }
        }
    }
</style>
<script src="./index.js">
</script>
