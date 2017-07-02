<template>
    <header>
        <span class="l" @click='popMobileAside'><i><em></em></i></span>
        <h1>{{mobileTitle}}</h1>
        <span class="r"></span>
    </header>
</template>

<script>
    export default {
        name: 'mobilehead',
        data(){
            return{

            }
        },
        computed: {
            mobileTitle(){
                return this.$store.state.mobileTitle
            }
        },
        methods: {
            popMobileAside(){
                this.$store.state.mobileAsideShow = true;
            }
        }
    }
</script>

<style scoped lang="scss">
    header{
        height: 45px;
        line-height: 45px;
        text-align: center;
        background-color: #fff;
        position: fixed;
        z-index: 2;
        width: 100%
    }
    .l{
        position: absolute;
        left: 0;
        top: 0;
        width: 45px;
        height: 45px;
    }
    .l i{
        position: relative;
        width: 100%;
        height: 100%;
        display: inline-block
    }
    .l i em{
        position: absolute;
        left: 13px;
        top: 22px;
        border-top: 2px solid #aaa;
        width: 19px
    }
    .l i em:before{
        position: absolute;
        content: '';
        left: 0;
        top: -9px;
        border-top: 2px solid #aaa;
        width: 19px
    }
    .l i em:after{
        position: absolute;
        content: '';
        left: 0;
        top: 4px;
        border-top: 2px solid #aaa;
        width: 19px
    }
    h1{
        text-align: center;
        color: #000;
        font-weight: normal;
        font-size: 19px
    }
</style>