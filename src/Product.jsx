import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
import useAuth from "./isSignedIn";

function Product({ id, title, image, price, rating }) {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  const [cart, setCart] = useState(false);
  const { isSignedIn } = useAuth();

  const addToBasket = (e) => {
    if (isSignedIn()) {
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
    }
  };

  const directBuy = (e) => {
    if (isSignedIn()) {
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
    }
  };

  return (
    <div className="product">
      <img src={image} alt="Product" />
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price.toLocaleString("EN-IN")}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐️</p>
            ))}
        </div>
      </div>
      <div className="buyButtons">
        <button className="addButton" onClick={addToBasket}>
          Add to Cart
        </button>
        <button className="buyButton" onClick={directBuy}>
          Buy Now
        </button>
      </div>
      {cart && (
        <div className="cart__signal">
          <CheckCircleIcon />
          <p>Added to Cart</p>
        </div>
      )}
    </div>
  );
}

export default Product;
