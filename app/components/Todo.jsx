"use client"
import React,{useState} from 'react'

const Todo = () => {
    const [input,setInput]=useState('');
const[todo,setTodo]=useState([]);

const addTodo=()=>{
setTodo([...todo,input]);
setInput('');

}
  return (
    <div>
     <input placeholder='hi' type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
     <button onClick={addTodo}>Add</button>
     <ul>
        {todo.map((id,ti)=>
      <>
      <h2 key={id}>{ti}</h2>
      <button>edit</button>
      </>
    
    )}</ul> 
    </div>
  )
}

export default Todo
