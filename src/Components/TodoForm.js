//React and useState are react hooks
import React,{useState} from "react";

//keep state to keep track of input of user ; object with 3 properties 
//This form should retun 
//A form should consists of an input and button

function Todoform(){

    //keep state to keep track of input of user ; object with 3 properties: id - String,task- String and completed- boolean 
    //useState() has an array with 2 values => 1. Initial varibale 2. Function name
    //todo is the initial variable 
    //setTodo is a function name
    const [todo,setTodo]=useState({
        id:"",
        task:"",
        completed:false
    });

    //Event handlers
    function handleTaskInputChange(e)
    {
        setTodo({...todo, task:e.target.value});//target value : contains new input text
    }
    return(

        <form>
            <input onChange={handleTaskInputChange} />            

            <button/>
        
        </form>
    );
}
                    {/* onChange: when ever input changes call handleTaskInputChange method  */}

export default Todoform;