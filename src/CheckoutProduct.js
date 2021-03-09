import React, { useContext } from "react";
import "./CheckoutProduct.css";
import { StateContext } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const { basket, basketDispatch } = useContext(StateContext);

  const RemoveFromBasket = (id) => {
    basketDispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt=""></img>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={() => RemoveFromBasket(id)}>
            Remove from basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
