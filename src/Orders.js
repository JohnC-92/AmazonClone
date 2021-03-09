import React, { useContext, useEffect, useState } from "react";
import "./Orders.css";
import { db } from "./firebase";
import { StateContext } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const { basket, user, basketDispatch } = useContext(StateContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <div className="orders">
      <h1>Your orders</h1>

      <div>
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
