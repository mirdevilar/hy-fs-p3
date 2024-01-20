const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

let persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 3451
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 3442
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3432
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4234
  }
];

app.use(cors());
app.use(morgan('tiny'));
app.use(express.static('dist'));
app.use(express.json());

// API

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const person = persons.find((p) => p.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete('/api/persons/:id', (req, res) => {
  const id = parseInt(req.params.id);
  // check if exists and find index if so
  const index = persons.findIndex((p) => p.id === id);
  if (index !== -1) {
    persons.splice(index, 1);
    res.status(200).end();
  } else {
    res.status(404).end();
  }
});

app.post('/api/persons/', (req, res) => {
  const person = req.body;

  // Error handling
  if (!person.name || !person.name) {
    res.status(400);
    return res.send({ error: 'properties missing' });
  }
  if (persons.some((p) => p.name === person.name)) {
    res.status(400);
    return res.send({ error: 'name must be unique' });
  }

  const id = Math.floor(Math.random() * 9999); // assign new id
  person.id = id;

  persons = persons.concat(person);
  res.json(person);
});

// APP

app.get('/info', (req, res) => {
  const date = new Date().toString();
  const info = `<p>Phonebook has info for ${persons.length} people. </p>`
    + `<p>${date}</p>`
    + '<a href="/api/persons/">Access persons api</a>';

  res.send(info);
});

app.get('/', (req, res) => {
  res.status(302);
  res.set('Location', '/info').end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });
