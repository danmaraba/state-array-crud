import React, { useState } from "react";
import { myTodos, getNextId } from "./data/data";
function Todos() {
  const [todos, setTodos] = useState(myTodos);
  const [newTodoDescription, setNewTodoDescription] = useState("");

  function addTodo(e){
    e.preventDefault();
    // Adding new data to the todos
    const newTodo={
        id:getNextId(),
        description:newTodoDescription,
        completed:false,
    }
    // use spread operator to copy the data
    const updatedTodos=[...todos,newTodo]  
    console.log(updatedTodos);  
  }

  function deleteTodo(id){
    // What happens here is that we filter the todos whose id matches the id above in the parameter section
    const updatedTodos=todos.filter(todo=>todo.id !==id)
    // console.log(updatedTodos);
    setTodos(updatedTodos)
    // we now use the setTodos setter function to render the remaining todos after deleting other todos
  }

//   Here is the logic for the updateTodo

// - iterate over the elements in our todo array
// - check if the ID matches
// - if it does, return an updated todo
// - otherwise, return the original todo
  function updateTodo(id,completed){
    console.log(todos);
   const updatedTodos= todos.map(todo=>{
        if(id===todo.id){
            return{
                ...todo,
                completed: completed
            }
        }else{
            return todo
        }
       
  })
//   console.log(updatedTodos);
setTodos(updatedTodos)
}

// you can refactor the completed above to completed only and it will still work

  

//   console.log(todos);
  return (
    <div>
      <h2>Add Todos</h2>
      <form onSubmit={addTodo}>
        <label>
          Description:
          {/* the value here is set to the newTodoDescription state. Then we use the setter function to update the DOM based on what we've keyed in */}
          <input type="text" value={newTodoDescription} onChange={(e)=>setNewTodoDescription(e.target.value)}/>
        </label>
        <input type="submit" />
      </form>
      <h2>My Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.description}</strong>
            <label>
              completed?
              <input type="checkbox" checked={todo.completed} onChange={(e)=>updateTodo(todo.id,e.target.checked)}/>
            </label>
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
