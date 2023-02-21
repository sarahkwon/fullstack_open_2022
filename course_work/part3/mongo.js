const mongoose = require('mongoose')

if (process.argv.length < 5) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstackopen2022:${password}@cluster0.w2q1cub.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

//tells Mongoose how the note objects are to be stored in the database
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

//models are constructor functions that create new JS objects based on the provided parameters
const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: 'HTML is Easy',
//   important: true,
// })

// //save to database
// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})

