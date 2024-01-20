const Person = ({ person, handleRemove }) => (
  <li className="person">
    {person.name}
    :
    {person.number}
    <button id={person.id} onClick={handleRemove}>delete</button>
  </li>
);

const PersonsList = ({ persons, filter, handleRemove }) => {
  const list = filter
    ? persons.filter((person) => person.name.toLowerCase()
      .includes(filter.toLowerCase()))
    : persons;

  return (
    <ul>
      {list.map((person, i) => (
        <Person
          key={i}
          person={person}
          handleRemove={handleRemove}
        />
      ))}

    </ul>
  );
};

export default PersonsList;
