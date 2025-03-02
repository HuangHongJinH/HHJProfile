# 黄泓晋个人网站

这是一个使用 React 和 Material-UI 构建的个人网站，展示了黄泓晋的个人简历、项目经历和专业技能。

## 功能特点

- 响应式设计，适配各种设备屏幕
- 暗色/亮色主题切换
- 平滑滚动导航
- 动画效果增强用户体验
- 模块化组件结构

## 技术栈

- React 18
- Material-UI (MUI) 5
- Framer Motion (动画库)
- React Scroll (平滑滚动)

## 安装与运行

### 前提条件

- Node.js (推荐 v14.0.0 或更高版本)
- npm (推荐 v6.0.0 或更高版本)

### 安装步骤

1. 克隆仓库或下载源代码

```bash
git clone <仓库地址>
cd myProfile
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm start
```

应用将在开发模式下运行，访问 [http://localhost:3000](http://localhost:3000) 可以在浏览器中查看。

### 构建生产版本

```bash
npm run build
```

这将在 `build` 文件夹中生成应用的生产版本。

## 项目结构

```
myProfile/
├── public/                 # 静态资源
│   ├── index.html          # HTML 模板
│   └── manifest.json       # Web 应用清单
├── src/                    # 源代码
│   ├── components/         # React 组件
│   │   ├── Header.js       # 导航栏组件
│   │   ├── Hero.js         # 首屏展示组件
│   │   ├── About.js        # 关于我组件
│   │   ├── Education.js    # 教育背景组件
│   │   ├── Experience.js   # 实习经历组件
│   │   ├── Projects.js     # 项目经历组件
│   │   ├── Skills.js       # 专业技能组件
│   │   └── Footer.js       # 页脚组件
│   ├── App.js              # 应用主组件
│   ├── App.css             # 应用样式
│   ├── index.js            # 入口文件
│   └── index.css           # 全局样式
└── package.json            # 项目配置和依赖
```

## 自定义

如需修改个人信息，可以编辑相应组件中的数据：

- 基本信息：修改 `Hero.js` 和 `About.js`
- 教育背景：修改 `Education.js`
- 实习经历：修改 `Experience.js`
- 项目经历：修改 `Projects.js`
- 专业技能：修改 `Skills.js`

## 许可

版权所有 © 2024 黄泓晋 