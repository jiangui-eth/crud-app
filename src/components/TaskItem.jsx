import { useState } from 'react'
import { format } from 'date-fns'
import { toast } from 'react-toastify'
import { useTasks } from '../hooks/useTasks'

export default function TaskItem({ task }) {
  const { updateTask, deleteTask } = useTasks()
  const [editing, setEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(task.title)

  const date = format(new Date(task.createdAt), 'MMM d, yyyy')

  async function handleToggle() {
    await updateTask(task.id, { completed: !task.completed })
    toast.success('Task updated!')
  }

  async function handleSave() {
    if (!editTitle.trim()) return
    await updateTask(task.id, { title: editTitle.trim() })
    setEditing(false)
    toast.success('Task updated!')
  }

  function handleCancel() {
    setEditTitle(task.title)
    setEditing(false)
  }

  async function handleDelete() {
    if (!window.confirm('Delete this task?')) return
    await deleteTask(task.id)
    toast.success('Task deleted!')
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSave()
    if (e.key === 'Escape') handleCancel()
  }

  return (
    <li className={`task-item${task.completed ? ' completed' : ''}`}>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />

      {editing ? (
        <input
          className="task-edit-input"
          value={editTitle}
          autoFocus
          onChange={e => setEditTitle(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <span className="task-title">{task.title}</span>
      )}

      <span className="task-date">{date}</span>

      {editing ? (
        <>
          <button className="btn-icon" onClick={handleSave} disabled={!editTitle.trim()}>Save</button>
          <button className="btn-icon" onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <button className="btn-icon" onClick={() => { setEditing(true); setEditTitle(task.title) }}>Edit</button>
          <button className="btn-icon btn-delete" onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  )
}
