import React from "react";
import "./SearchComponent.css";
import { useStateValue } from "./StateProvider";

function SearchComponent({ product }) {
  const [{ basket }, dispatch] = useStateValue();
  function roundToNearestUpperThousand(num) {
    return Math.ceil(num / 10000) * 10000;
  }
  const addProductToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        rating: product.rating,
      },
    });
  };
  return (
    <div className="searchComponent">
      <div className="searchProduct__image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="searchProduct__info">
        <h3>{product.title}</h3>
        <div className="searchProduct__rating">
          {Array(product.rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐️</p>
            ))}
        </div>
        <div className="searchProduct__price">
          ₹<h2>{product.price.toLocaleString("en-IN")}</h2>
          <p className="search__smalltext">
            M.R.P:{" "}
            <s>
              ₹
              {roundToNearestUpperThousand(product.price * 1.2).toLocaleString(
                "en-IN"
              )}
            </s>
          </p>
        </div>
        <div className="prime">prime</div>
        <button className="shoppingButton" onClick={addProductToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default SearchComponent;
