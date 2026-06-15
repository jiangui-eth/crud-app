import { mockTasks } from '../data/mockTasks'

let tasks = [...mockTasks]

const delay = () => new Promise(resolve => setTimeout(resolve, 400))

export async function getTasks() {
  await delay()
  return [...tasks]
}

export async function createTask() {}
export async function updateTask() {}
export async function deleteTask() {}
