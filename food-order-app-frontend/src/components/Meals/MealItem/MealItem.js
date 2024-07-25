import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItem(props) {
  const cartCtx = useContext(CartContext);

  const onAddItemHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={styles["meal"]}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles["description"]}>{props.description}</div>
        <div className={styles["price"]}>{props.price}</div>
      </div>
      <div>
        <MealItemForm onAddItem={onAddItemHandler} id={props.id} />
      </div>
    </li>
  );
}

export default MealItem;
