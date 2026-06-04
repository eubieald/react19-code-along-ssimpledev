export const GenericButton = ({
  className = "",
  children = null,
  onClick = null,
}) => {
  return (
    <button className={`generic-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
