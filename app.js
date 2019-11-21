const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

let todolist = [];

/* The to do list and the form are displayed */
app.get('/todo', function(req, res) {
    res.render('todo.ejs', { todolist, clickHandler:"func1();" });
})

/* Adding an item to the to do list */
app.post('/todo/add/', urlencodedParser, function(req, res) {
    if (req.body.newtodo != '') {
        todolist.push(req.body.newtodo);
    }
    res.redirect('/todo');
})

/* update an item on the to do list */
app.post('/todo/edit/', urlencodedParser, function(req, res){
	if (req.body.edit != '') {
        todolist.splice(req.body.todoid, 1, req.body.edit);
    }
    res.redirect('/todo');
})

/* Deletes an item from the to do list */
app.get('/todo/delete/:id', function(req, res) {
    if (req.params.id != '') {
        todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
})

/* Redirects to the to do list if the page requested is not found */
app.use(function(req, res, next){
    res.redirect('/todo');
})

app.listen(8080, function () {
	console.log('We are listening on port 8080!')
})

module.exports = app;