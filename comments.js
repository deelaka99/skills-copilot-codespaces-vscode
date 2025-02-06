// Create web server
// Create comments array
// Create GET /comments route
// Create POST /comments route
// Create PUT /comments route
// Create DELETE /comments route

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const comments = [];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.status(201).json(req.body);
});

app.put('/comments/:id', (req, res) => {
  comments[req.params.id] = req.body;
  res.status(200).json(req.body);
});

app.delete('/comments/:id', (req, res) => {
  comments.splice(req.params.id, 1);
  res.status(204).send();
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Test the routes using Postman
// GET /comments - returns []
// POST /comments - returns 201
// GET /comments - returns [{}]
// PUT /comments/0 - returns 200
// DELETE /comments/0 - returns 204
// GET /comments - returns []