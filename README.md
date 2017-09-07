# webpack入门教程
话不多说，直接上干活，webpack具体描述请看https://doc.webpack-china.org/concepts (中文文档，英文文档请看)https://webpack.js.org/
#### 安装前提
在开始之前，请确保安装了 Node.js 的最新版本。使用 Node.js 最新的长期支持版本(LTS - Long Term Support)，是理想的起步。
#### 安装命令
npm install --save-dev webpack

npm install --save-dev webpack@version

### 本教程将分小节教学，每一小节成为一demo

#### demo1
进入demo1目录下

执行npm install or cnpm install(淘宝镜像须自行提前进行配置，具体配置请移步至http://npm.taobao.org/)

webpack安装完成后，执行npm run build 命令，控制台会有输出。webpack配置成功

查看webpack.config.js，entry是入口文件，这里指向src/app.js。output输出目录，这里指向dist。

#### demo2

在demo2中我们在app.js引入了lodash插件，执行npm install 进行安装（自行安装请执行，npm install --save lodash）

执行npm run build 我们会看到app.bundle.js中会融合lodash插件

#### demo3

在demo3中，引入css-loader,style-loader,file-loader。在rules中配置好loader。webpack会根据正则表达式寻找文件，将其提供给指定的loader

#### demo4

在demo4中，我在html中引入了两个js，webpack配置中做了入口分离，动态输出js文件，生成对应js文件，执行npm run build 来进行构建

#### demo5

在demo5中，引入了html-webpack-plugin插件，自动生成html文件，这样就不需要单独进行html文件配置了。clean-webpack-plugin插件，每次构建自动清空指定文件夹

在webpack.config.js中引入了devtool:'inline-source-map',用来追踪错误

#### demo6

在demo6中，我们使用webpack-dev-server插件，来启动本地开发服务，实现修改代码刷新页面，并在package.json里配置npm命令。使用npm start来启动本地服务，实现修改代码刷新浏览器。

模块热替换，是webpack最有用的功能之一。基于webpack-dev-server,具体配置看webpack.config.js。能实改变代码，对应模块实现局部刷新，不需要重载页面。

npm start 启动webpack服务，修改styles.css来尝试局部刷新体验。基于style-loader,css-loader。如果有其他文件，可以配置相应loader来实现模块热替换。例如vue（vue-loader），react(react-hot-loader)等

#### demo7

在demo7中，我们来构建生产环境与开发环境。来实现不同的npm命令执行对应的webpack构建。基于webpack的webpack-merge插件。webpack.common.js,公共的webpack配置文件，webpack.dev与webpack.prod共用webpack.common。执行npm start 来尝试开发环境的配置。执行npm build 来尝试生产环境的配置。

在webpack.prod.js中，我们使用了代码分离，CommonsChunkPlugin插件，防止生成重复依赖，在print.js与app.js中，都引入了lodash，使用此插件，可以提出一个公共js。

#### demo8

在demo8中，我们实现了webpack动态导入功能。异步函数来实现动态导入功能

#### demo9

在demo9中，我们实现了按需加载，点击按钮加载print.js。（基于代码分离）