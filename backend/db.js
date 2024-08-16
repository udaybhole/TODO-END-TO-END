const mongoose = require("mongoose");

//mongodb+srv://admin:bdknum00@cluster0.2mknjxi.mongodb.net/
mongoose.connect("mongodb+srv://admin:bdknum00@cluster0.2mknjxi.mongodb.net/TODO")
const todoschema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoschema);

module.exports={
    todo:todo
}