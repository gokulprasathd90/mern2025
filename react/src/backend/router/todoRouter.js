const express = require('express');
const { get } = require('mongoose');
const todoRouter = express.Router();
todoRouter.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.send("working")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = todoRouter;