import { useRef, useState } from 'react'
import Task from './Components/Task'

let key = 1;
function App() {
  let inputRef = useRef("")
  let [task, setTask] = useState([])

  function addTaskToList() {
    let obj = {
      text: inputRef.current.value,
      isComplete: false,
      id: key
    }
    setTask((prev) => [...prev, obj])
  }

  return (
    <div className="h-screen bg-gray-700 flex  justify-center">
      <div className='flex flex-col items-center my-8 w-2/5 text-white bg-gray-400 p-8 bg-opacity-20 rounded-md'>
        <h1 className='text-4xl text-center my-4'> <i class="fa-solid fa-pen-to-square"></i> To-Do List</h1>
        <hr style={{
              'height': '1px',
              'color': 'white',
              'border-top-width': '1px',
              'width': '70%',
              'marginBottom':'20px'
        }}/>
        <form className='my-3 mx-2  flex gap-5'>
          <input type="text" name="task-input" ref={inputRef} className='border-white bg-transparent border py-1 px-2 outline-none text-xl' />
          <button type='submit' className='border-white bg-transparent border py-2 px-3 text-2xl rounded-md'
            onClick={
              (e) => {
                e.preventDefault();
                if (inputRef.current.value === "") {
                  inputRef.current.focus()
                  // alert('Please enter your task')
                }
                else {
                  addTaskToList()
                  key++
                  console.log(task)
                }
              }
            }
          >Add
          </button>
        </form>
        <div className='w-4/5'>
          {
            task.map((item, index = 0) => {
              index++
              return <Task desc={item.text} id={item.id} key={index} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
