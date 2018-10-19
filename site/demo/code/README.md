# 语法测试

## 模板语法

### 插值

::: v-pre
`{{ 1 + 1 }}`
:::

{{ 1 + 1 }}

### 指令

::: v-pre
`<span v-for="n in 3">{{n}}</span>`
:::

<span v-for="n in 3">{{n}}</span>

### 访问网站以及页面的数据

::: v-pre
`{{ $page }}`
:::

<pre style="color: #FFF;">{{ $page }}</pre>

### Escaping

::: v-pre
`{{ }}`
:::