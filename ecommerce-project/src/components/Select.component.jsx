export const GenericSelect = ({ className = "", options }) => {
  return (
    <select className={`generic-select ${className}`}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
