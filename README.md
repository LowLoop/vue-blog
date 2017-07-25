# vue-blog
# 用到了 vue-router, axios

## 启动命令
> npm run dev 然后访问 localhost:3000 (这是开发环境).端口号可以在 config/index.js里修改.
## 打包命令
> npm run build 然后将生成的dist目录随便扔到一个服务器里去访问就可以了(express,nginx之类的).
## 后端允许跨域访问
> 注意,要在后端服务器配置跨域.否则数据方面的请求会失败.
> express的配置方法可以访问 https://github.com/LowLoop/node-express-blog
里面的app.js文件(里面有注释.Ctrl+F 搜索跨域)
设置允许跨域访问的方法不止一种.
其它的方法可自行搜索.
> 顺便分享个fan qiang的链接
http://www.tianyaseo.com/post-183.html
找里面分享的hosts文件.替换你本机.然后刷新dns缓存.就可以fan qiang 了.
