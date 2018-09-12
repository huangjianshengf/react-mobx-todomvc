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


