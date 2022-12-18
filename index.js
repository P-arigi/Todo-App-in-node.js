const bodyParser = require("body-parser")
const express = require("express")
const mongoose = require("mongoose")


const index = require("./routes/index")
const TodoRouter = require("./routes/todo")

const app = express()

const url = ("mongodb://ParigiAkhila:parigiakhila2001@ac-sbthcco-shard-00-00.dropbnq.mongodb.net:27017,ac-sbthcco-shard-00-01.dropbnq.mongodb.net:27017,ac-sbthcco-shard-00-02.dropbnq.mongodb.net:27017/?ssl=true&replicaSet=atlas-g86lxn-shard-0&authSource=admin&retryWrites=true&w=majority")
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true})

app.get('/get',(req,res)=> {
    res.status(200).json("Hello Backend")
    })

//middlewares
app.use(express.json())
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true }))
app.set("view engine", "ejs")  //For using the views files.
app.use("/todo", index)
app.use("/add/todo",TodoRouter)



app.listen(3000,() =>console.log("Server is listing to port number"))
