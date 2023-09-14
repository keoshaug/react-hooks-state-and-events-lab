import React from "react";

function Item({item, toggleInCart}) {
  const {category, inCart, name} = item
  


  return (
    <li className={inCart ? 'in-cart' : ''} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleInCart} className="add">{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
