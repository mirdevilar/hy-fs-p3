const Filter = ({handleChange, filter}) => {
  return (
  <div>
    filter names:
    <input 
      onChange={handleChange}
      value={filter}
    />
  </div>
  )
}

export default Filter