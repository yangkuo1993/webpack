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

在demo4中，我们在html中引入了两个js，webpack配置中做了入口分离，动态输出js文件，生成对应js文件，执行npm run build 来进行构建