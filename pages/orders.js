import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";
import OrderItem from "../components/OrderItem";
import router from "next/router";

import Header from "../components/Header";

import styles from "../styles/Orders.module.scss";

function Orders() {
  const user = useSelector((state) => state.authState);
  const database = getDatabase();
  const ordersRef = ref(database, `orders/${user.userId}`);
  const [orders, setOrders] = useState([]);

  if (!user?.userId) router.replace("/");

  useEffect(() => {
    onValue(ordersRef, (snapshot) => {
      const data = snapshot.val();
      for (const orderId of Object.keys(data)) {
        const dataArr = data[orderId].orders.map((order) => {
          return {
            ...order,
            address: data[orderId].deliveryAddess,
            date: data[orderId].timestamp,
          };
        });
        setOrders((prevOrders) => [...prevOrders, ...dataArr]);
      }
    });
  }, []);

  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <article className={styles.orders}>
          <h1>Your Orders</h1>
          {orders.lenght <= 0
            ? ""
            : orders.map((product, index) => (
                <OrderItem key={index} product={product} />
              ))}
        </article>
      </main>
    </Fragment>
  );
}

export default Orders;
