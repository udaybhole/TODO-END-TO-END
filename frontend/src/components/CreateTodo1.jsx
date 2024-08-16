import { useState } from 'react'
export function CreateTodo(){

    const[title , setTitle]= useState("");
    const[description,setDescription]=useState("");
  
  
  
  
  return <div>
        <input id="title" style={{padding : 10 , margin :10}}
        type="text" placeholder="title"
        onChange={function(e){
            const val = e.target.value;
            setTitle(e.target.value);
        }} />
        <br />


        <input id="des" style={{padding : 10 , margin :10}}
         type="text" placeholder="description"
         onChange={function(e){
            const val = e.target.value;
            setDescription(e.target.value);
        }} /><br />

        <button 
        onClick={()=> {

            fetch("http://localhost:3000/todo",{
                method : "POST",
                body :JSON.stringify({
                    title : title,
                    description: description 
                }),
                headers:{
                    "Content-type":"application/json"
                }
            }). then(async function(res){
                const json = await res.json();
                alert("Todo added");
            })

        }}
        style={{padding : 10 , margin :10}}
        >Add a Todo</button>
    </div>
}

export default CreateTodo;
