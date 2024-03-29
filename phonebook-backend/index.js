require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

const app = express()

// ERROR HANDLERS

const handleUnknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (err, req, res, next) => {
  if (err.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  }
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message })
  }

  next(err)
}

// MIDDLEWARE

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(morgan('tiny'))

// REST API ROUTES

app.get('/api/persons', (req, res, next) => {
  Person.find({})
    .then((r) => {
      res.json(r)
    })
    .catch((err) => { next(err) })
})

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then((r) => {
      if (r) {
        res.json(r)
      } else {
        res.status(404).end()
      }
    })
    .catch((err) => { next(err) })
})

app.post('/api/persons/', (req, res, next) => {
  const person = new Person(req.body)

  person.save()
    .then((r) => {
      //persons = persons.concat(person)
      res.status(201)
        .location(`/api/persons/${r.id}`)
        .json(r)
    })
    .catch((err) => { next(err) })
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(204).end()
    })
    .catch((err) => { next(err) })
})

app.put('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true, context: 'query' }
  )
    .then((r) => {
      res.status(200)
        .json(r)
    })
    .catch((err) => { next(err) })
})

app.get('/info', (req, res) => {
  Person.find({}).then((r) => {
    const date = new Date().toString()
    const info = `<p>Phonebook has info for ${r.length} people. </p>`
      + `<p>${date}</p>`
      + '<a href="/api/persons/">Access persons api</a>'

    res.send(info)
  })
})

app.use(handleUnknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })
