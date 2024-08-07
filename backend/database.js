const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sivadheerajethamsetti:TCuJVT132YIUFMap@cluster0.xodfdeg.mongodb.net/')

const todoSchema = mongoose.Schema({
    title : String ,
    description : String ,
    completed : Boolean 
})

const todo = mongoose.model('todos' , todoSchema)

module.exports = {
    todo : todo
}
