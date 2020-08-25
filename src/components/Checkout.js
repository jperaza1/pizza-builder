import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Pizzaman from "../assets/pizza_logo.png";

export default function Checkout({ ingredients }) {
  const history = useHistory();
  const [success, setSuccess] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let granTotal = 0;

    ingredients.map((item, index) => {
      if (item.value) {
        granTotal = granTotal + item.price;
      }
    });
    setTotal(granTotal);
  }, [ingredients]);

  return (
    <div style={{ padding: 50, display: "flex" }}>
      <div style={{ flex: 1 }}>
        <div>
          <h1 style={{ fontFamily: "Comfortaa" }}>Mis Ingredientes</h1>
          {total === 0 && <p>No ingredients Selected</p>}

          {ingredients.map((item, index) => {
            if (item.value) {
              return <p key={index}>{item.label}</p>;
            }
          })}
          <h1>Total: {Number.parseFloat(total).toFixed(2)}</h1>
          <button
            className='proceedToCheckout'
            onClick={() => history.push("/")}
          >
            Atras
          </button>
          <button
            onClick={() => setSuccess(true)}
            className='proceedToCheckout'
            style={{ marginLeft: 10 }}
            disabled={total > 0 ? false : true}
          >
            Confirmar
          </button>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        {success && (
          <div style={{ textAlign: "center" }}>
            <img src={Pizzaman} alt='pizzaman' height='300px' />
            <div style={{ fontFamily: "Open Sans Condensed", fontSize: 35 }}>
              Hemos recibido tu pedido, gracias
            </div>
            <div style={{ fontFamily: "Comfortaa" }}>
              Orden #{Math.round(Math.random() * 100000)}
            </div>
            <div style={{ fontFamily: "Indie Flower", fontSize: 20 }}>
              Estará lista en 20-30 min.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
