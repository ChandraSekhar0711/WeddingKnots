import s from "./style.module.css";
export function TextArea({ type, onTextChange, placeholder,name }) {
  return (
    <textarea
    type={type || "text"}
    rows={15} 
    cols={100}
    name={name}
    className={s.input}
    onChange={(e) => onTextChange(e.target.value)}
    placeholder={placeholder}
  ></textarea>
  );
}

