module.exports = {
  base: '/d2-awesome/',
  head: [
    ['link', { rel: 'icon', href: `/logo@2x.png` }]
  ],
  title: 'D2 AWESOME',
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
          { text: '测试', link: '/demo/1/' }
        ]
      }
    ]
  }
}
