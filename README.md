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
注意require不能直接用变量，不过可以通过固定路径部分+变量，如'src/views'+path,达到效果
## favicon设置
webpack.dev.conf.js/webpack.prod.conf.js中定义，要注意插件顺序
```
new HtmlWebpackPlugin({//要放在主页模板生成前面，不然页面无法正常展示
      favicon: 'favicon.ico'
    }),
```
## 服务器访问路径设置
比如打包后dist文件存放到服务器/static/下，那前端该怎样调整才能让开发和生产表现一致呢？
### 1 webpack.base.conf.js中添加别名
```
'static':path.resolve(__dirname, '../static'),
```
增加这一行代码,对于static文件下的资源页面通过~static引用,对于src/assets
中的资源，通过@别名访问
如
```
<img src="@/assets/logo.png"/>
<img src="~static/logo.png"/>
```
### 2 在config/index.js中修改
```
assetsPublicPath: './',
```


