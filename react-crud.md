<aside>
📌

**时限：** 30 分钟

**技术栈：** React 19、Vite、React Router、Context API、react-hook-form、Zod、axios（模拟）

**目标：** 实现一个具备 CRUD（Create / Read / Update / Delete）能力的待办清单应用

</aside>

## 概述

你将在名为 `crud-app` 的项目中构建待办清单应用。

- 先完成 **项目初始化**（不计入 30 分钟时限）
- 然后在 30 分钟时限内按顺序完成 **3 个编码任务**
- 重点关注：功能正确性、代码可读性、合理的组件结构
- 样式为可选项：简洁布局即可

---

## 项目初始化要求（不计时）

### 1) 创建项目结构与配置文件

创建 `crud-app` 文件夹及以下项目树中的所有文件。起步项目至少应包含：

- `package.json`（必需）
- `index.html`（Vite 入口 HTML，位于项目根目录）
- `vite.config.js`（Vite 配置，使用 `@vitejs/plugin-react`）
- `src/main.jsx`（React 入口文件）
- `src/App.jsx`（根组件，配置路由至 `TasksPage`）
- `pages/`、`components/`、`hooks/`、`services/`、`context/`、`data/`、`styles/` 下的空文件或占位文件
- `README.md`（安装与运行说明）

#### 必需的 `package.json`

```json
{
  "name": "crud-app",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite --port 8080",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext .js,.jsx"
  },
  "dependencies": {
    "axios": "^1.7.0",
    "clsx": "^2.1.1",
    "chalk-pro": "^7.0.4",
    "date-fns": "^4.0.0",
    "lodash": "^4.17.21",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-error-boundary": "^5.0.0",
    "react-hook-form": "^7.56.0",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.0.0",
    "react-spinners": "^0.15.0",
    "react-toastify": "^11.0.5",
    "uuid": "^11.0.0",
    "zod": "^4.0.0",
    "zustand": "^5.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.0",
    "cross-env": "^7.0.3",
    "eslint": "^9.0.0",
    "prettier": "^3.5.0",
    "vite": "^6.0.0"
  }
}
```

#### 脚手架方式（推荐）

```bash
npm create vite@latest crud-app -- --template react
# 然后将 package.json 替换为上方内容，补充所需文件夹结构，并安装依赖
```

> 起步版 `App.jsx` 应渲染占位页面（例如 `Todo App — Ready`），确保应用可无报错启动。
>

### 2) 展示项目目录结构（提交材料之一）

**Windows（PowerShell）：**

```powershell
cd crud-app
tree /F
```

**macOS / Linux：**

```bash
cd crud-app
find . -not -path '*/node_modules/*' -not -path '*/.git/*' | head -80
# 或：npx tree-cli -I 'node_modules'
```

#### 预期结构

```
crud-app/
│
├── package.json
├── index.html
├── vite.config.js
│
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   │
│   ├── pages/
│   │   └── TasksPage.jsx
│   │
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── hooks/
│   │   └── useTasks.js
│   │
│   ├── services/
│   │   └── taskService.js
│   │
│   ├── context/
│   │   └── TaskContext.jsx
│   │
│   ├── data/
│   │   └── mockTasks.js
│   │
│   └── styles/
│       └── app.css
│
└── README.md
```

### 3) 演示应用成功启动（提交材料之一）

```bash
cd crud-app
npm install
npm run dev
```

通过标准：

- `npm install` 无致命错误地完成
- `npm run dev` 启动成功（例如显示 `VITE v6.x.x ready`）
- 开发服务器监听 `http://localhost:8080`

### 4) 展示浏览器预览页面（提交材料之一）

在浏览器中打开 `http://localhost:8080` 并截图。

通过标准：

- 页面正常加载，无白屏或运行时错误遮罩
- 可见占位或起步 UI（编码任务开始前显示应用标题或 `Todo App — Ready` 即可）

### 初始化检查清单

- [ ]  项目结构与 `package.json` 符合规范
- [ ]  已保存项目树输出（终端截图或文本）
- [ ]  终端截图显示 `npm run dev` 成功
- [ ]  浏览器截图显示应用在 `http://localhost:8080` 运行

---

## 编码任务（30 分钟）

初始化验证通过后开始计时。请按顺序完成以下 3 个任务。

## 评分标准

| 维度 | 考察内容 |
| --- | --- |
| 功能性 | 各任务验收标准全部通过 |
| React 模式 | 状态放置合理、Hooks 使用得当、组件组合清晰 |
| 代码质量 | 命名清晰、组件职责单一、无冗余代码 |
| 错误处理 | 基本校验与失败时的用户反馈 |
| 时间管理 | 若超时，已完成任务可获部分分数 |

---

## 任务 1 — 展示任务并接入状态（约 10 分钟）

**目标：** 加载任务并通过共享状态在页面上渲染。

### 需实现的文件

