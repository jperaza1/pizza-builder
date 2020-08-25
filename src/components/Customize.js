import React, { useEffect, useState } from "react";

import Base from "../assets/PizzaBase.png";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

export default function Customize({ ingredients, setIngredients }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let granTotal = 0;

    ingredients.map((item) => {
      if (item.value) {
        granTotal = granTotal + item.price;
      }
    });

    setTotal(granTotal);
  }, [ingredients]);

  let history = useHistory();

  const changeIngredients = (e) => {
    const nameIngredients = e.target.name;
    const newValue = e.target.checked;

    const newIngredients = ingredients.map((item) =>
      item.label === nameIngredients ? { ...item, value: newValue } : item
    );
    setIngredients(newIngredients);
    localStorage.setItem("ingredients", JSON.stringify(newIngredients));
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, padding: 40 }}>
        <div style={{ maxHeight: 500, maxWidth: 500, position: "relative" }}>
          {ingredients.map((item, index) => {
            return (
              <motion.div
                initial={item.label === "Queso" ? { scale: 0 } : { opacity: 0 }}
                animate={
                  item.label === "Queso"
                    ? { scale: item.value ? 1 : 0 }
                    : {
                        y: item.value ? 100 : -100,
                        opacity: item.value ? 1 : 0,
                      }
                }
                transition={
                  item.label === "Queso" ? { duration: 0.3 } : { duration: 1 }
                }
                className={
                  item.label === "Queso"
                    ? "cheese z1"
                    : item.label === "Piña"
                    ? "ingredients z3"
                    : "ingredients z4"
                }
                key={index}
              >
                <img
                  src={item.img}
                  alt='Pizza Base'
                  height='100%'
                  width='100%'
                />
              </motion.div>
            );
          })}

          <motion.div transition={{ duration: 1 }}>
            <img src={Base} alt='Pizza Base' height='100%' width='100%' />
          </motion.div>
        </div>
      </div>
      <div style={{ flex: 1, padding: 40 }}>
        <h1>Elija sus Ingredientes</h1>

        {ingredients.map((ingrediente, index) => {
          return (
            <label className='container-checkbox' key={index}>
              {ingrediente.label} $:{" "}
              {Number.parseFloat(ingrediente.price).toFixed(2)}
              <input
                type='checkbox'
                name={ingrediente.label}
                checked={ingrediente.value}
                onChange={changeIngredients}
              />
              <span className='checkmark'></span>
            </label>
          );
        })}
        <h1>Total: ${Number.parseFloat(total).toFixed(2)}</h1>
        <button
          onClick={() => history.push("/checkout")}
          className='proceedToCheckout'
          disabled={total > 0 ? false : true}
        >
          Continuar con el pago
        </button>
      </div>
    </div>
  );
}
