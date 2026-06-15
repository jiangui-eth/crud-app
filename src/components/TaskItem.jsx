import { format } from 'date-fns'

export default function TaskItem({ task }) {
  const { title, completed, createdAt } = task
  const date = format(new Date(createdAt), 'MMM d, yyyy')

  return (
    <li className={`task-item${completed ? ' completed' : ''}`}>
      <input type="checkbox" checked={completed} readOnly />
      <span className="task-title">{title}</span>
      <span className="task-date">{date}</span>
    </li>
  )
}
