import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

const [pizzas, setPizzas] = useState("");

useEffect(() => {
  fetch("http://localhost:3001/pizzas")
  .then(res => res.json())
  .then(pizzas => setPizzas(pizzas))
}, [])

  return (
    <>
      <Header />
      <PizzaForm />
      <PizzaList 
        pizzas={pizzas}
      />
    </>
  );
}

export default App;
