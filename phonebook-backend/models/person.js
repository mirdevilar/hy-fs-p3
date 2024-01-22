const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});
personSchema.set('toJSON', { versionKey: false, flattenObjectIds: true });

mongoose.set('strictQuery', false);
mongoose.connect(uri)
  .then((result) => { console.log('connected to MongoDB'); })
  .catch((error) => { console.log('error connecting to MongoDB:', error.message); });

module.exports = mongoose.model('Person', personSchema);
