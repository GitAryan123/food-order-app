import { useState } from "react";

const useInput = (validation) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onInputBlur = (event) => {
    setIsInputValid(validation(event.target.value));
  };

  return [inputValue, isInputValid, onInputChange, onInputBlur];
};

export default useInput;
