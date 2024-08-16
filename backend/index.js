const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
app.use(express.json());
const cors = require('cors');

app.use(cors());



app.post('/todo',async (req,res)=>{

    const  createPayLoad= req.body;
    const parsedPayLaod = createTodo.safeParse(createPayLoad);

    if(!parsedPayLaod.success){
        res.status(411).json({
            msg:"Wrong input try again later"
        })
        return;
    }

   await todo.create({
        title : createPayLoad.title,
        description : createPayLoad.description,
        completed : false

    })

    res.json({
        msg: "Todo created"
    })



})



app.get('/todos',async (req,res)=>{

    const todos = await todo.find({})

    res.json({
        todos
    })

})


app.put('/completed',async(req,res)=>{

    const updatePlayLoad = req.body;
    const parsedPayLaod = updateTodo.safeParse(updatePlayLoad);
    if(!parsedPayLaod.success){
        res.status(411).json({
            msg:"Wrong input"
        })
        return;
    }


    await todo.updateOne({
        _id:req.body.id
    },{
        completed :true
    })



    res.json({
        msg:"Todo completed"
    })


})


app.listen(3000,()=>{
    console.log("started the backend")
});