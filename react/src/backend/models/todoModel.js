const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    task:String,
    status:{
        type: Boolean,default: false}}
    );
    mpodule.exports = mongoose.model('Todo', todoSchema);
    