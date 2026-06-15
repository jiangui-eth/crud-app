---
id: "11"
title: TaskItem — 切换完成状态 & 行内编辑
phase: task2
status: done
estimate: 5m
---

## Goal
为 TaskItem 添加交互功能：点击复选框切换完成状态，支持行内编辑任务标题。

## Files
- modify: `src/components/TaskItem.jsx`

## Requirements
- **切换完成状态**：
  - 复选框变为可交互，`onChange` 时调用 `updateTask(id, { completed: !task.completed })`
  - UI 立即更新（乐观更新或等待 Promise 均可）
- **行内编辑标题**：
  - 提供编辑入口（铅笔图标按钮或双击标题）
  - 进入编辑模式后，标题替换为 `<input>` 文本框，预填当前标题
  - **确认**：按 Enter 或点击保存按钮，调用 `updateTask(id, { title: newTitle })`，退出编辑模式，显示成功 Toast
  - **取消**（加分项）：按 Escape 或点击取消按钮，恢复原标题，退出编辑模式
  - 编辑框为空时阻止保存
- 通过 `useTasks()` 获取 `updateTask`

## Acceptance Criteria
- [ ] 点击复选框后完成状态立即在 UI 中更新
- [ ] 可编辑任务标题，列表中反映变更
- [ ] 切换和编辑成功时显示 Toast
- [ ] 编辑框为空时无法保存
