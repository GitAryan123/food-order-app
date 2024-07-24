import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amoountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amoountInputRef.current.value;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 0 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddItem(+enteredAmount);
  };

  return (
    <form className={styles["form"]} onSubmit={submitHandler}>
      <Input
        label={"amount"}
        ref={amoountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Enter Amount between 1 to 5</p>}
    </form>
  );
}

export default MealItemForm;
