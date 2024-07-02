import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

function Subtotal({ onCheckoutComplete }) {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const sumPrice = (basket) => {
    return basket.reduce((a, b) => a + b.price, 0);
  };
  const handleOrderCompletion = () => {
    onCheckoutComplete();
    navigate("/payment", { replace: true });
  };
  return (
    <div className="subtotal">
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
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={basket?.length == 0 ? 0 : sumPrice(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button className="subtotal__button" onClick={handleOrderCompletion}>
        Proceed to buy
      </button>
    </div>
  );
}

export default Subtotal;
