---
id: "13"
title: TaskItem — 删除按钮
phase: task3
status: todo
estimate: 3m
---

## Goal
为每条任务添加删除功能：点击删除按钮弹出确认对话框，确认后从列表中移除并显示 Toast。

## Files
- modify: `src/components/TaskItem.jsx`
- modify: `src/context/TaskContext.jsx` — 暴露 `deleteTask` 操作

## Requirements
- 在 `TaskItem` 中添加删除按钮（垃圾桶图标或文字按钮）
- 点击后调用 `window.confirm('Delete this task?')`，用户取消则不删除
- 用户确认后调用 `useTasks()` 中的 `deleteTask(id)`
- 删除成功后显示 Toast（`toast.success('Task deleted!')`）
- `TaskContext` 中的 `deleteTask`:
  - 调用 `taskService.deleteTask(id)`
  - 成功后从 `tasks` 状态中移除对应项（不可变更新）

## Acceptance Criteria
- [ ] 点击删除按钮弹出确认对话框
- [ ] 确认后任务从列表中移除，无需刷新页面
- [ ] 取消后任务保留在列表中
- [ ] 删除成功时显示 Toast
