module.exports =  {
    loading: {color: '#d03375'},
    head: {
        meta: [{
            charset: 'UTF-8',
        }, {
            name: 'viewport',
            content: 'width=device-width, init-scale=1.0, user-scalable=no'
        }],
        title: 'my blog'
    },
    dev: (process.env.NODE_ENV !== 'production'),
    css: [
        '~assets/css/base.scss'
    ],
    build: {
        vendor: [
            'axios'
        ]
    },
    plugins: [
        {src: '~plugins/iScroll.js',ssr: false}
    ],
    transition: {
        name: 'showlist',
        mode: 'out-in',
        beforeEnter(el){
            
        }
    }

}