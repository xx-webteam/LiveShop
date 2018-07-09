module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '辛鑫科技',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '杭州辛鑫科技' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // },
    // 在自动生成的vandor文件中添加模块(只打包一次)，可以减少应用bundle的体积
    vandor:['axios','Vant'],
  },
  cache:true,
  
  plugins:[
    '~/plugins/vant.js',
    { src: '~/plugins/flexible', ssr: false},
    { src: '~/plugins/extent-flexible', ssr: false}  
  ],
  css:[
    '~/assets/style/globle.css',
    '~/assets/style/flexbox.scss',
    '~/assets/style/fontSize.scss',
    'vant/lib/vant-css/index.css'
  ]
}
