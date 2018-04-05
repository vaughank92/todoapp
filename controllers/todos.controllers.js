//accessing service
//controller layer
var TodoService = require('../services/todo.service');

//saving context
_this = this;

//async controller funct to get the todo list
exports.getTodos = async function(req, res, next) {
  //check for query params, assign values if nonexistent
  var page = req.query.page ? req.query.page : 1;
  var limit = req.query.limit ? req.query.limit : 10;

  try{
    var todos = await TodoService.getTodos({}, page, limit);
    return res.status(200).json({status: 200, data: todos, message: "Successfully Received Todos"});
  }
  catch(e) {
    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.createTodo = async function(req, res, next) {
  var todo = {
    title : req.body.title,
    description : req.body.description,
    status : req.body.status
  }
  try{
    //call service function with new object
    var createdTodo = await TodoService.createTodo(todo);
    return res.status(201).json({status: 201, data: createdTodo, message: 'Success'});
  }
  catch(e) {
    return res.status(400).json({status: 400, message: "Error: " + e.message});
  }
};

exports.updateTodo = async function(req, res, next) {
  if(!req.body._id) {
    return res.status(400).json({status: 400, message: "Id must be present"});
  }
  var id = req.body._id;
  console.log(req.body);

  var todo = {
    id,
    title: req.body.title ? req.body.title : null,
    description: req.body.description ? req.body.description : null,
    status: req.body.status ? req.body.status : null
  }

  try{
    var updatedTodo = await TodoService.updateTodo(todo);
    return res.status(200).json({status: 200, data: updatedTodo, message: "Success"});
  }
  catch(e) {
    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.removeTodo = async function(req, res, next) {
  var id = req.params.id;

  try{
    var deleted = await TodoService.deleteTodo(id);
    return res.status(204).json({status: 204, message: "Successfully Deleted"});
  }
  catch(e) {
    return res.status(400).json({status: 400, message: e.message});
  }
}
