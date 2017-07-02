<template>

        <div class="menu" :class='{openAside: mobileAsideShow}'>
            <div>
                <img src='~assets/image/logo.png' />
                <a href=''>注册</a>
                <a href=''>登录</a>
            </div>

            <nav>
                <a href=''>首页</a>
                <a href=''>首页</a>
                <a href=''>首页</a>
                <a href=''>首页</a>
                <a href=''>首页</a>
                <a href=''>首页</a>
                <a href=''>首页</a>
            </nav>
        </div>

</template>

<script>
    export default{
        name: 'mobileAside',
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

<style scoped lang="scss">
    .ui-mask{
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0);
        z-index: 3;
        transform: translateX(-100%);
        transition: transform .5s linear;
    }
    .menu{
        width: 72%;
        height: 100%;
        position: fixed;
        left:0;
        top: 0;
        z-index: 4;
        background-color: #fff;
        transform: translateX(-100%);
        transition: transform .5s linear;
    }

    img{
        width: 35%;
        margin: 0 auto
    }
    nav a {
        display: block;
        color: #000;
        height: 45px;
        line-height: 45px;
        position: relative;
        text-indent: 50px;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        &:before{
            content: "";
            position: absolute;
            height: 20px;
            width: 20px;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            background: url(~assets/image/logo.png) 0px center no-repeat;
            background-size: contain;
        }
    }
    .openAside{
        transform: translateX(0) !important;
        transition: transform .5s linear !important;
    }
</style>