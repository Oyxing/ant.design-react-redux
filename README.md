# ant.design-react-redux

## 安装
    $ npm install

## 运行
    $ npm start

## 打包
    $ npm build 

## 使用 antd#
通过 npm 安装 antd 和 babel-plugin-import 。babel-plugin-import 是用来按需加载 antd 的脚本和样式的，详见 repo 。

    $ npm install antd babel-plugin-import --save 编辑 .webpackrc，使 babel-plugin-import 插件生效。

    {
     "extraBabelPlugins": [
       ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
      ]
    }
