#vue
跨域问题，谁限制的跨域，怎么解决

1.浏览器的同源策略导致了跨域

2.用于隔离潜在恶意文件的重要安全机制

3.[jsonp ，允许 script 加载第三方资源]segmentfault.com/a/11...

4.nginx 反向代理(nginx 服务内部配置 Access-Control-Allow-Origin *)

5.cors 前后端协作设置请求头部，Access-Control-Allow-Origin 等头部信息

6.iframe 嵌套通讯，postmessage
