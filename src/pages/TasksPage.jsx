import { useState } from 'react'
import { useTasks } from '../hooks/useTasks'
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'
import SearchBar from '../components/SearchBar'

export default function TasksPage() {
  const { tasks, loading, error } = useTasks()
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = tasks.filter(t =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  function renderContent() {
    if (loading) return <p className="status">Loading...</p>
    if (error) return <p className="status error">{error}</p>
    if (tasks.length === 0) return <p className="status">No tasks yet. Add one above.</p>
    if (filtered.length === 0) return <p className="status">No tasks match your search.</p>
    return <TaskList tasks={filtered} />
  }

  return (
    <main>
      <h1>Todo App</h1>
      <TaskForm />
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      {renderContent()}
    </main>
  )
}
