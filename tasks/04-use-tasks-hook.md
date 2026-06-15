---
id: "04"
title: useTasks 自定义 Hook
phase: task1
status: todo
estimate: 2m
---

## Goal
封装一个自定义 Hook，让组件以简洁方式消费 TaskContext，无需直接使用 `useContext`。

## Files
- create: `src/hooks/useTasks.js`

## Requirements
- `useTasks()` 内部调用 `useContext(TaskContext)` 并返回 context value
- 若在 Provider 外部调用，应抛出有意义的错误提示（可选但推荐）
- 所有需要任务数据的组件均通过 `useTasks()` 访问，不直接使用 `useContext`

## Acceptance Criteria
- [ ] `useTasks()` 返回 `{ tasks, loading, error }` （及后续扩展的操作）
- [ ] 组件中使用 `useTasks()` 而非手动传递 Context
