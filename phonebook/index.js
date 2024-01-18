// eslint-disable-next-line no-undef
const express = require('express')
const app = express()

app.use(express.json())

let persons = [
  { 
    'id': 3451,
    'name': 'Arto Hellas', 
    'number': '040-123456'
  },
  { 
    'id': 3442,
    'name': 'Ada Lovelace', 
    'number': '39-44-5323523'
  }/*,
  { 
    'id': 3,
    'name': 'Dan Abramov', 
    'number': '12-43-234345'
  },
  { 
    'id': 4,
    'name': 'Mary Poppendieck',
    'number': '39-23-6423122'
  }*/
]   

// API

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const person = persons.find((p) => p.id == req.params.id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
  
})

app.delete('/api/persons/:id', (req, res) => {
  const id = parseInt(req.params.id)
  // check if exists and find index if so
  const index = persons.findIndex((p) => p.id === id)
  console.log(typeof(id))
  if (index !== -1) {
    persons.splice(index, 1)
    res.status(204).end()
  } else {
    res.status(404).end()
  }
})

app.post('/api/persons/', (req, res) => {
  // assign new id
  const id = Math.floor(Math.random() * 9999)
  const person = req.body
  person.id = id

  persons = persons.concat(person)
  res.json(person)
})

// APP

app.get('/info', (req, res) => {
  const date = new Date().toString()
  const info = `<p>Phonebook has info for ${persons.length} people.</p>`
    + `<p>${date}</p>`
  
  res.send(info)
})

const PORT = 3001
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})