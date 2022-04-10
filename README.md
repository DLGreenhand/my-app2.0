## 介绍
0.本项目是基于阿里ice框架的SPA web应用，其中的组件使用Fusion组件库，组件内容和组件的状态、样式等随机生成。

1.目录结构如下
```
├── .ice/             // 运行时生成的临时目录
├── build/            // 构建产物目录
├── mock/             // 本地模拟数据
│ ├── index.js
├── public/           // 静态资源
│ ├── index.html      // 应用入口 HTML
│ └── favicon.png     // Favicon
├── src/              // 源码
│ ├── components/     // 自定义业务组件
│ ├── layouts/        // 布局组件
│ ├── pages/          // 路由页面组件
│ ├── models/         // 应用级数据状态
│ ├── global.scss     // 全局样式
│ ├── config.ts       // 运行时配置
│ ├── routes.ts       // 路由配置
│ └── app.tsx          // 应用入口
├── build.json        // 工程配置
├── package.json
└── tsconfig.json
```
2.业务组件表
```plain
btn按钮
divider分隔符
Grid栅格
Icon图标
Menubtn菜单按钮
Text(Paragraph)文本
SplitBtn分隔按钮
Breadcrumb面包屑
Pagination分页器
Step步骤
Tab选项卡
Checkbox复选按钮
Input输入框
NumPicker数字输入框
Radio单选框
Rating评分
Search搜索
Switch开关
Transfer穿梭框
Upload上传组件
Avatar头像框
Bagde徽标
Card卡片
Collapse折叠框
List列表
Menu菜单
Progress进度指示器
```


## 环境
1.在VSCode中安装icework插件，并以文件夹的方式打开根目录
2.安装node.js(版本7.6.0以上)

## 使用
1.在根目录下运行以下命令配置运行环境
```shell
cnpm install
```
2.在根目录下运行以下命令开启SPA web应用
```shell
cnpm start
```
3.在浏览器页面刷新一次可生成新的组件
