import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './styles/app.css'
import TasksPage from './pages/TasksPage'

function App() {
  return (
    <>
      <TasksPage />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  )
}

export default App
