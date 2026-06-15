import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-toastify'
import { useTasks } from '../hooks/useTasks'

const schema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title must be 100 characters or less'),
})

export default function TaskForm() {
  const { addTask } = useTasks()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) })

  async function onSubmit({ title }) {
    await addTask(title)
    reset()
    toast.success('Task created!')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="task-form-row">
        <input
          type="text"
          placeholder="New task title..."
          {...register('title')}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Adding...' : 'Add Task'}
        </button>
      </div>
      {errors.title && <p className="field-error">{errors.title.message}</p>}
    </form>
  )
}
