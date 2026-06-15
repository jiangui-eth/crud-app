import { createContext } from 'react'

export const TaskContext = createContext(null)

export function TaskProvider({ children }) {
  return <TaskContext.Provider value={{}}>{children}</TaskContext.Provider>
}
