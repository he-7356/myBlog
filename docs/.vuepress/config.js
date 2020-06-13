module.exports = {
  base: '/myBlog/',
  title: '个人主页',
  head: [
    ['link', { rel: 'icon', href: '/vue-logo.png' }],
],
  description: 'Vuepress blog demo',
 themeConfig: {
      // theme: 'reco',//初始化主题
      logo: '/logo.jpg',

        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/he-7356/myBlog.git',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
          { text: "首页", link: "/" },
          { text: "指南", link: "/guide/" },

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
      {
        title: 'vue',
        collapsable: true,

        children: [
          { title: 'vue的基础概念', path:'/blog/vue/vue.md'},
          { title: '遇见面试 Vuex原理解析', path:'/blog/vue/vue1.md'},

        ]

      },
      {
        title:"web知识",
        collapsable:true,
        children:[
      { title: '跨域问题', path:'/blog/web/web.md'},
      { title: 'promise的原理', path:'/blog/web/web1.md'},
      { title: 'AJAX工作原理及其优缺点', path:'/blog/web/web2.md'},

    ]
      } ,    
       {
        title:"git使用技巧",
        collapsable:true,
        children:[
      { title: 'git基本介绍', path:'/blog/git/git.md'},
      { title: 'git的常用命令', path:'/blog/git/git3.md'},

      { title: 'git与SVN的区别', path:'/blog/git/git1.md'},
    ]
      }

    ]

  
  
  

    },
    lastUpdated: 'Last Updated',
    serviceWorker: true,
    displayAllHeaders: true, // 默认值：false
    sidebarDepth:5,




}
