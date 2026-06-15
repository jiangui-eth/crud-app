---
id: "06"
title: TaskList — 渲染任务列表
phase: task1
status: done
estimate: 3m
---

## Goal
创建列表容器组件，接收任务数组并逐条渲染 `TaskItem`。

## Files
- create: `src/components/TaskList.jsx`

## Requirements
- Props：接收 `tasks` 数组
- 遍历数组，每条任务渲染一个 `TaskItem`，使用 `task.id` 作为 `key`
- 不处理空状态（空状态由 `TasksPage` 负责）
- 不包含数据获取逻辑，只负责渲染

## Acceptance Criteria
- [ ] 正确渲染传入的每条任务
- [ ] 每个列表项有唯一 `key`
- [ ] 组件职责单一，不含业务逻辑
