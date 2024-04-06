import React, { useState, useRef, useEffect } from 'react'

export default function About() {
  const [toDos, setToDos] = useState([]);
  const inputRef = useRef(null)

  function addToDo(e) {
    e.preventDefault()
    const inputValue = inputRef.current.value
    setToDos([...toDos,inputValue])
  }

useEffect(()=>{
  console.log(toDos)
}, [toDos])

  
  return (
    <div class="container mx-auto">
      <form onSubmit={addToDo}>
        <input ref={inputRef} type="text" className='border'/>
        <button type="submit">Submit</button>
      </form>

      {
        toDos.map(function (toDo) {
          return (
            <div> {toDo} </div>
        )
      })
    }
    </div>
  )
}