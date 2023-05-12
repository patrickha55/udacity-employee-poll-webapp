const Button = ({
  type,
  name,
  additionalClassNames = 'btn-primary',
  isDisabled,
  dataTestId = '',
}) => {
  return (
    <button
      type={type}
      className={`btn ${additionalClassNames}`}
      disabled={isDisabled}
      data-testid={`defaultButton${dataTestId}`}>
      {name}
    </button>
  );
};

export default Button;
