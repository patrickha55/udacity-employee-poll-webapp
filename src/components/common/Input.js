/**
 * @param {{
 *  id: string,
 *  label: string,
 *  name: string,
 *  additionalClassNames: string,
 *  handleChange: function,
 *  handleBlur: function,
 *  value: string,
 *  placeHolder: string,
 *  type: string,
 * }} props
 * 
 * @returns {JSX.Element}
 */
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
  type,
}) => {
  return (
    <>
      <label htmlFor={id} className="form-label">{label}</label>
      {
        isRequired === true ? (
          <input
            type={type}
            name={name}
            className={`form-control ${additionalClassNames}`}
            id={id}
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
            placeholder={placeHolder}
            autoComplete='on'
            data-testid={`${name}RequiredInput`}
            required
          />
        ) : (
          <input
            type={type}
            name={name}
            className={`form-control ${additionalClassNames}`}
            id={id}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeHolder}
            value={value}
            data-testid={`${name}Input`}
            autoComplete='on'
          />
        )
      }
    </>
  );
};

export default Input;