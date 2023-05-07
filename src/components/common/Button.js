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
      disabled={isSubmitting}>
      {name}
    </button>
  );
};

export default Button;
