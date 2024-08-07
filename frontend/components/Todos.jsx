
/*
todos : [
{
title : do something
descitption : some thing
} ,
 {title : do something
descitption : some thing
}]

*/
export function Todos({todos}){
    // <div>
    //     <h3>Study Dsa</h3>
    //     <h3>Do leetcode</h3>
    //     <button>Mark as completed</button>
    // </div>
   return <div>
        {todos.map(function(todos){
            return <div>
              <h3>{todos.title}</h3>  
              <h3>{todos.description}</h3>  
              <button>{todos.completed == true ? "completed" : "Mark as Complete" }</button>
            </div>
        })}
   </div>
}