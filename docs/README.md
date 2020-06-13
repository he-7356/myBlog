---
    home: true
    # heroImage: /vue-logo.png
    actionText: 快速上手 →
    actionLink: /guide/
    features:
    - title: 简洁至上
      details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
    - title: Vue驱动
      details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
    - title: 高性能
      details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
---



::: tip 前言


如今的计算机行业发展愈来越快，<br/>
在此建立这个博客记录平时会遇到的一些问题 <br/>
前言不知道说些什么，就来首诗开场吧<br/>

我打江南走过 <br/>
那等在季节里的容颜如莲花的开落 <br/>
东风不来，三月的柳絮不飞 <br/>

你底心如小小寂寞的城 <br/>
恰若青石的街道向晚 <br/>
而你依然在我身边 <br/>

春梦无痕，秋夜缠绵 <br/>
如歌岁月，似水流年 <br/>

跫音不响，三月的春帷不揭 <br/>
你底心是小小的窗扉紧掩 <br/>
我达达的马蹄是美丽的错误<br/>

我不是归人，是个过客……<br/>


  

:::


<script>
  
</script>

<style>
.home .content__default:not(.custom) {
  max-width: 100% !important;
  margin: 0  !important;
  padding: 0 !important;
}
.home .hero h1 {
    display: none;
}
.home img {
   transform: scale(0.8,0.8) !important;
   transition: all 1s!important;
}
.home img:hover {
   transform: scale(1)!important;
   transition:all 2s !important;
}
/* 阻止描述冒泡 */
.home .hero .description{
    pointer-events: none;
    cursor: default;
    opacity: 0.6;
}
.home .feature p {
    color: #476582 !important;
}
.home .hero .description {
    color: #476582 !important;
}
.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    min-height: 10vh;
    background: transparent none repeat scroll!important;
    position: fixed;
    top: -120%;
    left: -1%;
}

</style>