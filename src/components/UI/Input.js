import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputClass = `${styles["input"]} ${
    props.className ? `${props.className}` : ""
  }`;

  return (
    <div className={inputClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={ref}
        {...props.input}
        onBlur={props.onBlur}
        onChange={props.onChange}
        className={props.inputClass ?? ""}
      />
    </div>
  );
});

export default Input;
