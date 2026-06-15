import { useTasks } from '../hooks/useTasks'
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'

export default function TasksPage() {
  const { tasks, loading, error } = useTasks()

  return (
    <main>
      <h1>Todo App</h1>
      <TaskForm />
      {loading && <p className="status">Loading...</p>}
      {error && <p className="status error">{error}</p>}
      {!loading && !error && <TaskList tasks={tasks} />}
    </main>
  )
}
