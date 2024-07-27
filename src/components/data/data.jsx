const myTodos = [
    { id: 1, description: "Create a new todo", completed: false },
    { id: 2, description: "Update an existing todo", completed: false },
    { id: 3, description: "Delete an existing todo", completed: false },
  ];
//   In the function below we have two arrow functions; the inner and outer arrow functions; id is the parameter while 3 is the argument
  const getNextId = ((id) => () => ++id)(3);
  
  export { myTodos, getNextId }