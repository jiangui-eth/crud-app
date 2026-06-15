---
id: "12"
title: taskService — deleteTask
phase: task3
status: todo
estimate: 2m
---

## Goal
扩展 taskService，添加删除任务的异步函数。

## Files
- modify: `src/services/taskService.js`

## Requirements
- `deleteTask(id)`:
  - 从内部数组中移除对应 `id` 的任务
  - 返回 Promise，resolve 值为被删除的任务 `id` 或 `true`
  - 若 `id` 不存在，reject 并附带错误信息

## Acceptance Criteria
- [ ] `deleteTask(id)` 成功后任务从内部数组中移除
- [ ] 函数为异步（返回 Promise）
- [ ] 后续 `getTasks()` 不再返回已删除的任务
