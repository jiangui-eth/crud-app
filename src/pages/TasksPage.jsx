import { useTasks } from '../hooks/useTasks'
import TaskList from '../components/TaskList'

export default function TasksPage() {
  const { tasks, loading, error } = useTasks()

  return (
    <main>
      <h1>Todo App</h1>
      {loading && <p className="status">Loading...</p>}
      {error && <p className="status error">{error}</p>}
      {!loading && !error && <TaskList tasks={tasks} />}
    </main>
  )
}
