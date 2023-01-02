const router = require("express").Router()
const TodoModel = require("../models/todo")

//post
router.post("/add", async(req,res) =>{
    
 const todo = req.body.todo
 const newTodo = await  TodoModel({todo})
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

router.get("/delete/:_id", async(req,res) => {
  const {_id} = req.params;
  console.log(_id)
   const deleteTodo = await TodoModel.deleteOne({ _id})
   console.log(deleteTodo)
   
  try{
    console.log("Deleted Todo successfully")
    res.redirect("/todo");
  }
  catch(err) {
    console.log(err)
  
    
  }
})


  

module.exports = router