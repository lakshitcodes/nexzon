import React from "react";
import "./OrderProduct.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

function OrderProduct({ image, description }) {
  return (
    <div className="orderproduct">
      <div className="product__image">
        <img src={`dist${image}`} alt="" className="image" />
      </div>
      <div className="orderProduct__info">
        <p className="hoverLink">{description}</p>
        <div className="buttons">
          <button className="white__button small__button">
            <ShoppingBagIcon className="shoppingIcon" />
            Buy it again
          </button>
          <button className="white__button small__button">
            View Your Item
          </button>
        </div>
      </div>
      <div className="product__review">
        <button className="white__button">Write a product review</button>
      </div>
    </div>
  );
}

export default OrderProduct;
