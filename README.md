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

多入口模块主页面在module/m1,m2中
## 动态路由配置
HelloWorld2.vue中的created方法
## favicon设置
可以直接放根目录也可以放到webpack.dev.conf.js中定义，不过要注意插件顺序
```
new HtmlWebpackPlugin({//要放在主页模板生成前面，不然页面无法正常展示
      favicon: './static/favicon.ico'
    }),
```
