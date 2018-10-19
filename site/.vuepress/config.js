const path = require('path')

// 拼接路径
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  base: '/d2-awesome/',
  head: [
    ['link', { rel: 'icon', href: `/logo/normal@2x.png` }]
  ],
  title: '前端资源精选',
  description: '人在江湖走 库多不压身',
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
