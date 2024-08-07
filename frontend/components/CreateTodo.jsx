import { useState } from "react"

export function CreateTodo (props){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
     return(
        <div>
            <input style={{
                margin: 10,
                padding: 10
            }} type="text" placeholder="Enter a task" onChange={function(e){
                const value = e.target.value;
                setTitle(e.target.value)
            }} /> <br /> <br />
            <input style={{
                margin: 10,
                padding: 10
            }} type="text" placeholder="Description" onChange={function(e){
                const value = e.target.value;
                setDescription(e.target.value)
             }} /> <br /> <br />
            <button style={{
            
                 borderRadius : 20,
                 padding : 10,
                 width : 130,
            }} onClick={()=> {
                fetch("http://localhost:3002/todo" ,{
                    method : "POST",
                    body: JSON.stringify({
                        title : title,
                        description : description
                    }), 
                    headers : {
                        "Content-Type" : "application/json"
                    }
                })
                .then(async function (res){
                    const json = await res.json()

                    alert("Todo added")
                })
            }}>Add Todo</button>
        </div>
     )

}