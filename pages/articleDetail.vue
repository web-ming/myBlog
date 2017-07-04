<template>
    <div>
        detail
                    <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
                <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaa</div>
    </div>

</template>

<script>
    import service from '../common/httpUtil'
    export default {
        fetch ({store}) {
            store.dispatch('setTitle','detail')
            service.get('/api/router/rest.do?method=api.com.home.getStations&version=1.0.0&firstChannel=TOUCH&secondChannel=LVMM').then(res => {
                console.log('detail');
            }).catch(e => {
                console.log(e);
            })
        },
        data: () => {
            return { name: 'world' }
        },
        methods: {
            goNextPage() {
                this.$router.push('nextPage')
            }
        }
    }
</script>