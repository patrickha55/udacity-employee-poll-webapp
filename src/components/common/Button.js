const Button = ({
  type,
  name,
  additionalClassNames = 'btn-primary',
  isSubmitting,
}) => {
  return (
    <button
      type={type}
      className={`btn ${additionalClassNames}`}
      disabled={isSubmitting}
      data-testid='defaultButton'>
      {name}
    </button>
  );
};

export default Button;
