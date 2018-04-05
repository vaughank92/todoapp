//uses the todos route module

var express = require('express');

var router = express.Router();
var todos = require('./api/todos.routes');

router.use('/todos', todos);

module.exports = router;
