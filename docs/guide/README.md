
## 入门

先决条件

VuePress要求Node.js > = 8.6。

本部分将帮助您从头开始构建基本的VuePress文档站点。如果您已经有一个现有项目，并且希望将文档保留在项目中，请从步骤3开始。

创建并更改到新目录

mkdir vuepress-starter && cd vuepress-starter
用您首选的软件包管理器初始化

yarn init # npm init
在本地安装VuePress

不再建议全局安装VuePress。

yarn add -D vuepress # npm install -D vuepress
警告

当前，当将VuePress安装到具有webpack 3.x作为依赖项的现有项目中时，我们建议使用Yarn而不是npm，因为在这种情况下npm无法生成正确的依赖项树。

创建您的第一个文档

mkdir docs && echo '# Hello VuePress' > docs/README.md
添加一些脚本来package.json

此步骤是可选的，但强烈建议这样做，本文档的其余部分将假定已添加这些脚本。

{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
在本地服务器中服务文档站点

yarn docs:dev # npm run docs:dev
VuePress将在http：// localhost：8080启动热重装开发服务器。

到目前为止，您应该已经拥有一个基本但功能正常的VuePress文档站点。接下来，了解VuePress推荐的目录结构以及VuePress中的配置基础。

熟悉上述概念后，请了解如何使用静态资产，Markdown扩展和vue组件丰富您的内容。

并且，当您的文档站点开始成形时，请查看多语言支持和指南，以将您的站点部署到流行的服务