import React from "react";
import "./OrderProduct.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router";

function OrderProduct({ id, image, description, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const handleBuyProduct = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        description: description,
        price: price,
        rating: rating,
      },
    });
    navigate("/checkout");
  };
  return (
    <div className="orderproduct">
      <div className="product__image">
        <img src={image} alt="" className="image" />
      </div>
      <div className="orderProduct__info">
        <p className="hoverLink">{description}</p>
        <div className="buttons">
          <button
            className="white__button small__button"
            onClick={handleBuyProduct}
          >
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
