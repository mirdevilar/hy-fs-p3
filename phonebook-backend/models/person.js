const mongoose = require('mongoose')

const uri = process.env.MONGODB_URI

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [3, 'Name must be at least 3 characters long!'],
    required: [true, 'Name is required!'],
  },
  number: {
    type: String,
    required: [true, 'Phone number is required'],
    minLength: 8,
    validate: {
      validator: (v) => /\b\d{2,3}-\d*\b/.test(v),
      message: 'Wrong phone number format!'
    }
  },
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
