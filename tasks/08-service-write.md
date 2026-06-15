---
id: "08"
title: taskService — createTask & updateTask
phase: task2
status: done
estimate: 3m
---

## Goal
扩展 taskService，添加创建和更新任务的异步函数，操作共享的内存任务数组。

## Files
- modify: `src/services/taskService.js`

## Requirements
- `createTask(title)`:
  - 生成新 `id`（推荐使用 `uuid` 的 `v4()`）
  - 创建任务对象：`{ id, title, completed: false, createdAt: new Date().toISOString() }`
  - 将新任务加入内部数组
  - 返回 Promise，resolve 值为新建的任务对象
- `updateTask(id, updates)`:
  - 找到对应 `id` 的任务，将 `updates` 合并进去（`Object.assign` 或展开运算符）
  - 返回 Promise，resolve 值为更新后的任务对象
  - 若 `id` 不存在，reject 并附带错误信息

## Acceptance Criteria
- [ ] `createTask(title)` 返回含完整字段的新任务
- [ ] `updateTask(id, updates)` 正确合并字段并返回更新后任务
- [ ] 两个函数均为异步（返回 Promise）
- [ ] 操作的是与 `getTasks()` 共享的同一数组
