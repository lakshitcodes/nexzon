import React, { useEffect, useState } from "react";
import { db } from "./firebase.js";
import "./Orders.css";
import { useStateValue } from "./StateProvider.jsx";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import Order from "./Order.jsx";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const ordersRef = collection(db, "users", user?.uid, "orders");
      const q = query(ordersRef, orderBy("created", "desc"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

      // Clean up the subscription
      return () => unsubscribe();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <div className="orders__container">
        <h1>Your Orders</h1>
        <div className="orders__order">
          {orders?.map((order) => (
            <Order order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
