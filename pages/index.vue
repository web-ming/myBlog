
<template>
    <div>
        <h1 @click="goArticleDetail">Hello {{ name }}!</h1>
        <nuxt-link to="articleDetail">
            <div> aaaabbbb</div>
        </nuxt-link>
    </div>
</template>



<script>
    import service from '../common/httpUtil'
    export default {
        fetch ({store}) {
            store.dispatch('setTitle','myBlog')
            service.get('/api/router/rest.do?method=api.com.home.getStations&version=1.0.0&firstChannel=TOUCH&secondChannel=LVMM').then(res => {
                console.log('index')
            }).catch(e => {
                console.log(e);
            })
        },
        data: () => {
            return { name: 'world' }
        },
        methods: {
            goArticleDetail() {
                this.$router.push('articleDetail')
            }
        },
        computed: {
            
        }
    }
</script>
