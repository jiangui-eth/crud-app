# crud-app

A Todo List application with full CRUD functionality, built with React 19 and Vite.

## Tech Stack

| Layer | Library |
|---|---|
| UI | React 19 + Vite 6 |
| State | Context API + custom hook |
| Form & Validation | react-hook-form + Zod |
| Notifications | react-toastify |
| Date formatting | date-fns |
| ID generation | uuid |

## Features

- **Display** — loads tasks on mount with a loading indicator; shows error state on failure
- **Create** — add a task via a validated form (title required, 1–100 characters)
- **Update** — toggle completed status via checkbox; inline title editing with Enter / Escape support
- **Delete** — delete with a confirmation dialog
- **Search** — real-time case-insensitive filter by title; two empty-state messages

## Project Structure

```
src/
├── App.jsx                  # Root component, mounts ToastContainer
├── main.jsx                 # Entry point, wraps app with TaskProvider
│
├── pages/
│   └── TasksPage.jsx        # Main page: search, list, empty states
│
├── components/
│   ├── TaskForm.jsx         # Add-task form with validation
│   ├── TaskList.jsx         # Renders list of TaskItem
│   ├── TaskItem.jsx         # Single task: display, edit, delete, toggle
│   └── SearchBar.jsx        # Controlled search input
│
├── context/
│   └── TaskContext.jsx      # TaskProvider — tasks, loading, error, CRUD actions
│
├── hooks/
│   └── useTasks.js          # useContext(TaskContext) wrapper
│
├── services/
│   └── taskService.js       # Simulated async API (in-memory, ~400ms delay)
│
├── data/
│   └── mockTasks.js         # Seed data (3 sample tasks)
│
└── styles/
    └── app.css              # Global styles
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server on port 8080 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Lint source files with ESLint |
