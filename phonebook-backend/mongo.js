const mongoose = require('mongoose');

const args = process.argv;

if (args.length < 3) {
  console.log('Password expected: node mongo <password> [optional arguments]');
  process.exit(1);
} else if (![3, 5].includes(args.length)) {
  console.log('Bad arguments! To save a person: node mongo <password> <name> <number>');
  process.exit(1);
}

const passwd = args[2];
const url = `mongodb+srv://alekarhis:${passwd}@phonebook.hsuikx4.mongodb.net/phonebookApp?retryWrites=true&w=majority`;

const personsSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model('Person', personsSchema);

mongoose.set('strictQuery', false);
mongoose.connect(url);

if (args.length === 5) {
  console.log('poop');
  const name = args[3];
  const number = args[4];
  const person = new Person({ name, number });

  person.save().then(() => {
    console.log(`Added ${person.name} with number ${person.number} to the collection!`);
    mongoose.connection.close();
  });
} else if (args.length === 3) {
  Person.find({}).then((result) => {
    result.forEach((person) => console.log(person));
    mongoose.connection.close();
  });
}
