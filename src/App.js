import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const [inputTask, setInputTask] = useState()

  const tasks = useSelector (state => state.tasks)
  const dispatch = useDispatch()

  const hendleInput = e => {
    setInputTask(e.target.value)
  }

  const handleSubmit = () => {
    dispatch({
      type: 'ADD_TASK',
      payload: inputTask,
    })

  }

  const handleRemove = task => {
    dispatch({
      type: 'REMOVE_TASK',
      payload: task
    })
  }


  return (
    <>
      <ul>
        {
          tasks.map(task => 
          <li key={task}>
            {task}
            <button onClick={() => handleRemove(task)}>Remover</button>
          </li>)
        }
      </ul>
      <input type="text" onChange={hendleInput} value={inputTask}/>
      <button onClick={handleSubmit}>Inserir</button>
    </>
  )
}

export default App
