import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider.jsx";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProductContainer">
      <div className="checkoutProduct">
        <div className="image">
          <img className="checkoutProduct__image" src={image} alt="Product" />
        </div>
        <div className="checkoutProduct__info">
          <div className="productInfo">
            <div>
              <div className="checkoutProduct__title">
                <h3>{title}</h3>
              </div>
              <div className="checkoutProduct__rating">
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <p key={i}>⭐️</p>
                  ))}
              </div>
              <div className="inStock">
                <p>In Stock</p>
              </div>
              <div className="prime">prime</div>
            </div>
            <p className="checkoutProduct__price">
              <small>₹</small>
              <strong>{price.toLocaleString("EN-IN")}</strong>
            </p>
          </div>
          <div className="checkoutButton">
            <button
              className="checkoutProduct__button"
              onClick={removeFromBasket}
            >
              Remove from Basket
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default CheckoutProduct;
