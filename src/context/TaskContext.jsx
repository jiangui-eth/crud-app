import { createContext, useContext, useEffect, useState } from 'react'
import { getTasks } from '../services/taskService'

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

  return (
    <TaskContext.Provider value={{ tasks, loading, error, setTasks }}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskContext }
