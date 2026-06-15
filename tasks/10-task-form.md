---
id: "10"
title: TaskForm — 添加任务表单
phase: task2
status: todo
estimate: 5m
---

## Goal
创建新增任务的表单组件，集成 react-hook-form 和 Zod 进行校验，提交后调用 addTask 并显示 Toast。

## Files
- create: `src/components/TaskForm.jsx`
- modify: `src/pages/TasksPage.jsx` — 引入并渲染 `<TaskForm />`

## Requirements
- 表单包含一个文本输入框（任务标题）和提交按钮
- **校验规则**（使用 `react-hook-form` + `zod`，或普通校验均可）：
  - 标题必填
  - 长度 1–100 字符
  - 无效输入时在输入框下方显示行内错误信息
- 提交有效标题后：
  - 调用 `useTasks()` 中的 `addTask(title)`
  - 清空输入框
  - 显示成功 Toast（`react-toastify`：`toast.success('Task created!')`）
- 提交中禁用提交按钮（防止重复提交）

## Acceptance Criteria
- [ ] 提交后新任务出现在列表中，无需整页刷新
- [ ] 空标题或超过 100 字符时显示行内错误，阻止提交
- [ ] 提交成功后显示成功 Toast
- [ ] 提交成功后输入框被清空
