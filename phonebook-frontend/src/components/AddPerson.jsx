const AddPerson = ({newName, newNumber, handleNameUpdate, handleNumberUpdate, handleSubmitPerson}) =>
  <form>
    <div>
      name: 
      <input 
        onChange={handleNameUpdate}
        value={newName}
      />
    </div>
    <div>
      number:
      <input
        onChange={handleNumberUpdate}
        value={newNumber}
      />
    </div>
    <div>
      <button onClick={handleSubmitPerson} type="submit">add</button>
    </div>
  </form>

export default AddPerson