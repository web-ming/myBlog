
<template>
    <div class="app">
        <mobile-aside></mobile-aside>
        <div class="app-main" :class='{open: mobileAsideShow}'>
            <mobilehead></mobilehead>
            <div class="main-part"></div>
                <nuxt></nuxt>
            </div>
            <div class="ui-mask" v-show='mobileAsideShow' @click='hideMobileAside'></div>
        </div>
    </div>
</template>

<script>
    import {mobilehead,mobileAside} from '../components/mobile/index';
    export default {
        name: 'app',
        components: {
            mobilehead,
            mobileAside
        },
        computed: {
            mobileAsideShow(){
                return this.$store.state.mobileAsideShow;

            } 
        },
        methods: {
            hideMobileAside(){
                this.$store.state.mobileAsideShow = false;
            }
        }
    }
</script>

<style scoped>
    .app-main{
        transform: translateX(0);
        transition: transform .5s linear;
    }
    .main-part{
        padding-top: 45px
    }
    .open{
        transform: translateX(72%);
        transition: transform .5s linear;
    }
    .ui-mask{
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.1);
        z-index: 3;
        content: '';
    }
</style>
