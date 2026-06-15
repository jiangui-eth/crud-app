---
id: "07"
title: TasksPage — 挂载获取并展示列表
phase: task1
status: done
estimate: 3m
---

## Goal
创建主页面组件，挂载时从 Context 获取数据，处理加载和错误状态，渲染任务列表。

## Files
- create: `src/pages/TasksPage.jsx`
- modify: `src/App.jsx` — 路由或直接渲染 `TasksPage`

## Requirements
- 调用 `useTasks()` 获取 `{ tasks, loading, error }`
- `loading` 为 `true` 时显示加载指示（如 `<p>Loading...</p>` 或 spinner）
- `error` 有值时在页面显示错误信息
- 正常状态下渲染 `<TaskList tasks={tasks} />`
- 不在本组件内直接调用 `taskService`，数据来源为 Context

## Acceptance Criteria
- [ ] 加载后至少显示 3 条模拟任务
- [ ] 获取期间可见加载状态
- [ ] 获取失败时显示错误信息
- [ ] 数据通过 `useTasks()` 而非直接调用 service 获取
