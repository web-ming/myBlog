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
    dev: true,
    css: [
        '~assets/css/base.scss'
    ],
    build: {
        // extend(webpackConfig,{dev, isClient, isServer }){
        //     webpackConfig.module.rules.push({
        //         test: /\.scss$/,
        //         loader: 'vue-style-loader!css-loader!sass-loader'
        //     })
        // },
        vendor: [
            'axios'
        ]
    }

}