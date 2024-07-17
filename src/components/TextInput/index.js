import "./TextInput.css";

const TextInput = (props) => {
  const handleTyping = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="text-input">
      <label>{props.label}</label>
      <input
        value={props.inputValue}
        onChange={handleTyping}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextInput;
