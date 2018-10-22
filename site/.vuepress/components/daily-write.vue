<template>
  <article class="component">
    <div
      class="component__logo"
      flex="main:center">
      <daily-logo class="component__logo-component"/>
    </div>
    <div class="component__form">
      <h1>日报提交助手</h1>
      <div class="field">
        <label class="label">标题</label>
        <div class="control">
          <input
            v-model="form.title"
            class="input"
            type="text"
            placeholder="日报标题（可以留空）">
        </div>
        <p class="help">如果留空我们会人工处理标题</p>
      </div>
      <div class="field">
        <label class="label">链接</label>
        <div class="control">
          <input
            v-model="form.href"
            class="input"
            type="text"
            placeholder="http://">
        </div>
        <p class="help">多条请用英文逗号分隔</p>
      </div>
      <div class="field">
        <label class="label">
          介绍
        </label>
        <div class="control">
          <textarea
            v-model="form.note"
            class="textarea"
            placeholder="eg: 用眼神操作浏览网页，看演示就很酷（可以留空）"/>
        </div>
        <p class="help">
          建议通过简单的介绍说明推荐此链接的理由
        </p>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button
            class="button is-link"
            @click="handleSubmit">
            完成
          </button>
        </div>
      </div>
    </div>
    <!-- 模态框 -->
    <div
      class="modal"
      :class="{ 'is-active': modal.active }">
      <div
        class="modal-background"
        @click="modal.active = false"/>
      <div class="modal-card">
        <header class="modal-card-head">
          <p
            class="modal-card-title"
            style="margin-bottom: 0px;">
            感谢您的分享
          </p>
          <button
            class="delete"
            aria-label="close"
            @click="modal.active = false"/>
        </header>
        <section class="modal-card-body">
          <p>感谢您的分享，但是还有一个步骤需要您来完成：</p>
          <p>由于本站为由 <code>vue</code> + <code>markdown</code> 构建纯静态站点，所以您的分享需要以 issue 方式反馈给我们。</p>
          <p><b>填写内容已经复制到您的剪贴板</b>（其实也可以随便写），请点击下面的按钮跳转至 Github，将其复制进 issue 内容中。</p>
          <p><b>issue 标题请注明</b> <code>日报提交 - {{date}}</code>，工作日我们将在一小时内处理。</p>
          <p>
            <a
              class="button is-success"
              href="https://github.com/d2-projects/d2-awesome/issues/new"
              target="blank">Github - New Issue</a>
          </p>
          <p>如果没有自动复制成功，请手动复制以下内容：</p>
          <pre><code>{{markdown}}</code></pre>
        </section>
        <footer class="modal-card-foot">
        </footer>
      </div>
    </div>
  </article>
</template>

<script>
import copy from 'copy-to-clipboard'
export default {
  data () {
    return {
      form: {
        title: '',
        href: '',
        note: ''
      },
      date: '',
      modal: {
        active: false
      }
    }
  },
  computed: {
    markdown () {
      return `
**:hash: 标题** : ${this.form.title || '无'}

**:link: 链接** : [${this.form.href}](${this.form.href})

**:page_with_curl: 介绍** : ${this.form.note || '无'}
`.trim()
    }
  },
  methods: {
    handleSubmit () {
      // 简单地校验
      if (this.form.href === '') {
        alert('请至少填写链接地址')
        return
      }
      // https://github.com/sudodoki/copy-to-clipboard
      copy(this.markdown)
      // 计算日期
      const dt = new Date()
      let year = dt.getFullYear()
      let month = dt.getMonth() + 1
      let day = dt.getDate()
      month = month < 10 ? '0' + month : month
      day = day < 10 ? '0' + day : day
      this.date = `${year}年${month}月${day}日`
      // 打开模态框
      this.modal.active = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style/index.scss';
.component {
  .component__logo {
    padding: 4em 0;
    margin-bottom: 2em;
    background-color: $color__logo-daily--main;
    user-select: none;
    .component__logo-component {
      border: 1px solid #FFF;
    }
  }
  .component__form {
    max-width: 600px;
    margin: 0px auto;
    padding: 0px 1em;
    user-select: none;
    h1 {
      text-align: center;
    }
  }
}
</style>
