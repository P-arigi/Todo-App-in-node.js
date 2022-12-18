const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    todo: {
        type:String,
        required:true,
    },
})

module.exports = mongoose.model("Todo", TodoSchema)