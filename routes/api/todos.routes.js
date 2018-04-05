//API layer
//api endpoints!

var express = require('express');

var router = express.Router();

//get todo controller

var ToDoController = require('../../controllers/todos.controllers');

//map api to controller functions

router.get('/', ToDoController.getTodos);

router.post('/', ToDoController.createTodo);

router.put('/', ToDoController.updateTodo);

router.delete('/:id', ToDoController.removeTodo);

//export Router
module.exports = router;
