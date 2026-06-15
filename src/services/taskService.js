import { v4 as uuidv4 } from 'uuid'
import { mockTasks } from '../data/mockTasks'

let tasks = [...mockTasks]

const delay = () => new Promise(resolve => setTimeout(resolve, 400))

export async function getTasks() {
  await delay()
  return [...tasks]
}

export async function createTask(title) {
  await delay()
  const task = {
    id: uuidv4(),
    title,
    completed: false,
    createdAt: new Date().toISOString(),
  }
  tasks.push(task)
  return { ...task }
}

export async function updateTask(id, updates) {
  await delay()
  const index = tasks.findIndex(t => t.id === id)
  if (index === -1) throw new Error(`Task ${id} not found`)
  tasks[index] = { ...tasks[index], ...updates }
  return { ...tasks[index] }
}

export async function deleteTask() {}
