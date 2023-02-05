// const http = require('http') //import http from 'http'
const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())

app.use(express.json())

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
  response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)

  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const maxId = notes.length > 0 
    ? Math.max(...notes.map(n => n.id)) //the ... transforms the array into individual members
    : 0

  return maxId + 1
}

app.post('/api/notes', (request, response) => {
  const body = request.body
  
  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  }

  notes = notes.concat(note)

  response.json(note)
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {  //bind http server assigned to app var to listen to HTTP requests sent to port 3001
  console.log(`Server running on port ${PORT}`)
})
