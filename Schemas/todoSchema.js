const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    todoContent: {
        type: String,
        required: true,
    },

    status: {
        type: String
    }
})

module.exports = taskSchema