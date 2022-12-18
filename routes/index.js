const router = require("express").Router()
const TodoModel = require("../models/todo")

router.get("/", async(req,res) => {

    const allTodo = await TodoModel.find()
    res.render("index", {todo:allTodo})
})

module.exports = router