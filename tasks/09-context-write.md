---
id: "09"
title: TaskContext — 暴露 addTask & updateTask
phase: task2
status: done
estimate: 3m
---

## Goal
扩展 TaskContext，暴露创建和更新任务的操作函数，使组件无需直接调用 service。

## Files
- modify: `src/context/TaskContext.jsx`

## Requirements
- `addTask(title)`:
  - 调用 `taskService.createTask(title)`
  - 成功后将新任务追加到 `tasks` 状态（无需重新 fetch 全量数据）
  - 返回新建任务或 Promise，供调用方显示 Toast
- `updateTask(id, updates)`:
  - 调用 `taskService.updateTask(id, updates)`
  - 成功后更新 `tasks` 状态中对应的任务（不可变更新）
  - 返回更新后任务或 Promise，供调用方显示 Toast
- 通过 Context value 暴露 `addTask` 和 `updateTask`，`useTasks()` 自动包含这两个函数

## Acceptance Criteria
- [ ] `addTask` 调用后新任务出现在列表中，无需刷新页面
- [ ] `updateTask` 调用后对应任务在列表中即时更新
- [ ] 操作通过 service 层持久化到内存数组
