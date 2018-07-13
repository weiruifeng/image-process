<template>
    <transition name="fade">
        <div class="message-box fixed-all" v-if="show">
            <div class="message" :class="{'error-box': errorFlag}">{{text}}</div>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
    @import "../../scss/_mixin.scss";
    .message-box {
        z-index: 999;
        .message {
            background: rgba(0,0,0,0.7);
            border-radius: 28px;
            min-height: 34px;
            line-height: 34px;
            font-size: 12px;
            letter-spacing: 0.2px;
            color: $background-white;
            padding: 0 28px;
            position: absolute;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            &.error-box {
                background: #EC372B;
            }
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>

<script>
    export default {
        methods: {
            hide() {
                this.show = false;
            }
        }
    };
</script>
