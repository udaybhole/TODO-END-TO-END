import { useState } from 'react'

import  CreateTodo  from './components/CreateTodo1'
import  Todos1  from './components/Todos'


function App() {
  
    const [todos , setTodos] = useState([]);

    // fetch("http://localhost:3000/todos")
    // .then(async function(res){
    //     const json = await res.json();
    //     setTodos(json.todos);
    // })
    return(
        <div>
        <CreateTodo></CreateTodo>
        <Todos1 todos={todos}  />
        </div>
    )
   
}

export default App
