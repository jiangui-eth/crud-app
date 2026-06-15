---
id: "02"
title: taskService — getTasks
phase: task1
status: todo
estimate: 3m
---

## Goal
实现模拟 API 的 `getTasks()` 异步函数，使用 `setTimeout` 或 Promise 模拟网络延迟，返回 mockTasks 数据。

## Files
- create/modify: `src/services/taskService.js`

## Requirements
- `getTasks()` 返回 Promise，resolve 值为任务数组（来自 `mockTasks.js`）
- 模拟 300–600ms 延迟（`setTimeout` 包裹）
- 无需真实后端或 axios 网络请求
- 内部维护一份可变的任务数组副本，供后续 create / update / delete 操作共享

## Acceptance Criteria
- [ ] `getTasks()` 为 async 函数或返回 Promise
- [ ] 调用后经短暂延迟返回任务数组
- [ ] 返回的数据与 `mockTasks.js` 内容一致
