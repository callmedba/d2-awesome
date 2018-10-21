const path = require('path')

// 拼接路径
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  base: '/d2-awesome/',
  head: [
    ['meta', { name: 'keywords', content: 'awesome,前端插件,前端开发,vue插件,vue组件,设计资源,程序员网址导航,设计师网址导航' }],
    ['link', { rel: 'icon', href: '/resource/logo/normal@2x.png' }],
    ['link', { rel: 'stylesheet', href: '/library/flex.css' }],
    ['link', { rel: 'stylesheet', href: '/library/bulma.min.css' }],
    ['link', { rel: 'stylesheet', href: '/library/hint.min.css' }],
    ['link', { rel: 'stylesheet', href: '/library/public.css' }],
    ['script', {}, 'var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?4f96a6ce565904fcb3257b1d14397f55";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();']
    // ['script', { src: '/library/fontawesome-5.3.1.js' }]
  ],
  title: 'D2收藏库',
  description: '收集开发和设计相关资源，方便每位创造者。',
  themeConfig: {
    // 文档不是放在仓库的根目录下
    docsDir: 'site',
    // 菜单
    nav: [
      { text: '日报', link: '/daily/' },
      { text: '资源库', link: '/awesome/' }
    ]
  }
}
