/**
 * @param {{
 *  id: string,
 *  label: string,
 *  name: string,
 *  additionalClassNames: string,
 *  handleChange: function,
 *  handleBlur: function,
 *  value: string,
 *  isRequired: boolean,
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
          />
        )
      }
    </>
  );
};

export default Input;
