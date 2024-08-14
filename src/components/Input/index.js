import "./Input.css";

const Input = ({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  const handleTyping = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={`input-container form-input-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleTyping}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
