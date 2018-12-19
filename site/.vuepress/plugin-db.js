const fs = require('fs')


const header = [ 'name', 'note', 'url', 'date', 'title', 'path' ].map(e => `"${e}"`).join(',')
fs.writeFile('db.csv', header + '\n', function (error) {
  if (error) { console.log(error) }
})

module.exports = {
  extendPageData ($page) {
    const {
      _filePath,           // 源文件的绝对路径
      _computed,           // 在构建期访问全局的计算属性，如：_computed.$localePath.
      _content,            // 源文件的原始内容字符串
      _strippedContent,    // 源文件剔除掉 frontmatter 的内容字符串
      key,                 // 页面唯一的 hash key
      frontmatter,         // 页面的 frontmatter 对象
      regularPath,         // 当前页面遵循文件层次结构的默认链接
      path,                // 当前页面的实际链接（在 permalink 不存在时，使用 regularPath ）
    } = $page

    // 如果是日报，进行如下处理
    if (RegExp('/daily/post').test(_filePath)) {
      const {
        date,
        title,
        list
      } = frontmatter
      let rows = []
      list.forEach(group => {
        group.list.forEach(item => {
          rows.push([
            item.name,
            item.note || '',
            item.url,
            date,
            title,
            path
          ].map(e => `"${e}"`).join(','))
        })
      })
      fs.appendFile('db.csv', rows.join('\n'), function (error) {
        if (error) return false
        console.log('日报资料写入成功')
      })
    }
  }
}
