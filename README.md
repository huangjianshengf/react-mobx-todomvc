## React + MobX TodoMVC

```
npm install
npm start
open http://localhost:3000
```

* `create-react-app` 初始化项目
  * `npm install -g  create-react-app`  全局安装 create-react-app
  * `create-react-app react-mobx-todomvc` 初始化项目
  * `npm start` 启动项目
* 配置 mobx 
  * `npm  run eject `  显示 create-react-app 初始化 隐藏的配置文件
  * `npm install --save-dev babel-plugin-transform-decorators-legacy` 支持装饰器写法 mobx可以使用@写法
  * 修改package.json
    ````javascript
    "babel": {
      "presets": [
        "react-app"
      ],
      /* 新增 */
      "plugins": [
        "transform-decorators-legacy"
      ]
    },
    ````
  * 重新启动  `npm run start`

* 使用 mobx 注入 store
  * 使用 inject 注入 store
  * 使用 props 的方式 传递 store 
  * 区别 
    * 使用 inject 注入 store 相对 使用 props传递的方式 更加的方便快捷
    * 使用 inject 注入 store 的时候通过 ref的方式获取组件的实例的时候 拿到的是 Injector 而非真正的组件实例， 解决办法- 使用props 的方式传递


