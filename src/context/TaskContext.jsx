import { createContext, useEffect, useState } from 'react'
import { getTasks, createTask, updateTask as serviceUpdateTask, deleteTask as serviceDeleteTask } from '../services/taskService'

const TaskContext = createContext(null)

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getTasks()
      .then(setTasks)
      .catch(err => setError(err.message ?? 'Failed to load tasks'))
      .finally(() => setLoading(false))
  }, [])

  async function addTask(title) {
    const newTask = await createTask(title)
    setTasks(prev => [...prev, newTask])
    return newTask
  }

  async function updateTask(id, updates) {
    const updated = await serviceUpdateTask(id, updates)
    setTasks(prev => prev.map(t => (t.id === id ? updated : t)))
    return updated
  }

  async function deleteTask(id) {
    await serviceDeleteTask(id)
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  return (
    <TaskContext.Provider value={{ tasks, loading, error, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskContext }
