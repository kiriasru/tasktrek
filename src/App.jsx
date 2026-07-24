import React from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'

const App = () => {
  return (
    <div className='app'>
       <TaskForm />
        <main className='app_main'>
            <section className="task_column">Section</section>
            <section className="task_column">Section</section>
            <section className="task_column">Section</section>
        </main>
    </div>
  )
}

export default App