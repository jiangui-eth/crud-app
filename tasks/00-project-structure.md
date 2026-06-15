---
id: "00"
title: 项目结构初始化
phase: init
status: todo
estimate: 5m
---

## Goal
创建所有必需的文件夹和占位文件，确保应用无报错启动并在 http://localhost:8080 渲染占位 UI。

## Files
- create: `src/pages/TasksPage.jsx`
- create: `src/components/TaskForm.jsx`
- create: `src/components/TaskList.jsx`
- create: `src/components/TaskItem.jsx`
- create: `src/components/SearchBar.jsx`
- create: `src/hooks/useTasks.js`
- create: `src/services/taskService.js`
- create: `src/context/TaskContext.jsx`
- create: `src/data/mockTasks.js`
- create: `src/styles/app.css`
- modify: `src/App.jsx` — 渲染占位页面或接入路由至 TasksPage

## Requirements
- 所有文件夹和文件符合规范中的预期结构
- `App.jsx` 渲染占位内容（如 `Todo App — Ready`），确保应用可无报错启动
- `npm run dev` 成功，服务器监听 `http://localhost:8080`
- 各占位文件导出空组件或空函数即可，无需实现逻辑

## Acceptance Criteria
- [ ] `npm install` 无致命错误完成
- [ ] `npm run dev` 启动成功（显示 `VITE v6.x.x ready`）
- [ ] 浏览器打开 `http://localhost:8080` 无白屏或运行时错误
- [ ] 可见占位 UI（应用标题或 `Todo App — Ready`）
