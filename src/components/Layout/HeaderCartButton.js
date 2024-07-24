import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState();
  const { items } = useContext(CartContext);

  const cartItemsNumber = items.reduce((currNo, item) => {
    return currNo + item.amount;
  }, 0);
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const btnClass = `${classes["button"]} ${
    btnIsHighlighted ? `${classes["bump"]}` : ""
  }`;

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
