import React, { useEffect, useState } from 'react'

function Task({
  desc,
  id,
}) {

  let [completion, setCompletion] = useState(false)
  let [checkBox, setcheckBox] = useState(`fa-regular fa-square`)
  let [lineThrough, setLineThrough] = useState('')
  useEffect(() => {
    if (completion) {
      seOpacity(20)
      setcheckBox(`fa-regular fa-square-check`)
      setLineThrough('line-through')
    }
    else {
      seOpacity(100)
      setcheckBox(`fa-regular fa-square`)
      setLineThrough('')
    }
  }, [completion])

  let [opacity, seOpacity] = useState(100)
  return (
    <div className={`flex gap-4 bg-gray-400 px-4 py-2 my-2 items-center w-full justify-evenly opacity-${opacity}`} >
      <button
        onClick={() => {
          setCompletion(!completion)
          // console.log('complete:', completion)
        }}
      ><i className={checkBox}></i></button>
      <p className= {`${lineThrough} w-full`}>{desc}</p>
      <button
        onClick={(e) => {
          e.target.parentElement.parentElement.remove()
        }}><i className="fa-solid fa-trash-can"></i></button>
    </div >
  )
}

export default Task
