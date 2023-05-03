const Input = ({
  id,
  label,
  name,
  additionalClassNames = '',
  handleChange,
  handleBlur,
  value,
  isRequired = false,
  placeHolder = '',
}) => {
  return (
    <>
      <label htmlFor={id} className="form-label">{label}</label>
      {
        isRequired === true ? (
          <input
            type="text"
            name={name}
            className={`form-control ${additionalClassNames}`}
            id={id}
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
            placeholder={placeHolder}
            required
          />
        ) : (
          <input
            type="text"
            name={name}
            className={`form-control ${additionalClassNames}`}
            id={id}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeHolder}
            value={value}
          />
        )
      }
    </>
  );
};

export default Input;
