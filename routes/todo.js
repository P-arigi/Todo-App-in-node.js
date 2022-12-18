const router = require("express").Router()
const TodoModel = require("../models/todo")

//post
router.post("/", (req,res) =>{
    
 const todo = req.body.todo
 const newTodo = new TodoModel({todo})
 console.log(newTodo)

 newTodo.save()
 .then(() => {
    console.log("Successfully added todo!")
    res.redirect("/todo")
 })
  .catch((err) =>{
    console.log(err)
  })

})

//delete

router.get("/delete/todo/:_id", (req,res) => {
  const {_id} = req.params;
  console.log(_id)
   const deleteTodo = TodoModel.deleteOne({ _id})
   
  try{
    console.log("Deleted Todo successfully")
    res.redirect("/todo");
  }
  catch(err) {
    console.log(err)
  
    
  }
})
module.exports = router