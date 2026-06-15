---
id: "01"
title: 模拟任务数据
phase: task1
status: done
estimate: 2m
---

## Goal
创建静态模拟任务数组，作为服务层的本地数据源。

## Files
- create: `src/data/mockTasks.js`

## Requirements
- 导出一个数组，至少包含 **3 条**示例任务
- 每条任务包含字段：`id`（字符串）、`title`（字符串）、`completed`（布尔值）、`createdAt`（ISO 日期字符串或 Date 对象）
- 任务中至少有 1 条 `completed: true`，至少有 1 条 `completed: false`，以便测试视觉区分

## Acceptance Criteria
- [ ] 文件导出 `mockTasks` 数组
- [ ] 数组包含至少 3 条任务，字段完整
- [ ] 包含已完成和未完成任务各至少 1 条
