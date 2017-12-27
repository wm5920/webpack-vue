# webpack-vue学习demo
## 运行
npm run dev
## 打包
npm run build
## 多入口文件配置
主要修改文件，详细见注释“单、多模块”

webpack.base.conf.js

webpack.dev.conf.js

webpack.prod.conf.js

多入口模块主页面在module/m1,m2中,注意打包的时候是没有module文件夹的
生成的html也是放到跟目录的，如果要引用static的资源注意路径
访问url为
```
http://localhost:8080/+HtmlWebpackPlugin.filename
```
如
http://localhost:8080/m1-index.html
## 动态路由配置
HelloWorld2.vue中的created方法
## favicon设置
webpack.dev.conf.js/webpack.prod.conf.js中定义，要注意插件顺序
```
new HtmlWebpackPlugin({//要放在主页模板生成前面，不然页面无法正常展示
      favicon: 'favicon.ico'
    }),
```
