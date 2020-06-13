module.exports = {
  base: '/myBlog/',
  title: '个人主页',
  head: [
    ['link', { rel: 'icon', href: '/vue-logo.png' }],
],
  description: 'Vuepress blog demo',
 themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/he-7356/myBlog.git',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
              { text: '博文',
              items: [
                { text: 'FirstBlog', link: '/blog/FirstBlog.md' },
                { text: 'vue', link: '/blog/vue/vue.md' },
                { text: 'Web', link: '/blog/web/web.md' }
              ] 
            },
            
            // { text: 'FirstBlog', link: '/blog/FirstBlog.md' }
        ],
sidebar: [
      ['/', '首页'],
      ['/blog/FirstBlog.md', '我的第一篇博客'],
      ['/blog/vue/vue.md', '我的vue博客'],
      ['/blog/web/web.md', '我的web博客'],

    ]
    },
    lastUpdated: 'Last Updated',
    serviceWorker: true,
 



}
