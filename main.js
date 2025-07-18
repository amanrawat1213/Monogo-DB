// https://mongoosejs.com/n
// install mongoose using npm i mongoose
// change the type to module
// instal express using npm i express
import mongoose from "mongoose";
import express from "express";
// once created import the schema
import {Todo} from "./models/todo.js";
let conn= await mongoose.connect("mongodb://localhost:27017/todo")


// start the express server
const app = express()
const port = 3000

app.get('/todos', (req, res) => {
    // const todo=new Todo({title:"Hey first todo",desc:"Description of todo",isDone:false})
    // todo.save();
  res.send('Hello World!')
})

app.post("/todos", (req, res) => {
  

  const newTodo = new Todo({
    title: "aman",
    desc: "this is another desc",
    isDone: false,
  })

  newTodo.save();
  res.send("New todo created!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// create a todo named database and connect to it by changing the address to /todo