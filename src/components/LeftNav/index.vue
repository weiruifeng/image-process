<template>
    <section class="left-nav">
        <template  v-for="list in routerList">
            <router-link
                    class="list-title" tag="div"
                    active-class="left-active" :to="list.path">
                {{list.name}}
            </router-link>
        </template>
    </section>
</template>
<style lang="scss" scoped>
    @import "../../scss/_mixin.scss";
    .left-nav {
        flex: none;
        width: 150px;
        overflow-y: auto;
        background: #FFFFFF;
        border-right: 1px solid rgba(0, 0, 0, .1);
        padding: 30px;
        .list-title {
            @include heightCenter(32px);
            font-size: 14px;
            color: rgba(0,0,0,0.70);
            letter-spacing: 0.28px;
            cursor: pointer;
            padding-left: 15px;
            border-left: 4px solid transparent;
            margin-bottom: 10px;
            &.left-active {
                border-left: 4px solid $color-emphasize;
                color:$color-emphasize;

            }
        }
    }
</style>
<script>
    import { routerArr } from '../../route/routerConfig';
    export default {
        data() {
            return {
                routerList: routerArr
            };
        }
    };
</script>

