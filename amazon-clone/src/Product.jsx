import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

function Product({ id, title, image, price, rating }) {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  const [cart, setCart] = useState(false);
  const addToBasket = (e) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    setCart(true);
    setTimeout(() => {
      setCart(false);
    }, 1500);
  };
  const directBuy = (e) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    navigate("/payment");
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price.toLocaleString("EN-IN")}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p key={i}>⭐️</p>;
            })}
        </div>
      </div>
      <img src={image} alt="Product" />
      {cart && (
        <div className="cart__signal">
          <p>
            <CheckCircleIcon /> Added to Cart
          </p>
        </div>
      )}
      <div className="buyButtons">
        <button onClick={addToBasket}>Add to Cart</button>
        <button onClick={directBuy}>Buy Now</button>
      </div>
    </div>
  );
}

export default Product;
