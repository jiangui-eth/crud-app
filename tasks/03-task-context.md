---
id: "03"
title: TaskContext — 提供任务与加载状态
phase: task1
status: done
estimate: 5m
---

## Goal
创建 React Context，向组件树提供任务列表、加载状态和错误状态。

## Files
- create: `src/context/TaskContext.jsx`
- modify: `src/main.jsx` 或 `src/App.jsx` — 用 `TaskProvider` 包裹应用

## Requirements
- 创建 `TaskContext` 和 `TaskProvider` 组件
- Provider 内部状态：`tasks`（数组）、`loading`（布尔值）、`error`（字符串或 null）
- Provider 挂载时自动调用 `taskService.getTasks()` 获取数据，更新 `tasks`
- 获取期间 `loading` 为 `true`，结束后置为 `false`
- 获取失败时将错误信息存入 `error` 状态
- 通过 Context value 暴露：`{ tasks, loading, error }`（Task 2 将扩展更多操作）

## Acceptance Criteria
- [ ] `TaskProvider` 包裹应用，子组件可消费 Context
- [ ] 挂载时自动触发 `getTasks()`
- [ ] `loading` 在请求期间为 `true`，结束后为 `false`
- [ ] 获取失败时 `error` 有值
