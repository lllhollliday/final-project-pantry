const FormRow = ({ type, name, title, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || title}
      </label>
      <input
        type={type}
        name={name}
        onChange={handleChange}
        className="form-input"

      />
    </div>
  )
}

export default FormRow
