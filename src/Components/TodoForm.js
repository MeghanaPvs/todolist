import React, { useState } from "react";
//React and useState are react hooks
import { Button, TextField } from "@material-ui/core";
const uuid = require('uuid');

function TodoForm({ addTodo }) {
    //keep state to keep track of input of user ; object with 3 properties: id - String,task- String and completed- boolean 
    //useState() has an array with 2 values => 1. Initial varibale 2. Function name
     //todo is the initial variable 
   //setTodo is a function name
    const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });
 //Event handlers
  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        type="text"
        name="task"
        value={todo.task}
        
                //  {/* 
                //      value={todo.task} => when ever input change it is been updated
                //      onChange: when ever input changes call handleTaskInputChange method  */}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default TodoForm;