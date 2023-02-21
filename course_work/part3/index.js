
require('dotenv').config()
app.use(express.json())
const express = require('express')
const app = express()
const Note = require('./models/note')

const cors = require('cors')

app.use(cors())

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint'})
}

//handler of requests with unknown endpoint
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({error: 'malformatted id'})
  }

  next(error)
}

//handler of requests with result to errors
app.use(errorHandler)

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

//event handler for HTTP GET requests made to app's /root
//request == all the info of the HTTP request
// response == how  request is responded to
app.get('/', (request, response) => { 
  response.send('<h1>Hello World!</h1>')
})

// const app = http.createServer((request, response) => { //create web server
//   response.writeHead(200, {'Content-Type': 'text/plain'}) //request responsed with status code 200
//   response.end(JSON.stringify(notes))
// })
app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.params.id)
    .then(note => {
      if (note) {
        response.json(note)
      } else {
        response.status(404).end()
      }
      
    })
    .catch(error => next(error))
})

app.delete('/api/notes/:id', (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.put('/api/notes/:id', (request, response, next) => {
  const body = request.body

  const note = {
    content: body.content,
    important: body.important,
  }

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})

app.post('/api/notes', (request, response) => {
  const body = request.body
  
  if (body.content === undefined) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  })

  note.save().then(savedNote => {
    response.json(savedNote) //the data sent back in the response is formatted, created automatically within the toJSON method
  })
})



const PORT = process.env.PORT
app.listen(PORT, () => {  //bind http server assigned to app var to listen to HTTP requests sent to port 3001
  console.log(`Server running on port ${PORT}`)
})

