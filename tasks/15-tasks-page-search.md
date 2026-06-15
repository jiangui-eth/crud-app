---
id: "15"
title: TasksPage — 接入搜索与空状态
phase: task3
status: done
estimate: 4m
---

## Goal
在 TasksPage 中集成搜索栏和过滤逻辑，处理两种空状态提示。

## Files
- modify: `src/pages/TasksPage.jsx`

## Requirements
- 在页面内维护 `searchQuery` 状态（`useState('')`）
- 渲染 `<SearchBar value={searchQuery} onChange={setSearchQuery} />`
- 计算过滤后的任务列表：
  ```js
  const filtered = tasks.filter(t =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  ```
- 将 `filtered` 传给 `<TaskList tasks={filtered} />`
- **空状态处理**：
  - `tasks` 为空（无任何任务）：显示 `No tasks yet. Add one above.`
  - `tasks` 非空但 `filtered` 为空（搜索无匹配）：显示 `No tasks match your search.`
- 搜索过滤不影响列表项上的 CRUD 操作（编辑、删除、切换在过滤后仍正常工作）

## Acceptance Criteria
- [ ] 输入搜索词后列表实时过滤（onChange）
- [ ] 清空搜索词后恢复完整列表
- [ ] 无任务时显示 `No tasks yet. Add one above.`
- [ ] 搜索无匹配时显示 `No tasks match your search.`
- [ ] 过滤后仍可对可见任务执行 CRUD 操作