- `src/data/mockTasks.js` — 导出至少 **3 条**示例任务数组
- `src/services/taskService.js` — 模拟 API 的异步函数（使用 `setTimeout` 或返回 Promise；无需真实后端）
    - `getTasks()` — 返回所有任务
- `src/context/TaskContext.jsx` — 向组件树提供任务与加载状态
- `src/hooks/useTasks.js` — 消费 `TaskContext` 的自定义 Hook
- `src/pages/TasksPage.jsx` — 挂载时获取任务并渲染列表
- `src/components/TaskList.jsx` — 渲染任务列表
- `src/components/TaskItem.jsx` — 展示 **标题**、**完成状态**（复选框或标签）及 **创建日期**（`date-fns` 或 `toLocaleDateString` 格式化）

### 要求

1. 页面加载时，通过 `taskService.getTasks()` 获取并展示任务
2. 加载过程中显示加载指示（如 `Loading...`）
3. 若获取失败，在页面上显示简单错误信息
4. `TaskItem` 需在视觉上区分已完成与未完成任务（如删除线或淡化文字）

### 验收标准

- [ ]  加载后至少显示 3 条模拟任务
- [ ]  获取数据期间可见加载状态
- [ ]  已完成/未完成任务在视觉上有明显区分
- [ ]  组件中使用 `useTasks()`，而非手动逐层传递 Context

---

## 任务 2 — 创建与更新任务（约 10 分钟）

**目标：** 添加新任务并更新已有任务（切换完成状态 + 行内编辑）。

### 需实现 / 扩展的文件

- `src/services/taskService.js`
    - `createTask(title)` — 添加任务，包含新 `id`、`completed: false` 和 `createdAt`
    - `updateTask(id, updates)` — 将更新合并到已有任务
- `src/context/TaskContext.jsx` — 暴露 `addTask` 与 `updateTask` 操作
- `src/components/TaskForm.jsx` — 用于添加任务的表单
- `src/components/TaskItem.jsx` — 添加切换完成状态与编辑行为

### 要求

1. **创建：** 提交有效标题后，任务加入列表，无需整页刷新
2. **校验：** 标题必填，长度 1–100 字符；无效输入时显示行内错误信息（推荐 `react-hook-form` + `zod`，普通校验亦可）
3. **切换完成：** 点击复选框（或等效控件）标记完成/未完成，并通过服务层持久化到本地状态
4. **编辑标题：** 支持编辑已有任务标题（行内输入或编辑模式）；Enter 或保存按钮提交；Escape/取消为加分项
5. **反馈：** 创建或更新成功时显示 Toast（`react-toastify`）

### 验收标准

- [ ]  提交后新任务出现在列表顶部或底部
- [ ]  空标题或过长标题被拒绝并显示可见错误
- [ ]  切换完成状态后 UI 立即更新
- [ ]  可编辑任务标题，列表中反映变更
- [ ]  创建/更新成功时显示 Toast

---

## 任务 3 — 删除与搜索（约 10 分钟）

**目标：** 删除任务并按关键词过滤列表。

### 需实现 / 扩展的文件

- `src/services/taskService.js`
    - `deleteTask(id)` — 删除任务
- `src/context/TaskContext.jsx` — 暴露 `deleteTask` 及搜索状态（或将搜索状态保留在页面层）
- `src/components/TaskItem.jsx` — 添加带确认的删除控件
- `src/components/SearchBar.jsx` — 按标题过滤任务的文本输入（不区分大小写）
- `src/pages/TasksPage.jsx` — 接入搜索栏与过滤后的列表

### 要求

1. **删除：** 每条任务有删除按钮；删除前需确认（`window.confirm` 即可）
2. **搜索：** 在 `SearchBar` 中输入时按标题子串过滤可见任务；清空输入后恢复完整列表
3. **空状态：**
    - 无任何任务：`No tasks yet. Add one above.`
    - 搜索无匹配：`No tasks match your search.`
4. **反馈：** 删除成功时显示 Toast

### 验收标准

- [ ]  确认后任务从列表中移除
- [ ]  搜索实时（或 onChange）过滤，且不破坏可见项上的 CRUD 操作
- [ ]  显示合适的空状态提示
- [ ]  删除成功时显示 Toast

---

## 提交方式

时间结束（或提前完成）后，请提交：

1. 完整的 `crud-app` 文件夹（zip 或 Git 链接）
2. **初始化证明材料：**
    - 项目树输出（截图或粘贴文本）
    - 终端截图：`npm install` / `npm run dev` 成功
    - 浏览器截图：应用在 `http://localhost:8080` 运行
3. 简短说明：
    - 完成了哪些任务
    - 若有更多时间会如何改进
    - 如何运行项目（`npm install` / `npm run dev`）

---

## 可选加分项（30 分钟内非必需）

- 将任务持久化到 `localStorage`，刷新后数据保留
- 添加 `Clear completed` 批量清除已完成任务
- 使用 `react-error-boundary` 包裹页面并提供降级 UI
- 代码通过 ESLint 检查（`npm run lint`）