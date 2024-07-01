import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.jsx";
import CheckoutProduct from "./CheckoutProduct.jsx";
import { useStateValue } from "./StateProvider.jsx";
import CurrencyFormat from "react-currency-format";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const sumPrice = (basket) => {
    return basket.reduce((a, b) => a + b.price, 0);
  };
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <div className="checkoutTitle">
            <div className="checkout__title">
              {user ? (
                <>
                  <h3>Hello, {user?.email.split("@")[0]}</h3> <br />
                </>
              ) : (
                ""
              )}
              {basket?.length > 0 ? (
                <>
                  <h1>Shopping Cart</h1>
                  <p className="clearAllLink" onClick={clearCart}>
                    Clear Cart
                  </p>
                </>
              ) : (
                <h1>Your Nexzon Cart is Empty</h1>
              )}
            </div>
            <p>Price</p>
          </div>
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
          <div className="endTotal">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    Subtotal ({basket?.length} items) :
                    <strong>
                      {" "}
                      ₹
                      {basket?.length == 0
                        ? 0
                        : sumPrice(basket).toLocaleString("EN-IN")}
                    </strong>
                  </p>
                </>
              )}
              decimalScale={2}
              value={basket?.length == 0 ? 0 : sumPrice(basket)}
              displayType="text"
              thousandSeparator={true}
              prefix={"₹"}
            />
          </div>
        </div>
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
