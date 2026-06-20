# aoye - Vue 个人主页

这是使用 Vue 3 + Vite 重构的个人主页项目。

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **Composition API** - 使用 `<script setup>` 语法

## 项目结构

```
vue-app/
├── index.html          # 入口 HTML
├── package.json        # 项目配置
├── vite.config.js      # Vite 配置
├── public/             # 静态资源
│   ├── bg.jpg          # 背景图片
│   └── bot-avatar.jpg  # Bot 头像
└── src/
    ├── main.js         # 应用入口
    └── App.vue         # 主组件（包含所有页面逻辑和样式）
```

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist/` 目录。

### 预览生产构建

```bash
npm run preview
```

## 功能特性

- 🎨 毛玻璃效果设计
- 📱 响应式布局
- ✨ 滚动显现动画
- 🔄 数据驱动的组件化设计
- 📋 可复制的 QQ 号码功能

## 与原版的区别

原版是纯 HTML/CSS/JS 实现，此版本使用 Vue 3 进行了重构：

1. **组件化**: 将数据提取为响应式变量，使用 v-for 渲染列表
2. **状态管理**: 使用 Vue 的 ref 和 reactive 管理状态
3. **交互优化**: QQ 号码复制功能使用 Vue 的事件处理
4. **代码组织**: 模板、脚本、样式分离，更易于维护

## 部署

将 `dist/` 目录的内容部署到任何静态网站托管服务即可：

- GitHub Pages
- Vercel
- Netlify
- 或任何支持静态文件的 Web 服务器
