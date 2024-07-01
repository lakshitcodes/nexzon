import React from "react";
import "./Order.css";
import moment from "moment";
import OrderProduct from "./OrderProduct";

function Order({ order }) {
  let totAmount = order.data.amount / 100;
  return (
    <div className="order">
      <div className="upperbox">
        <div className="order__info">
          <p className="order__smallText">ORDER PLACED</p>
          <p>{moment.unix(order.data.created).format("D MMMM YYYY")}</p>
        </div>
        <div className="order__info">
          <p className="order__smallText">TOTAL</p>
          <p>₹{totAmount.toLocaleString("EN-IN")}</p>
        </div>
        <div className="order__hash">
          <p className="order__smallText">ORDER</p>
          <p className="order__id">
            <small>{order.id}</small>
          </p>
        </div>
      </div>
      {order.data.basket?.map((item) => (
        <OrderProduct image={item.image} description={item.title} />
      ))}
      <div className="lowerbox">
        <p className="hoverLink">Archive Order</p>
      </div>
    </div>
  );
}

export default Order;
