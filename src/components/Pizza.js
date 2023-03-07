import React from "react";

function Pizza({ pizza }) {
  const { topping, size, vegetarian } = pizza;

  // function handleClick() {
  //   onEditPizza(id);
  // }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian}</td>
      <td>
        <button 
        type="button" 
        className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
