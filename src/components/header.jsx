import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import Order from "./Order";


//todo Общая сумма + удаление товаров
const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number(el.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="sum">Общая сумма: {summa} ₽</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Корзина пуста😔</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div className="header-info">
        <span className="logo">Mini-Shop</span>
        <div className="links">
          <FaCartShopping
            onClick={() => setCartOpen((cartOpen = !cartOpen))}
            className={`shop-cart ${cartOpen && "active"}`}
          />
          <a>О нас</a>
          <a>Контакты</a>
          <a>Личный кабинет</a>
        </div>

        {cartOpen && (
          <div className="cart-window">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
