const express = require('express')
const app = express()
const zod = require('zod');
const cors = require('cors')
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./database');

app.use(express.json());
app.use(cors({
  // origin : "http://localhost:5173"
}));

app.post('/todo' , async function(req , res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(parsedPayload.success){
        console.log("new User created")
    }
    if(!parsedPayload.success){
       res.status(411).json({
         msg : "You sent wrong input"
       })
       return;
    }
   await todo.create({
    title : createPayload.title ,
    description : createPayload.description ,
    completed : false 
         
    })
    res.json({
      msg : "Todo created"
    })
})

app.get('/todos' ,async function(req,res){
  const todos = await todo.find({}) //we are going to get all todos
  
  res.json({
    todos
  })

})
app.put('/completed',async function(req,res){
     const updatePayload = req.body
     const parsedPayload = updateTodo.safeParse(updatePayload)
     if(!parsedPayload.success){
        res.status(411).json({
          msg : "You sent wrong input"
        })
        return;
     }

     await todo.update({
      _id : req.body.id
     },{
      completed : true

     })
     res.json({
      msg : "Todo marked as completed"
     })
})

app.use(function(req,res,err, next){
  res.json({
    error : "internal server crash"
  })
})

app.listen(3002);