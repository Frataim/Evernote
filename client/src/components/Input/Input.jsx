function Input({ handleChange, value, name, type = 'text' }) {

  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{name}: {value}</label>
      <input onChange={handleChange} value={value} type={type} className="form-control" id={name} aria-describedby={name} />
    </div>
  )
}

export default Input;
