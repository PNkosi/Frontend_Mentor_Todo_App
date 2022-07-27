// PACKAGES
require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')

// Modules
const taskSchema = require('./Schemas/todoSchema')

//DB Connections
mongoose.connect(process.env.TODO_DB_URISTRING)

const Todo = new mongoose.model('Todo', taskSchema)


const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


// Determine the number of todos remaining

app.get("/", (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) console.log(err)
    else {
      let remaining;
      Todo.find({status: 'pending'}, (err, pendingTodos) => {
        remaining = pendingTodos.length

        res.render('index', {
        todos,
        todosRemaining: remaining
      })
      })
    }
  })
});

app.post("/", (req, res) => {

  const todoItem = new Todo({
    todoContent: req.body.todoInput,
    status: "pending"
  })

  todoItem.save(err => {
    if (err) console.log(err)
    else {
      console.log('todo saved in DB')
      res.redirect("/");
    }
  })
  
});


app.post('/delete', (req, res) => {
  Todo.deleteOne({ _id: req.body.id } , (err, foundTdo) => {
    if (err) console.log(err)
    else {
      console.log(`${foundTdo.todoConent} deleted`)
      res.redirect('/')
    }
  })
})

app.post('/delete-completed', (req, res) => {
  Todo.deleteMany({status: 'completed'} , (err, result) => {
    if (!err) {
      res.redirect('/')
    }
  })

})


// handles updating the item between being active and completed
app.post('/update', (req, res) => {

  Todo.findOne({ _id: req.body.id }, (err, todo) => {
    if (err) console.log(err)
    else {
      if (todo.status === 'pending') {
        Todo.updateOne({ _id: req.body.id }, 
          {$set : { status: 'completed' }},
          (err, todo) => {})
          res.redirect('/')
      }
      else {
        Todo.updateOne({ _id: req.body.id }, 
          {$set : { status: 'pending' }},
          (err, todo) => {})
          res.redirect('/')
      }
    }
  })
})

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`The server is listening on http://localhost:${port}`)
);
