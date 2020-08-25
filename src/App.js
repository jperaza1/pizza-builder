import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Customize from "./components/Customize";
import Checkout from "./components/Checkout";

import Olive from "./assets/Olive.png";
import Pineaple from "./assets/Pineapple.png";
import Mushroom from "./assets/Mushroom.png";
import Basil from "./assets/Basil.png";
import Tomato from "./assets/Tomato.png";
import Cheese from "./assets/BaseCheese.png";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [ingredients, setIngredients] = useState([
    { value: false, label: "Albahaca", price: 0.5, img: Basil },
    { value: false, label: "Aceituna", price: 0.5, img: Olive },
    { value: false, label: "Champiñones", price: 1.0, img: Mushroom },
    { value: false, label: "Piña", price: 1.0, img: Pineaple },
    { value: false, label: "Queso", price: 2.0, img: Cheese },
    { value: false, label: "Tomate", price: 1.0, img: Tomato },
  ]);

  useEffect(() => {
    const data = localStorage.getItem("ingredients");
    if (data) {
      setIngredients(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path='/'>
              <Customize
                ingredients={ingredients}
                setIngredients={setIngredients}
              />
            </Route>
            <Route exact path='/checkout'>
              <Checkout ingredients={ingredients} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
