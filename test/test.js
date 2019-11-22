var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('TodoListItems LIST items', function() {
  it('Display all the items /todo GET', function(done) {
	  chai.request('http://localhost:8080')
		.get('/todo')
		.end(function(err, res){
		  res.should.have.status(200);
		  done();
		});
	});
});

describe('TodoListItems ADD', function() {
  it('ADD a new item to the list /todo/add/ POST', function(done) {
	  chai.request('http://localhost:8080')
		.post('/todo/add')
		.set('content-type', 'application/x-www-form-urlencoded')
		.send({newtodo: 'This is a new test'})
		.end(function(err, res){
		  res.should.have.status(200);
		  done();
		});
	});
});

describe('TodoListItems UPDATE', function() {
  it('Update selected item on the list /todo/edit/ POST', function(done) {
	  chai.request('http://localhost:8080')
		.post('/todo/edit')
		.set('content-type', 'application/x-www-form-urlencoded')
		.send({todoid: 5, edit: 'This is and edit'})
		.end(function(err, res){
		  res.should.have.status(200);
		  done();
		});
	});
});

describe('TodoListItems DELETE', function() {
  it('Delete selected item /todo/delete/<id> DELETE', function(done) {
	  chai.request('http://localhost:8080')
		.get('/todo/')
		.end(function(err, res){
		chai.request('http://localhost:8080')
		.delete('/todo/delete/' + res.body.index)
		.end(function(err, resp){
		  resp.should.have.status(200);
		  done();
		});
		});
	});
});