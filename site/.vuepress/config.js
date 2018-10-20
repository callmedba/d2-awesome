const path = require('path')

// 拼接路径
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  base: '/d2-awesome/',
  head: [
    ['link', { rel: 'icon', href: '/resource/logo/normal@2x.png' }],
    ['link', { rel: 'stylesheet', href: '/library/flex.css' }],
    ['link', { rel: 'stylesheet', href: '/library/bulma.min.css' }],
    ['link', { rel: 'stylesheet', href: '/library/public.css' }],
    ['script', { src: '/library/fontawesome-5.3.1.js' }]
  ],
  title: 'D2制造',
  description: '为了创造者',
  themeConfig: {
    // 项目仓库地址
    repo: 'd2-projects/d2-awesome',
    // 文档不是放在仓库的根目录下
    docsDir: 'site',
    // 菜单
    nav: [
      {
        text: '测试',
        items: [
          { text: '语法测试', link: '/demo/code/' },
          { text: '组件测试', link: '/demo/components/' }
        ]
      }
    ]
  }
}
