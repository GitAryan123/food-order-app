import { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartCloseHandler = () => {
    setCartIsShown(false);
  };

  const cartOpenHandler = () => {
    setCartIsShown(true);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={cartCloseHandler} />}
      <Header onCartOpen={cartOpenHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
