const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2] //pw is: c2xApE0oxc7f0FSS

const url = `mongodb+srv://phonebook:${password}@cluster0.y6r6eie.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

//tells Mongoose how the note objects are to be stored in the database
const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
})

//models are constructor functions that create new JS objects based on the provided parameters
const Contact = mongoose.model('Contact', contactSchema)

if (process.argv.length === 5) {
  const contact = new Contact({
    name: process.argv[3],
    number: process.argv[4],
  })
  
  //save to database
  contact.save().then(result => {
    console.log(`added ${contact.name} number ${contact.number} to phonebook`)
    mongoose.connection.close()
  })
  
} else if (process.argv.length === 3) {
  Contact.find({}).then(result => {
  
  result.forEach(person => {
    console.log(person)
  })
  
  mongoose.connection.close()
})

}


