import React, { useContext } from "react";
import Input from "../UI/Input";
import styles from "./OrderForm.module.css";
import useInput from "../../hooks/use-input";
import CartContext from "../../store/cart-context";

function OrderForm(props) {
  const [enteredName, isNameValid, onNameChange, onNameBlur] = useInput(
    (val) => val.trim().length > 0
  );

  const cartCtx = useContext(CartContext);

  const [enteredAddress, isAddressValid, onAddressChange, onAddressBlur] =
    useInput((val) => val.trim().length > 3);

  const [enteredPhone, isPhoneValid, onPhoneChange, onPhoneBlur] = useInput(
    (val) => val.trim().length === 10
  );

  const inputClassName = ` ${!isNameValid ? `${styles["invalid"]}` : ""}`;
  const inputClassAdd = ` ${!isAddressValid ? `${styles["invalid"]}` : ""}`;
  const inputClassPhone = ` ${!isPhoneValid ? `${styles["invalid"]}` : ""}`;

  const submitHandler = async (event) => {
    event.preventDefault();

    if (
      enteredName.trim().length > 0 &&
      enteredAddress.trim().length > 3 &&
      enteredPhone.trim().length === 10
    ) {
      const jsonFormattedData = JSON.stringify({
        name: enteredName,
        address: enteredAddress,
        phoe: enteredPhone,
        items: cartCtx.items,
      });

      console.log(jsonFormattedData);
      try {
        const res = await fetch("http://localhost:5000/order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: jsonFormattedData,
        });

        const result = await res.json();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className={styles["form"]} onSubmit={submitHandler}>
      <Input
        label={"Name"}
        onBlur={onNameBlur}
        onChange={onNameChange}
        input={{ type: "text", id: "name", value: enteredName }}
        className={styles["order-form"]}
        inputClass={inputClassName}
      />
      <Input
        className={styles["order-form"]}
        label={"Address"}
        onBlur={onAddressBlur}
        onChange={onAddressChange}
        input={{ type: "text", id: "address", value: enteredAddress }}
        inputClass={inputClassAdd}
      />
      <Input
        className={styles["order-form"]}
        label={"Phone no"}
        onBlur={onPhoneBlur}
        onChange={onPhoneChange}
        input={{ type: "text", id: "Phone_no", value: enteredPhone }}
        inputClass={inputClassPhone}
      />

      <div className={styles["total"]}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      <div className={styles["actions"]}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>

        <button className={styles["button"]}>Order</button>
      </div>
    </form>
  );
}

export default OrderForm;
