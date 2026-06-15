---
id: "14"
title: SearchBar — 按标题过滤
phase: task3
status: done
estimate: 3m
---

## Goal
创建搜索输入框组件，支持按任务标题子串实时过滤，不区分大小写。

## Files
- create: `src/components/SearchBar.jsx`

## Requirements
- 渲染一个文本输入框，带合适的 `placeholder`（如 `Search tasks...`）
- Props：`value`（当前搜索词）、`onChange`（更新搜索词的回调）
- 组件本身不持有状态，为受控组件（controlled input）
- 不在本组件内执行过滤逻辑，由父组件（TasksPage）处理

## Acceptance Criteria
- [ ] 输入框可正常接收和显示文本
- [ ] `onChange` 在每次输入时触发
- [ ] 为受控组件，value 由外部控制
