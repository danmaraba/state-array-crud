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

  return (
    <div>
      <h2>Add Todos</h2>
      <form onSubmit={addTodo}>
        <label>
          Description:
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
              <input type="checkbox" />
            </label>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
