---
id: "05"
title: TaskItem — 展示任务信息
phase: task1
status: todo
estimate: 5m
---

## Goal
创建单条任务的展示组件，显示标题、完成状态和创建日期，并在视觉上区分已完成与未完成任务。

## Files
- create: `src/components/TaskItem.jsx`

## Requirements
- 展示任务 **标题**
- 展示 **完成状态**：复选框（只读，Task 2 会改为可交互）或状态标签
- 展示 **创建日期**：使用 `date-fns` 的 `format()` 或原生 `toLocaleDateString()` 格式化
- **视觉区分**：已完成任务使用删除线（`text-decoration: line-through`）或淡化文字（`opacity` / 灰色）
- Props：接收单个 `task` 对象（`{ id, title, completed, createdAt }`）

## Acceptance Criteria
- [ ] 正确渲染标题、状态、日期
- [ ] 已完成与未完成在视觉上有明显区分
- [ ] 日期格式可读（非原始 ISO 字符串）
