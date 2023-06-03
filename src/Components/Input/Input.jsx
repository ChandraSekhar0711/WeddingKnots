import s from "./style.module.css";

export function Input({ type, onTextChange, placeholder, isEditable, value,size }) {
  const inputProps = {
    type: type || "text",
    className: s.input,
    onChange: (e) => onTextChange(e.target.value),
    placeholder: placeholder,
    value: value,
    maxLength: size,
    required: true
  };

  if (isEditable===false) {
    inputProps.readOnly = true;
  }

  return <input {...inputProps} />;
}
