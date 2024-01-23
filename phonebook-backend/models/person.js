const mongoose = require('mongoose')

const uri = process.env.MONGODB_URI

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})
personSchema.set('toJSON', {
  versionKey: false,
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toHexString()
    delete returnedObject._id
  }
})

mongoose.set('strictQuery', false)
mongoose.connect(uri)
  .then((result) => { console.log('connected to MongoDB') })
  .catch((error) => { console.log('error connecting to MongoDB:', error.message) })

module.exports = mongoose.model('Person', personSchema)
