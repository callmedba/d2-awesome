const path = require('path')

// 拼接路径
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  head: [
    ['meta', { name: 'keywords', content: 'awesome,前端插件,前端开发,vue插件,vue组件,设计资源,程序员网址导航,设计师网址导航' }],
    //
    ['meta', { itemprop: 'name', content: 'D2 资源库' }],
    ['meta', { itemprop: 'image', content: '/resource/logo/normal.png' }],
    ['meta', { name: 'description', itemprop: 'description', content: '收集开发和设计领域相关资源，服务每位创造行业工作者' }],
    // 百度站长平台验证
    ['meta', { name: 'baidu-site-verification', content: 'tP5wR69jmE' }],
    //
    ['link', { rel: 'icon', href: '/resource/logo/normal.png' }],
    ['link', { rel: 'stylesheet', href: '/library/flex.css' }],
    ['link', { rel: 'stylesheet', href: '/library/bulma.min.css' }],
    ['link', { rel: 'stylesheet', href: '/library/hint.min.css' }],
    ['link', { rel: 'stylesheet', href: '/library/public.css' }],
    ['script', { src: '/library/qrcode.min.js' }],
    ['script', {}, 'var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?fec739493bdcbae03ff2154ede1ed6c7";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();'],
    ['script', { src: '/library/fontawesome-5.3.1.js' }]
  ],
  title: 'D2 资源库',
  description: '收集开发和设计领域相关资源，服务每位创造行业工作者',
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
